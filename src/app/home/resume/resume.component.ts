import { Component } from '@angular/core';
import { ResumeElement } from 'src/app/shared/objects/resumeElement';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  leftSideElements: ResumeElement[] = [
    {
      title: "März 2023 - heute",
      body: ["<b>Werkstudent Softwareentwicklung" ,"Navimatix GmbH"],
      startYear: 2012,
      icon: "<i class='fa-solid fa-briefcase resume-fontawesome-icon'></i>"
    },{
      title: "April 2021 - 10/2022",
      body: ["<b>Werkstudent Softwareentwicklung" ,"Smart Commerce SE"],
      startYear: 2014,
      icon: "<i class='fa-solid fa-briefcase resume-fontawesome-icon'></i>"
    },{
      title: "2018 - heute",
      body: ["<b>Ehrenamtliches Engagement", "Taekwondo Union Thüringen - Technikteam"],
      startYear: 2016.5
    },{
      title: "2017 - 2023",
      body: ["Friedrich-Schiller-Universität Jena", "Informatik Studium (B.Sc.)"],
      startYear: 2017
    },{
      title: "2009 - 2017",
      body: ["Georg-Samuel-Dörffel-Gymnasium Weida", "Abitur mit Schnitt 2.1"],
      startYear: 2021,
      icon: "<i class='fa-solid fa-graduation-cap resume-fontawesome-icon resume-fontawesome-smaller-icon'></i>"
    }
  ]

  rightSideElements: ResumeElement[] = [
    {
      title: "2022",
      body: ["Projekt für die Taekwondo Union Thüringen", "<b> Projektname \"Digital-TA-Paper\""],
      startYear: 2013,
      icon: "<i class='fa-brands fa-github resume-fontawesome-icon resume-fontawesome-larger-icon'></i>"
    },{
      title: "2020",
      body: ["Erstes großes privates Projekt", "<b> Projektname \"RACEIT\""],
      startYear: 2015,
      icon: "<i class='fa-solid fa-car resume-fontawesome-icon'></i>"
    },{
      title: "2018",
      body: ["Weiterführende Veranstaltungen zu Java"],
      startYear: 2016.5,
      icon: "<i class='fa-solid fa-microchip resume-fontawesome-icon resume-fontawesome-smaller-icon'></i>"
    },{
      title: "2017",
      body: ["Weiterführende Veranstaltungen zu C"],
      startYear: 2017,
      icon: "<i class='fa-solid fa-book-open resume-fontawesome-icon resume-fontawesome-smaller-icon'></i>"
    },{
      title: "2014",
      body: ["Erste Schritte in Java"],
      startYear: 2018.5,
      icon: "<i class='fa-solid fa-baby resume-fontawesome-icon resume-fontawesome-larger-icon'></i>"
    },{
      title: "2011",
      body: ["Erste Schritte in der Programmierung", "Robotikprojekt 'Adurino' programmiert in C"],
      startYear: 2020,
      icon: "<i class='fa-solid fa-robot resume-fontawesome-icon resume-fontawesome-smaller-icon'></i>"
    },
  ]

  resumeElementOffset: number = 120;

  calculateElementOffset(element: ResumeElement, i: number, side: number){
    var sideElements = this.leftSideElements;
    if(side == 1){
      sideElements = this.rightSideElements;
    }
    var offsetNumber = (element.startYear - sideElements[i-1].startYear - 1) * this.resumeElementOffset;
    if(offsetNumber < 0) offsetNumber = 0;
    return offsetNumber + 'px'
  }

  calculateInitialElementOffset(element: ResumeElement, side: number){
    var sideElements = this.rightSideElements;
    if(side == 1){
      sideElements = this.leftSideElements;
    }
    var offsetNumber = (element.startYear - sideElements[0].startYear) * (this.resumeElementOffset);
    console.log(offsetNumber)
    if(offsetNumber < 0) offsetNumber = 0;
    return offsetNumber + 'px'
  }

  splittedBodyElement(element: string){
    var newElement = element.replace("<b>", "");
    return newElement;
  }
}
