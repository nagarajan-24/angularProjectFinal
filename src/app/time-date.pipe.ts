import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDate'
})
export class TimeDatePipe implements PipeTransform {

  transform(value: string | Date): string {
    const date = new Date(value);

    let hours: number | string = date.getHours();
    const minutes: string = date.getMinutes().toString().padStart(2, '0');
    let ampm: string = 'AM';

    // Adjust for 12-hour format
    if (hours >= 12) {
      ampm = 'PM';
      if (hours > 12) {
        hours -= 12;  // Convert hours from 24-hour to 12-hour
      }
    } else if (hours === 0) {
      hours = 12;  // 12 AM case
    }

    // Format the hours and return time in 12-hour format with AM/PM
    return `${hours}:${minutes} ${ampm}`;
  }
}
