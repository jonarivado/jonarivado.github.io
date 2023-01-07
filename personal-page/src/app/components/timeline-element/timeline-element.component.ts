import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss']
})
export class TimelineElementComponent implements OnInit {

  @Input() company: string = '';
  @Input() title: string = ''; 
  @Input() time: string = '';
  @Input() description: string = '';
  @Input() location: string = '';
  @Input() keywords: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
