import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDate'
})
export class TimeDatePipe implements PipeTransform {

  transform(value: string | Date): string {
    const date = new Date(value);

    let hrs: number | string = date.getHours();
    const mins: string = date.getMinutes().toString().padStart(2, '0');
    let ampm: string = 'AM';

    if (hrs >= 12) {
      ampm = 'PM';
      if (hrs > 12) {
        hrs -= 12;  
      }
    } else if (hrs === 0) {
      hrs = 12;  
    }
    return `${hrs}:${mins} ${ampm}`;
  }
}
