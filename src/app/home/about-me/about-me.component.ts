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
    let newSlide: Slide = new Slide(
      "Java",
      "I gathered the most knowledge here and feel very comfortable using it",
      100,
      "#ff7b05");
    this.slides.push(newSlide);
    newSlide = new Slide(
      "HTML/CSS",
      "Since I am using Angular for almost all of my Frontend, I worked a lot with them",
      85,
      "#0048df");
    this.slides.push(newSlide);
    newSlide = new Slide(
      "TS/JS",
      "Using Angular I could gather a lot of knowledge here",
      80,
      "#c300e2");
    this.slides.push(newSlide);
    newSlide = new Slide(
      "Angular",
      "Almost all Frontend related projects by me are done with angular",
      80,
      "#d50300");
    this.slides.push(newSlide);
    newSlide = new Slide(
      "Spring",
      "My first big project used Spring, I have learned a lot since starting it",
      80,
      "#0c8600");
    this.slides.push(newSlide);
    newSlide = new Slide(
      "Databases",
      "Working with Spring I have worked and administrated several Databases",
      75,
      "#001f76");
    this.slides.push(newSlide);
    //console.log(this.slides);
  }
}
