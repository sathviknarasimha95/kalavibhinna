import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { fadeIn, fadeOut } from './testimonial.animations';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'kv-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  animations: [
    trigger("slideAnimation", [
      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ])
    ])
  ]
})
export class TestimonialComponent implements OnInit {
  @Input()
  slides: Testimonial[] = [];
  @Input() animationType = 'fade';

  currentSlide = 0;

  constructor() {

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit() {
  }

  goToSlide(number: number) {
    if (number >= 0 && number < this.slides.length) {
      this.currentSlide = number;
    }
  }

}
