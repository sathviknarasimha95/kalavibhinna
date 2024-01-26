import { Component } from '@angular/core';
// import {FadeIn} from './animation';
import { Router } from '@angular/router';



@Component({
  selector: 'kv-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private router: Router) { }

  onProjectClick(){
    this.router.navigate(['/project']);
  }
}
