import { AfterViewInit, Component } from '@angular/core';

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
}
