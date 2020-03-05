import { NgModule } from '@angular/core';
import { NgLive2dComponent } from './ng-live2d.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgLive2dComponent],
  imports: [
    CommonModule
  ],
  exports: [NgLive2dComponent]
})
export class NgLive2dModule { }
