import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BabyService } from '../baby.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showContent: boolean = false;
  babyName : string [] = [];
  nextId: number = 1001;
 
  constructor(public router : Router,public bs : BabyService ){ }
  ngOnInit(){
    this.loadBaby();
    const storedId = localStorage.getItem('nextBabyId');
    this.nextId = storedId ? parseInt(storedId, 10) : 1001;
    
  }
  loadBaby(){
    const allChild = this.bs.getAllLogs();
    this.babyName = Object.keys(allChild);
  }
  formatId(id: number): string {
    return id.toString();
  }
goToFeed(bName: string) {
  this.router.navigate(['/activity', bName]);
}  
addBabyName() {
  this.showContent = true ;
}
onSave(_t14: HTMLInputElement) {
  const id = this.formatId(this.nextId);
    this.bs.addActivity(_t14.value, {
      id: id,
      type: 'added',
      sTime: null,
      eTime: null,
      manual: true
    });
    this.nextId++;
    localStorage.setItem('nextBabyId', this.nextId.toString());
    _t14.value = '';
    this.showContent = false;
    this.loadBaby();
    }
   


}
