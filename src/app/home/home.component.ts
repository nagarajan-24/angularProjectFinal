import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showContent = false;
  newbName = '';
  bList: string[] = [];

  constructor(public router: Router, public bs: ServiceService) {} 

  ngOnInit() {
    this.loadBabies(); 
  }

  loadBabies() {
    this.bList = this.bs.getAllBabyNames(); 
  }

  goToFeed(name: string) {
    this.bs.setCurrentBabyName(name);
    this.router.navigate(['activity', name]);
  }

  addBabyName() {
    this.showContent = true;
  }

  onSave(val: HTMLInputElement) {
    this.newbName = val.value.trim();
    if (this.newbName) {
      this.bs.createBaby(this.newbName);
      this.newbName = '';
      val.value = '';
      this.showContent = false;
      this.loadBabies();
    }
  }

  }
