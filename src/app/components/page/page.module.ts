import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    PageComponent
  ]
})
export class PageModule { }
