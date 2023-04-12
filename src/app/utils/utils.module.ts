import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomDirective } from './zoom.directive';
import { SearchByTextPipe } from './search-by-text.pipe';



@NgModule({
  declarations: [
    ZoomDirective,
    SearchByTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ZoomDirective,
    SearchByTextPipe
  ]
})
export class UtilsModule { }
