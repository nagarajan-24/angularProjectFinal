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

    if (hours >= 12) {
      ampm = 'PM';
      if (hours > 12) {
        hours -= 12;  
      }
    } else if (hours === 0) {
      hours = 12;  
    }
    return `${hours}:${minutes} ${ampm}`;
  }
}
