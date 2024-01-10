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

  boundaries: number[] = [];

  public setBoundaries(numbers: number[]){
    this.boundaries = [];
    for(let i = 0; i < numbers.length; i++){
      if(this.boundaries.length == 0){
        this.boundaries.push(numbers[i])
      }else{
        this.boundaries.push(this.boundaries[i-1] + numbers[i]);
      }
    }
  }

  activeElementSSwitchOffset = 200;
  public setActiveElement(currentTop: number){
    if(Math.abs(currentTop) < this.boundaries[0] - this.activeElementSSwitchOffset ){
      this.setActiveElementImpl(0)
      return;
    }
    for(let i = this.boundaries.length; i > 0; i--){
      if(Math.abs(currentTop) >= this.boundaries[i-1] - this.activeElementSSwitchOffset){
        this.setActiveElementImpl(i);
        return;
      }
    }
  }
  currentActiveElementTitle: string = "Home";

  setActiveElementImpl(index: number){
    /* Set the clicked nav-link element active and remove active from current active element */
    var navEls = document.getElementsByClassName('nav-link');
    if(this.currentActiveElementTitle.includes(navEls[index].innerHTML)) return;

    this.currentActiveElementTitle = navEls[index].innerHTML;
    var navElsArray = Array.from(navEls);
    for(let i = 0; i < navElsArray.length; i++){
      if(navElsArray[i].classList.contains('active')) navElsArray[i].classList.remove('active')

      if(i == index) navElsArray[i].classList.add('active')
    }
  }
}
