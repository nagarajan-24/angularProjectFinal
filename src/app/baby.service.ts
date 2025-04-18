import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabyService {

  private babys: { [babyName: string]: any[] } = {};
  private localStorageKey = 'bDatas';
  private id = 'bName';
  constructor() { }
  getAllLogs(): any {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : {};
  }
  addActivity(bid: string, activity: any): void {
    const allData = this.getAllLogs();
    if (!allData[bid]) {
      allData[bid] = [];
    }
    allData[bid].push(activity);
    localStorage.setItem(this.localStorageKey, JSON.stringify(allData));
  }
  clearLogs() {
    localStorage.removeItem(this.localStorageKey);
  }
  getBabyName(babyId: string): string {
    const names = JSON.parse(localStorage.getItem(this.id) || '{}');
    return names[babyId] || '';
  }
  getLogsFor(babyId: string): any[] {
    const all = this.getAllLogs();
    return all[babyId] || [];
  }
  getTime(babyId: string): string {
    const logs = this.getLogsFor(babyId);
    if (!logs.length) return 'No logs';
    const latest = logs[logs.length - 1];
    const endTime = new Date(latest.eTime || latest.sTime).getTime();
    const now = Date.now();
    const diff = now - endTime;

    const mins = Math.floor(diff / (1000 * 60));
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;

    return `${hrs} hrs ${remMins} mins ago`;
  }
  renameBaby(oldName: string, newName: string): void {
    if (this.babys[oldName]) {
      this.babys[newName] = this.babys[oldName];
      delete this.babys[oldName];
    }
  }
}
