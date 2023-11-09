import { Component, HostListener, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/objects/person';
import { Slide } from 'src/app/shared/objects/slide';
import { MY_PERSON, SLIDES } from 'src/app/shared/objects/variables';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myPerson = MY_PERSON;
  age: number = 30;

  slides: Slide[] = [];

  ngOnInit(): void {
    this.calcAge();
    this.generateSlides();
  }


  calcAge(){
    let myUser_birthYear = Number.parseInt(this.myPerson.birthDate.split(".")[2]);
    let myUser_birthMonth = Number.parseInt(this.myPerson.birthDate.split(".")[1]);
    let myUser_birthDay = Number.parseInt(this.myPerson.birthDate.split(".")[0]);
    // calculate the current age
    let year_current = new Date().getFullYear();
    this.age = year_current - myUser_birthYear;
    // July is 6
    if( new Date().getMonth() < myUser_birthMonth-1 ||
        (new Date().getMonth() == myUser_birthMonth-1 && new Date().getDate() < myUser_birthDay)){
      this.age--;
    }
  }

  generateSlides(){
    this.slides = SLIDES;
  }
}
