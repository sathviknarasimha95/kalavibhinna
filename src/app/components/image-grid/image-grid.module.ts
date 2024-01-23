import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGridComponent } from './image-grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ImageGridComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ImageGridComponent
  ]
})
export class ImageGridModule { }
