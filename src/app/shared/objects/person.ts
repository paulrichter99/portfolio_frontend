export class Person {
  firstName:string;
  lastName:string;
  birthDate:string;
  profession:string;
  city:string;
  email:string;


  Person(){}

  constructor(
    firstName:string,
    lastName:string,
    birthDate:string,
    profession:string,
    city:string,
    email:string){
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthDate = birthDate;
      this.profession = profession;
      this.city = city;
      this.email = email;
    }
}
