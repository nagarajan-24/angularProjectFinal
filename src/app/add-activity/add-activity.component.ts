import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
  standalone: true, 
  imports: [FormsModule]  
})
export class AddActivityComponent {
  constructor(public dialog: MatDialog, private bs: ServiceService) {}
  onSubmit(form: NgForm): void {
    if (form.invalid) {
    alert("All fields are required");
      return;
    }
    const data = form.value;

    const activity = {
      name: data.bName,
      type: data.type,
      sTime: data.sTime,
      eTime: data.eTime
    };

    console.log(activity);
    this.bs.addActivity(data.bName, activity);
    alert("Add activity successfully!!!")
    form.reset();
  }
}
