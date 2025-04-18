import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BabyService } from '../baby.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  bid :string = ''
  bName :string = '';
  details: any[] = [];

  constructor(private route :ActivatedRoute,private bs :BabyService){}

  ngOnInit(){
    this.bName = this.bs.getBabyName(this.bid);
    const allDetails = this.bs.getLogsFor(this.bid);
    this.details = allDetails.map((log: any) => (
      {...log,lastUpdated: this.getTimeAgo(log.eTime || log.sTime)
    }));
  }
  getTimeAgo(dateString: string): string {
    const diff = Date.now() - new Date(dateString).getTime();
    const mins = Math.floor(diff / (1000 * 60));
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;

    return `${hrs} hrs ${remMins} mins ago`;
  }
}
