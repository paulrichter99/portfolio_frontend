import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SliderDetailsComponent } from 'src/app/shared/components/slider-details/slider-details.component';
import { ResumeElement } from 'src/app/shared/objects/resumeElement';
import { Slide } from 'src/app/shared/objects/slide';
import { RESUME_SLIDES } from 'src/app/shared/objects/variables';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit, OnInit{

  ngOnInit(): void {
    for(let i = 0; i < RESUME_SLIDES.length; i++){
      let img = new Image();
      RESUME_SLIDES[i].exampleImagesUrls?.forEach(url => {
        img.src = url;
        this.loaded();
      });
    }
  }

  loadedImages: number = 0;

  loaded(){
    this.loadedImages++;
  }

  ngAfterViewInit(): void {
    var elements = document.getElementsByClassName('resume-slider-opener')

    var elementArray: HTMLElement[] = <HTMLElement[]> Array.from(elements);
    elementArray.forEach(ele => {
      const eleValue = ele.attributes.getNamedItem('value')?.value;
      if(eleValue != "" && eleValue){
        ele.addEventListener('click', openSlider => { this.showSliderDetailsComponent(eleValue) })
      }
    })
  }

  leftSideElements: ResumeElement[] = [
    {
      title: "März 2023 - heute",
      body: ["<b>Werkstudent Softwareentwicklung</b>" ,"<b class='resume-slider-opener' value='navimatix'>Navimatix GmbH</b>"],
      startYear: 2012,
      icon: "<i class='fa-solid fa-briefcase resume-fontawesome-icon'></i>"
    },{
      title: "April 2021 - 10/2022",
      body: ["<b>Werkstudent Softwareentwicklung</b>" ,"<b class='resume-slider-opener' value='smartcommerce'>Smart Commerce SE</b>"],
      startYear: 2014,
      icon: "<i class='fa-solid fa-briefcase resume-fontawesome-icon'></i>"
    },{
      title: "2018 - heute",
      body: ["<b>Ehrenamtliches Engagement im Sport</b>", "<b class='resume-slider-opener' value='tut'>Taekwondo Union Thüringen</b>"],
      startYear: 2016.5
    },{
      title: "2017 - 2023",
      body: ["<b>Friedrich-Schiller-Universität Jena</b>", "<b class='resume-slider-opener' value='uni'>Informatik Studium (B.Sc.)</b>"],
      startYear: 2017
    },{
      title: "2009 - 2017",
      body: ["<b>Georg-Samuel-Dörffel-Gymnasium Weida</b>", "Abitur mit Schnitt 2.1"],
      startYear: 2021,
      icon: "<i class='fa-solid fa-graduation-cap resume-fontawesome-icon resume-fontawesome-smaller-icon'></i>"
    }
  ]

  rightSideElements: ResumeElement[] = [
    {
      title: "2022",
      body: ["<b>Projekt für die Taekwondo Union Thüringen</b>", "<b class='resume-slider-opener' value='digitalta'> Projektname \"Digital-TA-Paper\" </b>"],
      startYear: 2013,
      icon: "<i class='fa-brands fa-github resume-fontawesome-icon resume-fontawesome-larger-icon'></i>"
    },{
      title: "2020",
      body: ["<b>Erstes großes privates Projekt</b>", "<b class='resume-slider-opener' value='raceit'> Projektname \"RACEIT\" </b>"],
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
      body: ["<b>Erste Schritte in der Programmierung</b>", "Robotikprojekt 'Adurino' programmiert in C"],
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
    if(offsetNumber < 0) offsetNumber = 0;
    return offsetNumber + 'px'
  }

  currentSlide: Slide | null = null;
  showSliderDetailsComponent(slideName: string){
    if(slideName == "") return;
    RESUME_SLIDES.forEach(slide => {
      if(slide.descriptionText.toLowerCase().includes(slideName)){
        this.currentSlide = slide;
      }
    })
    if(this.currentSlide != null){
      var el = document.getElementById("app-slider-details");
      this.setSliderDisplay(el, "flex");
    }
    return;
  }

  closeSliderModal(slide: Slide){
    this.currentSlide = null;
    var el = document.getElementById("app-slider-details");
    this.setSliderDisplay(el, "none");
  }

  setSliderDisplay(element: HTMLElement | null, value: string){
    if(!element) return;
    element.style.setProperty("display", value);
  }
}
