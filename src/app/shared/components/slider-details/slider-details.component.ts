import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Slide } from '../../objects/slide';
import { BASE_EXAMPLE_IMAGE_URL } from '../../objects/variables';


@Component({
  selector: 'app-slider-details',
  templateUrl: './slider-details.component.html',
  styleUrls: ['./slider-details.component.scss']
})
export class SliderDetailsComponent implements OnChanges{
  @Input() slide: Slide | null = null;
  @Output() closeSliderModal = new EventEmitter<Slide>();

  closeSlideDetailModal(){
    this.closeSliderModal.next(this.slide!);
  }

  currentImageUrl: string | null = null;

  openImageModal(imageUrl: string){
    this.currentImageUrl = imageUrl;
  }

  closeImageModal(){
    this.currentImageUrl = "";
  }

  ngOnChanges(){
    if(this.slide != null && this.slide.fontAwesomeIcon){
      if(this.slide.fontAwesomeIcon.includes("src='github_")){
        console.log(this.slide.fontAwesomeIcon)
        this.slide.fontAwesomeIcon = this.slide.fontAwesomeIcon?.replace("src='github_", "src='" + BASE_EXAMPLE_IMAGE_URL);
      }
    }
  }
}
