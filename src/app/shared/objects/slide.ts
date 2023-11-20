export class Slide {
    headerText: string;
    descriptionText:string;

    skillPercentage: number;
    skillColor: string

    detailedDescriptionText? :string;

    constructor(headerText:string,
      descriptionText:string,
      skillPercentage: number,
      skillColor: string){
        this.headerText = headerText;
        this.descriptionText = descriptionText;
        this.skillPercentage = skillPercentage;
        this.skillColor = skillColor;
    }
}
