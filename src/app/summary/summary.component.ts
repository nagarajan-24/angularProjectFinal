import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-summary',
  imports: [CommonModule],
  templateUrl:'./summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  getDetails: any [] = [] ;
  baby: any;
  groupActivities: { [key: string]: any } = {};
  
  

  constructor(private bs: ServiceService) {
    this.bs.selectBaby$.subscribe(b => this.baby = b);
    this.getDetails = bs.getLogsForCurrentBaby();
    console.log(this.getDetails);
    this.groupActivitiesByType(this.getDetails);
  }
  groupActivitiesByType(activities: any[]) {
    const groups: { [key: string]: any } = {};

    activities.forEach(act => {
      const type = act.type;
      if (!groups[type]) {
        groups[type] = {
          list: [], 
          totalDuration: 0 
        };
      }
      const start = new Date(act.sTime);
      console.log(start)
      const end = new Date(act.eTime);
      console.log(end);
      const duration = (end.getTime() - start.getTime()) / (1000 * 60);
      console.log(duration);

      groups[type].list.push({
        sTime: act.sTime,
        eTime: act.eTime,
        duration
      });

      groups[type].totalDuration =groups[type].totalDuration + duration;
    });

    this.groupActivities = groups;
  }
 

}

