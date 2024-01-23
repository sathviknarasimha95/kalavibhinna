import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";




@NgModule({
  declarations: [
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  exports: [
    TestimonialComponent
  ]
})
export class TestimonialModule { }
