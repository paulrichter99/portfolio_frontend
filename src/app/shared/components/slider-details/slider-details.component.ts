import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slide } from '../../objects/slide';


@Component({
  selector: 'app-slider-details',
  templateUrl: './slider-details.component.html',
  styleUrls: ['./slider-details.component.scss']
})
export class SliderDetailsComponent {
  @Input() slide: Slide | null = null;
  @Output() closeSliderModal = new EventEmitter<Slide>();

  closeSlideDetailModal(){
    this.closeSliderModal.next(this.slide!);
  }
}
