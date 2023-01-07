import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.scrollY > 2*window.innerHeight) {
      document.getElementById("progress-bar-value")!.style.animationPlayState = "running";
    }
    
  }

}
