import { AfterViewInit, Component, HostListener } from '@angular/core';
import { HEADER_BACKGROUND, HEADER_BACKGROUND_SECONDARY } from '../../objects/variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{

  currentNavLinkActiveElement!: HTMLElement;
  ngAfterViewInit(): void {
    /* Set initial active Element */
    this.currentNavLinkActiveElement = document.getElementById('initial-nav-link')!;
    this.currentNavLinkActiveElement.classList.add('active')

    /* Set the clicked nav-link element active and remove active from current active element */
    var navEls = document.getElementsByClassName('nav-link');
    Array.prototype.forEach.call(navEls, function(navEl: HTMLElement){

      navEl.addEventListener("click", () => {Array.from(navEls).forEach((el: Element) => {
        if(el.classList.contains('active'))
          el.classList.remove('active');
        })
        navEl.classList.add('active');
      })
    })
  }

  adjustHeader(isInitialState: boolean){
    var header = document.getElementById("header-background");
    if(!header){ return; }

    if(isInitialState){
      header.style.opacity = "0.15";
      header.style.backgroundColor = HEADER_BACKGROUND;
    }else{
      header.style.opacity = "0.8";
      header.style.backgroundColor = HEADER_BACKGROUND_SECONDARY;
    }
  }
}
