import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateTimePickerComponent
  ],
  exports:[
    DateTimePickerComponent
  ]
})
export class NgxDateTimePickerModule { }
