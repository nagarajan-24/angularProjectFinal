import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule, MatToolbar, MatIcon,MatDialogModule,CommonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  menuOpen = false; 
  isClicked = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }
  closeMenu() {
    this.menuOpen = false; 
    this.isClicked=!this.isClicked;
  }
}

