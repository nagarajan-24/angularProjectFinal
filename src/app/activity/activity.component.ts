import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { TimeDatePipe } from "../time-date.pipe";


@Component({
  selector: 'app-activity',
  imports: [CommonModule, TimeDatePipe],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  babyName: string = '';
  latestFeeding: any = null;
  latestSleeping: any = null;
  latestDiaper: any = null;
  lastUpdated: string = '';
  feedingAgo = '';
  sleepingAgo = '';
  diaperAgo = '';

  constructor(private route: ActivatedRoute, private bs: ServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const name = p.get('name');
      if (name) {
        this.bs.setCurrentBabyName(name);
        this.babyName = name;
        this.loadBabyDetails();
      }
    });
  }

  loadBabyDetails() {
    const logs = this.bs.getLogsForCurrentBaby();

    this.latestFeeding = this.getLatestByType(logs, 'feeding');
    this.latestSleeping = this.getLatestByType(logs, 'sleep');
    this.latestDiaper = this.getLatestByType(logs, 'diaper');

    if (this.latestFeeding) {
      this.feedingAgo = this.getTimeAgo(this.latestFeeding.sTime);
    }
    if (this.latestSleeping) {
      this.sleepingAgo = this.getTimeAgo(this.latestSleeping.sTime);
    }
    if (this.latestDiaper) {
      this.diaperAgo = this.getTimeAgo(this.latestDiaper.sTime);
    }
  }

  getLatestByType(logs: any[], type: string) {
    return logs
      .filter(log => log.type === type)
      .sort((a, b) => new Date(b.sTime).getTime() - new Date(a.sTime).getTime())[0];
  }

  getTimeAgo(time: string): string {
    const now = new Date();
    const past = new Date(time);
    const diffMs = now.getTime() - past.getTime();

    const mins = Math.floor(diffMs / 60000);
    const hrs = Math.floor(mins / 60);
    const minute = mins % 60; 

    if (hrs === 0 && minute === 0) return 'just now';
    if (hrs === 0) return `${minute} mins ago`;
    if (mins === 0) return `${hrs} hrs ago`;
    return `${hrs} hrs ${minute} mins ago`;
  }
}
