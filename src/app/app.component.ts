import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule, MatToolbar, MatIcon],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  menuOpen = false; 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false; 
  }
}

