import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private babyListKey = 'babyList';
  private currentBabyKey = 'currentBaby';
  private activityPrefix = 'activity_';       

  constructor() { }

  private selectBabySource = new BehaviorSubject<any>(null);
  selectBaby$ = this.selectBabySource.asObservable();

  getAllBabyNames(): string[] {
    const stored =localStorage.getItem(this.babyListKey);

    return stored ? JSON.parse(stored) : [];
  }
  createBaby(name: string) {
    const babies = this.getAllBabyNames();
    if (!babies.includes(name)) {
      babies.push(name);
      localStorage.setItem(this.babyListKey, JSON.stringify(babies));
      localStorage.setItem(this.activityPrefix + name, JSON.stringify([]));
    } else {
      alert('Already that baby name is there');
    }
  }
  getBabyLogs(babyName: string): any[] {
    return JSON.parse(localStorage.getItem(this.activityPrefix + babyName) || '[]');
  }
  addActivity(babyName: string, activity: any) {
    const logs = this.getBabyLogs(babyName);
    logs.push(activity);
    localStorage.setItem(this.activityPrefix + babyName, JSON.stringify(logs));
  }
  setCurrentBabyName(name: string) {
    localStorage.setItem(this.currentBabyKey, name);
  }
  getCurrentBabyName(): string {
    return localStorage.getItem(this.currentBabyKey) || '';
  }
  
  getLogsForCurrentBaby(): any[] {
    return this.getBabyLogs(this.getCurrentBabyName());
  }
 

  updateBabyName(oldName: string, newName: string): boolean {
    const allBabies = JSON.parse(localStorage.getItem(this.babyListKey) || '[]');
    const index = allBabies.findIndex((b: string) => b === oldName);

    if (index !== -1) {
      allBabies[index] = newName;
      localStorage.setItem(this.babyListKey, JSON.stringify(allBabies));

      const activityData = localStorage.getItem(this.activityPrefix + oldName);
      if (activityData) {
        localStorage.setItem(this.activityPrefix + newName, activityData);
        localStorage.removeItem(this.activityPrefix + oldName);
      }

      const current = localStorage.getItem(this.currentBabyKey);
      if (current === oldName) {
        localStorage.setItem(this.currentBabyKey, newName);
      }

      return true;
    }

    return false;
  }

  clearLogsFor(babyName: string) {
    localStorage.removeItem(this.activityPrefix + babyName);
    alert('Clear logs successfully for ' + babyName);
  }

  
}
