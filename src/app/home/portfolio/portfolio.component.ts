import { Component } from '@angular/core';
import { Slide } from 'src/app/shared/objects/slide';
import { PROJECT_SLIDES } from 'src/app/shared/objects/variables';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projectSlides: Slide[] = [...PROJECT_SLIDES];

  currentSlide: Slide | null = null;

  showSliderDetailsComponent(slideName: string){
    if(slideName == "") return;
    this.projectSlides.forEach(slide => {
      if(slide.descriptionText.toLowerCase().includes(slideName)){
        this.currentSlide = slide;
      }
    })
    if(this.currentSlide != null){
      var el = document.getElementById("projects-app-slider-details");
      this.setSliderDisplay(el, "flex");
    }
    return;
  }

  closeSliderModal(slide: Slide){
    this.currentSlide = null;
    var el = document.getElementById("projects-app-slider-details");
    this.setSliderDisplay(el, "none");
  }

  setSliderDisplay(element: HTMLElement | null, value: string){
    if(!element) return;
    element.style.setProperty("display", value);
  }
}
