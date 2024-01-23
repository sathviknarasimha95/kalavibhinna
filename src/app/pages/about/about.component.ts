import { Component } from '@angular/core';
import { Testimonial } from '../../components/testimonial/testimonial.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  slides: Testimonial[] = [
    {
      content: '“We had contacted Kalavibhinna for our home Interiors and Elevation and Architects Ms Spoorthi and Mr Dhananjay gave us excellent ideas and Nice designs which suited our budget. I would highly recommend them for their excellent service and easy coordination.”',
      person: 'Kumarswamy',
      position: 'Business owner'
    },
    {
      content: '“We had contacted Kalavibhinna for our home Interiors and Elevation and Architects Ms Spoorthi and Mr Dhananjay gave us excellent ideas and Nice designs which suited our budget. I would highly recommend them for their excellent service and easy coordination.”',
      person: 'Sathvik',
      position: 'Business owner'
    }
  ];
}
