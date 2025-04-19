import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-summary',
  imports: [CommonModule],
  templateUrl:'./summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  getDetails: any [] = [] ;
  baby: any;
  groupedActivities: { [key: string]: any } = {};
  ngOnInit(): void {
   
  }
  

  constructor(private bs: ServiceService) {
    this.bs.selectedBaby$.subscribe(b => this.baby = b);
    this.getDetails = bs.getLogsForCurrentBaby();
    console.log(this.getDetails);
    this.groupActivitiesByType(this.getDetails);
  }
  groupActivitiesByType(activities: any[]) {
    const groups: { [key: string]: any } = {};

    activities.forEach(act => {
      const type = act.type;
      const start = new Date(act.sTime);
      const end = new Date(act.eTime);
      const duration = (end.getTime() - start.getTime()) / (1000 * 60); // duration in minutes

      if (!groups[type]) {
        groups[type] = { totalDuration: 0, list: [] };
      }

      groups[type].list.push({
        sTime: act.sTime,
        eTime: act.eTime,
        duration
      });

      groups[type].totalDuration += duration;
    });

    this.groupedActivities = groups;
  }
  castToString(value: unknown): string {
    return String(value);
  }

}

