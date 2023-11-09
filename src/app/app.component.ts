import { Component, HostListener } from '@angular/core';
import { HEADER_BACKGROUND, HEADER_BACKGROUND_SECONDARY } from './shared/objects/variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio_frontend';

  @HostListener('wheel', ['$event'])
  onMouseWheel($event: WheelEvent) {
    var e = document.getElementById("hero");
    var header = document.getElementById("header-background");
    if(e && header){
      if($event.deltaY > 0 && (document.body.scrollTop > e.offsetHeight - 200)){
        header.style.opacity = "1";
        header.style.backgroundColor = HEADER_BACKGROUND_SECONDARY;
      }else if($event.deltaY < 0 && (document.body.scrollTop > e.offsetHeight)) {
        header.style.opacity = "1";
        header.style.backgroundColor = HEADER_BACKGROUND_SECONDARY;
      }else{
        header.style.opacity = "0.15";
        header.style.backgroundColor = HEADER_BACKGROUND;
      }
    }
  }

  @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
      console.log("scroll")
    }
}
