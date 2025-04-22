import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
  standalone: true, 
  imports: [MatDialogModule] 
})
export class DialogExampleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
