import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Slide } from '../../objects/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() slides: Slide[] | null = null;
  @ViewChild('slider', { static: true }) mySlider!: ElementRef;

  // set to first slide on the left
  currentFirstSlide = 0;
  currentLastSlide = 4;
  // maximum number of slides to be displayed
  // - min-size is around 300px
  currentMaxSlideNumbers: number = 4;
  timeIntervalSeconds = 3;
  currentDesiredMarginLeft = 0;

  //svg-attributes
  svgBaseHeight:number = 200;
  svgBaseWidth:number = 200;
  svgStrokeWidth: number = 12;
  svgFontSize:number = 64;
  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    //setInterval(()=> { this.slideRight() }, this.timeIntervalSeconds * 1000);
  }

  ngAfterViewInit(): void {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;

    // define max element width
    const maxElementWidth = 300;
    // detect resize changes to get the slider to 0 again and recalculate the max
    //  number of slides
    this.currentMaxSlideNumbers = Math.floor(this.mySlider.nativeElement.offsetWidth / maxElementWidth);
    if(this.currentMaxSlideNumbers > 4) this.currentMaxSlideNumbers = 4;

    const newMinWidth = (this.mySlider.nativeElement.offsetWidth  / this.currentMaxSlideNumbers) - 40;

    // resize the elements by passing a new max-width value relative to the screen width
    const sliderElements: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("slider-element");
    Array.from(sliderElements).forEach(element => {
      element.style.minWidth = newMinWidth.toString() + "px";
    });

    this.currentFirstSlide = -1;
    this.slideRight();
  }

  slideRight(index? : number){
    // calculate the last element to be shown before beginning from the front
    const next = this.currentFirstSlide + 1;
    if(next + this.currentMaxSlideNumbers > this.slides!.length) {
      this.currentFirstSlide = 0;
      this.currentLastSlide = this.currentMaxSlideNumbers;
    }else{
      this.currentFirstSlide = next === this.slides!.length ? 0 : next;
      this.currentLastSlide = this.currentFirstSlide + this.currentMaxSlideNumbers;
    }

    const sliderWrapperElement = document.getElementById('slider-wrapper')!;
    let currentMarginLeft = this.currentDesiredMarginLeft;
    // parseInt(getComputedStyle(sliderWrapperElement).marginLeft, 10);


    let percentageToMove = 100 / this.currentMaxSlideNumbers; // Adjust the percentage to move as needed
    // using the bullets to navigate needs us to set the currentFirstSlide to the index value
    if(index != null){
      // calculate the distance between the index we want to go and the current index
      //    index = 5 (MySQL), next-1 = 0 (currently on Java) -> we wanna move 5 times
      let elementsToMove = index - (next-1)
      percentageToMove *= elementsToMove
      this.currentFirstSlide = index;

      // we gotta move back when the index is less then our current (bullet-)element
      if (index < next-1){
        elementsToMove = -elementsToMove
      }
    }
    if(this.currentFirstSlide == 0){
      currentMarginLeft = 0;
      percentageToMove = 0;
    }

    // Calculate the new margin-left value in percentage
    const containerWidth = this.mySlider.nativeElement.offsetWidth;
    this.currentDesiredMarginLeft = currentMarginLeft - (containerWidth * (percentageToMove / 100));

    // Set the new margin-left value
    sliderWrapperElement.style.marginLeft = this.currentDesiredMarginLeft + 'px';

    this.adjustActiveNavigationBulletElement(next-1);
  }

  adjustActiveNavigationBulletElement(lastSlideIndex : number){
    const navigationBullets = document.getElementsByClassName("navigation-bullet");
    const navBulletArray = Array.from(navigationBullets)

    if(lastSlideIndex < 0) {
      // reset the whole procedure to initial state
      navBulletArray.forEach((element, i) => {
        // remove the active-bullet every element and make them invisible
        element.classList.remove("active-bullet");
        element.classList.add("invisible");
        if(i < (this.slides!.length - this.currentMaxSlideNumbers + 1)){
          element.classList.remove("invisible");
        }
      })
      navBulletArray[0].classList.add("active-bullet");
      return;
    }
    navBulletArray[lastSlideIndex].classList.remove("active-bullet")
    navBulletArray[this.currentFirstSlide].classList.add("active-bullet");
  }

  slideToIndex(index : number){
    // console.log("sliding to index " + index)
    this.slideRight(index);
  }
}
