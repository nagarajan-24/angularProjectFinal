import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatHint, MatInputModule, MatLabel } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIcon,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatLabel,
  MatDatepickerModule,
  MatNativeDateModule,
  MatHint,
  MatDatepickerModule,
  MatDialogModule,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions,
  MatDialogModule

]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [material],
  exports :[material]
})
export class MaterialModule { }
