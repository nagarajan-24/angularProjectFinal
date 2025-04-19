import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private babyListKey = 'babyList';
  private currentBabyKey = 'currentBaby';
  private activityPrefix = 'activity_';       
  constructor() {
    console.log(this.babyListKey)
    console.log(this.activityPrefix)
    console.log(this.currentBabyKey)
  }
  private selectedBabySource = new BehaviorSubject<any>(null);
  selectedBaby$ = this.selectedBabySource.asObservable();
  
  setSelectedBaby(baby: any) {
    this.selectedBabySource.next(baby);
  }
  getSelectedBaby() {
    return this.selectedBabySource.value;
  }

  // Get all baby names stored in localStorage
  getAllBabyNames(): string[] {
    const stored = localStorage.getItem(this.babyListKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Create a new baby and initialize empty activity list
  createBaby(name: string) {
    const babies = this.getAllBabyNames();
    if (!babies.includes(name)) {
      babies.push(name);
      localStorage.setItem(this.babyListKey, JSON.stringify(babies));
      localStorage.setItem(this.activityPrefix + name, JSON.stringify([]));
    }
  }
 
  setCurrentBabyName(name: string) {
    localStorage.setItem(this.currentBabyKey, name);
  }
  getCurrentBabyName(): string {
    return localStorage.getItem(this.currentBabyKey) || '';
  }

  // Get logs for the current selected baby
  getLogsForCurrentBaby(): any[] {
    return this.getLogs(this.getCurrentBabyName());
  }

  // Get logs for a specific baby
  getLogs(name: string): any[] {
    return JSON.parse(localStorage.getItem(this.activityPrefix + name) || '[]');
  }
  getActivities(baby: string): any[] {
    return JSON.parse(localStorage.getItem(this.activityPrefix + baby) || '[]');
  }

  // Add a new activity to a baby's logs
  addActivity(babyName: string, activity: any) {
    const logs = this.getLogs(babyName);
    logs.push(activity);
    localStorage.setItem(this.activityPrefix + babyName, JSON.stringify(logs));
  }

  // Clear all logs for a baby
  clearLogsFor(babyName: string) {
    localStorage.removeItem(this.activityPrefix + babyName);
  }

  updateBabyName(oldName: string, newName: string): boolean {
    const allBabies = JSON.parse(localStorage.getItem('babyList') || '[]');
    
    const index = allBabies.findIndex((b: string) => b === oldName);
  
    if (index !== -1) {
      // Update baby list
      allBabies[index] = newName;
      localStorage.setItem('babyList', JSON.stringify(allBabies));
  
      // Migrate activity data
      const activityData = localStorage.getItem(oldName);
      if (activityData) {
        localStorage.setItem(newName, activityData);
        localStorage.removeItem(oldName);
      }
  
      // If the updated baby is the current one, update current selection
      const current = localStorage.getItem('currentBaby');
      if (current === oldName) {
        localStorage.setItem('currentBaby', newName);
      }
  
      return true;
    }
  
    return false;
  }

  
}
