import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', Number(window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString());
    }, false);

    
  }

}
