import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('header', { static: true }) header!: HeaderComponent;

  ngAfterViewInit(): void {
    this.setHeaderBoundaries();
  }

  scrollTimeout: any = null;
  @HostListener('wheel', ['$event'])
  onScroll(event: any) {
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => this.onScrollFinished(), 250);
  }

  onScrollFinished(){
    const el = document.getElementById('content') as HTMLElement;
    this.header.setActiveElement(el.getBoundingClientRect().top)
  }

  resizeTimeout: any = null;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.setHeaderBoundaries(), 250);
  }

  setHeaderBoundaries(){
    const collection = document.getElementById('content')?.children

    if(!collection) return;

    var numbers: number[] = []
    for (var i = 0; i < collection.length; i++) {
      var tableChild = collection[i] as HTMLElement;
      numbers.push(tableChild.offsetHeight)
    }

    this.header.setBoundaries(numbers);
  }
}
