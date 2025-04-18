import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm,  } from '@angular/forms';
import { BabyService } from '../baby.service';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {
  constructor(private bs :BabyService){}
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('All fields are required!');
      return;
    }
    const data = form.value;
    const activity = {
      id: data.bid, 
      name: data.bName,
      type:data.type,
      sTime: data.sTime,
      eTime: data.eTime,
      manual: true,
      };
      this.bs.addActivity(data.bId, activity); 
  }
} 



