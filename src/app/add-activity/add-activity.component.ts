import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm,  } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MatFormField, MatHint, MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  imports: [CommonModule,FormsModule,MatInput,MatSelect,MatFormField,MatLabel,MatOption,MatNativeDateModule,MatIconModule],
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {
  constructor(private bs: ServiceService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('All fields are required!');
      return;
    }

    const data = form.value;

    const activity = {
      name: data.bName,
      type: data.type,
      sTime: data.sTime,
      eTime: data.eTime,
    };
    console.log(activity);

    this.bs.addActivity(data.bName, activity);
    alert('Activity added successfully!');
    form.reset();
  }
} 



