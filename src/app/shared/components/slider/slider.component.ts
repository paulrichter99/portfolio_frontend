import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../objects/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  @Input() slides: Slide[] | null = null;

  // set to first slide on the left
  currentFirstSlide = 0;
  currentLastSlide = 4;
  // maximum number of slides to be displayed 
  // - min-size is around 300px
  currentMaxSlideNumbers = 4;
  timeIntervalSeconds = 3;

  ngOnInit(): void {
    console.log(this.slides);
    //setInterval(()=> { this.slideRight() }, this.timeIntervalSeconds * 1000);
  }

  slideRight(){
    const next = this.currentFirstSlide + 1;
    const sliderWrapperElement = document.getElementById('slider-wrapper')!;

    const currentMarginLeft = parseInt(getComputedStyle(sliderWrapperElement).marginLeft, 10);
    const percentageToMove = 10; // Adjust the percentage to move as needed
    
    // Calculate the new margin-left value in percentage
    const containerWidth = document.getElementById('slider')!.clientWidth;
    const newMarginLeft = currentMarginLeft - (containerWidth * (percentageToMove / 100));
    
    // Set the new margin-left value
    sliderWrapperElement.style.marginLeft = newMarginLeft + 'px';

    if(next + this.currentMaxSlideNumbers > this.slides!.length) {
      this.currentFirstSlide = 0;
      this.currentLastSlide = this.currentMaxSlideNumbers;
      return;
    }
    this.currentFirstSlide = next === this.slides!.length ? 0 : next;
    this.currentLastSlide = this.currentFirstSlide + this.currentMaxSlideNumbers;
    // console.log("next clicked, new current slide is: ", this.currentFirstSlide);

  }
}
