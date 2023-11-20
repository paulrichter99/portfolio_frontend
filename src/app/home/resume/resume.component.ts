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
      startYear: 2012
    },{
      title: "April 2021 - 10/2022",
      body: ["<b>Werkstudent Softwareentwicklung" ,"Smart Commerce SE"],
      startYear: 2014
    },{
      title: "2018 - heute",
      body: ["<b>Ehrenamtliches Engagement", "Taekwondo Union Thüringen - Technikteam"],
      startYear: 2017
    },{
      title: "2017 - 2023",
      body: ["Friedrich-Schiller-Universität Jena", "Informatik Studium (B.Sc.)"],
      startYear: 2018
    },{
      title: "2009 - 2017",
      body: ["Georg-Samuel-Dörffel-Gymnasium Weida", "Abitur mit Schnitt 2.1"],
      startYear: 2023
    }
  ]

  rightSideElements: ResumeElement[] = [
    {
      title: "2022",
      body: ["Projekt für die Taekwondo Union Thüringen", "<b> Projektname \"Digital-TA-Paper\""],
      startYear: 2013
    },{
      title: "2020",
      body: ["Erstes großes privates Projekt", "<b> Projektname \"RACEIT\""],
      startYear: 2015
    },{
      title: "2018",
      body: ["Weiterführende Veranstaltungen zu Java"],
      startYear: 2017
    },{
      title: "2017",
      body: ["Weiterführende Veranstaltungen zu C"],
      startYear: 2018
    },{
      title: "2014",
      body: ["Erste Schritte in Java"],
      startYear: 2020
    },{
      title: "2011",
      body: ["Erste Schritte in der Programmierung", "Robotikprojekt 'Adurino' programmiert in C"],
      startYear: 2021
    },
  ]

  resumeElementOffset: number = 60;
  resumeElementHeight: number = 80;

  calculateElementOffset(element: ResumeElement, i: number, side: number){
    var sideElements = this.leftSideElements;
    if(side == 1){
      sideElements = this.rightSideElements;
    }
    var offsetNumber = (element.startYear - sideElements[i-1].startYear) * this.resumeElementOffset - this.resumeElementHeight;
    if(offsetNumber < 0) offsetNumber = 0;
    return offsetNumber + 'px'
  }

  splittedBodyElement(element: string){
    var newElement = element.replace("<b>", "");
    return newElement;
  }
}
