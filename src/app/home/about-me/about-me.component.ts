import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/objects/person';
import { Slide } from 'src/app/shared/objects/slide';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myPerson = new Person(
    "Paul",
    "Richter",
    "08.07.1999",
    "Student | Software Developer",
    "Jena",
    "paulrichter.jena@gmail.com");
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
    let newSlide: Slide = new Slide("Java" , "This is my Island - 100%", "fas-fa-java");
    this.slides.push(newSlide);
    newSlide = new Slide("HTML/CSS", "Very skilled - 100%", "fas-fa-HTML");
    this.slides.push(newSlide);
    newSlide = new Slide("Typescript and Javascript", "Very skilled - 100%", "fas-fa-TS");
    this.slides.push(newSlide);
    newSlide = new Slide("Angular", "Almost all Frontend related projects by me are done with angular", "fas-fa-HTML");
    this.slides.push(newSlide);
    newSlide = new Slide("Spring", "If I need a (Java) Backend Spring is my way to go", "fas-fa-HTML");
    this.slides.push(newSlide);
    newSlide = new Slide("MySQL Databases", "The Databases I use the most are relational Databases such as MySQL", "fas-fa-HTML");
    this.slides.push(newSlide);
    console.log(this.slides);
  }
}
