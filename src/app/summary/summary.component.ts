import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  activityLogs = [
    { type: 'sleep', start: '2025-04-18T10:00:00', end: '2025-04-18T12:00:00' },
    { type: 'feed', start: '2025-04-18T13:00:00', end: '2025-04-18T13:30:00' },
    { type: 'diaper', start: '2025-04-18T14:00:00', end: '2025-04-18T14:10:00' },
    { type: 'sleep', start: '2025-04-18T15:00:00', end: '2025-04-18T16:00:00' },
    { type: 'feed', start: '2025-04-18T17:00:00', end: '2025-04-18T17:20:00' },
    { type: 'feed', start: '2025-04-18T17:00:00', end: '2025-04-18T17:20:00' }
  ];
  getLogsByType(type: string) {
    return this.activityLogs.filter(log => log.type === type);
  }
  
  getCount(type: string) {
    return this.getLogsByType(type).length;
  }
}
