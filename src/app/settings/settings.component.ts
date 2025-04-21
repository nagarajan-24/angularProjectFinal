import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  bName = '';
  oldName = '';
  newName = '';
  successMessage = '';
  errorMessage = '';

  constructor(private bs: ServiceService) {}

  updateName() {
    if (!this.oldName.trim() || !this.newName.trim()) {
      this.errorMessage = 'Both fields are required';
      this.successMessage = '';
      return;
    }

    const updated = this.bs.updateBabyName(this.oldName.trim(), this.newName.trim());
    
    if (updated) {
      this.successMessage = `Name updated from "${this.oldName}" to "${this.newName}"`;
      this.errorMessage = '';
      this.oldName = '';
      this.newName = '';
    } else {
      this.errorMessage = 'Old baby name not found';
      this.successMessage = '';
    }
  }
  clearLogs(){
    const conformation = confirm('Are you sure you want to delete baby activities?');
    if(conformation){
    this.bs.clearLogsFor(this.bName);
    this.bName='';
    }
  }

}
