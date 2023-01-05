import { Component, OnInit } from '@angular/core';

const AOS = require('aos');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
AOS.init();
  }

}
