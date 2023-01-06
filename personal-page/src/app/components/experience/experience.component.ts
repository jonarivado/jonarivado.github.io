import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

/* 
@Input() title: string = ''; 
  @Input() time: string = '';
  @Input() description: string = '';
  @Input() location: string = '';
  @Input() keywords: any = '';
*/

  workExperience = [{company: "Axalp Technologies", title: "Aerospace Engineer Intern", time: "SEP 2022 - DEC 2022", description: "testetst", location: "Olten, Switzerland", keywords: ["Concept development of eVTOL aircraft", "Systems engineering", "Engineering consulting"]},
  {company: "Akademische Raumfahrt Initiative Schweiz (ARIS)", title: "Software Engineer, Data Acquisition & Control Systems", time: "NOV 2021 - NOV 2022", description: "testetst", location: "Dübendorf, Switzerland", keywords: ["Mission Control UI", "ROS (C++/Python)", "Web Development (JS/HTML/CSS"]},
  {company: "Product Development Group Zurich (ETH)", title: "Coach Innovation Project", time: "FEB 2022 - JUN 2022", description: "", location: "Zürich, Switzerland", keywords: ["Entrepreneurship", "Conflict Management", "Product Development"]},
  {company: "liitu consulting GmbH", title: "Web Developer for project Owlly", time: "SEP 2020 - MAR 2021", description: "", location: "Schaffhausen, Switzerland", keywords: ["Fullstack Development", "Agile", "E-Collecting", "UI/UX Design"]},
  {company: "Military Service", title: "Squad leader, reconnaissance scout sergeant", time: "JAN 2019 - OCT 2019", description: "", location: "Thun, Switzerland", keywords: ["Leadership of 8-40 people", "Military intelligence", "Operating independently"]},
  {company: "Sonderegger Engineering", title: "Engineer Intern", time: "OCT 2018 - DEC 2018", description: "", location: "Schaffhausen, Switzerland", keywords: ["CAD (Solidworks)", "Quality Management", "Manufacturing experience"]},
  //{company: "", title: "", time: "SEP 2022 - DEC 2022", description: "", location: ", Switzerland", keywords: []},
];

  constructor() { }

  ngOnInit(): void {
    document.onscroll = () => {
      //scroll horizontally if the user has reached the work experience section
      let screensize = window.innerWidth;
      let scrolled = window.scrollY/window.innerHeight-1;
      if (scrolled > 0) {
        document.getElementById("experienceTimeline")!.style.visibility = "visible";
        document.getElementById("experienceTimeline")!.style.opacity = "1";
        if(screensize > 768) {
        document.getElementById("experienceTimeline")!.style.transform = "translateX(" + scrolled/19*this.workExperience.length * -100 + "vw)";
      }
      else {
        document.getElementById("experienceTimeline")!.style.transform = "translateX(" + scrolled/6*this.workExperience.length * -100 + "vw)";

      }
    }
      else {
        document.getElementById("experienceTimeline")!.style.visibility = "hidden";
        document.getElementById("experienceTimeline")!.style.opacity = "0";
      }
    }
  };
}
