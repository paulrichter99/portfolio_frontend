export class Slide {
    headerText: string;
    descriptionText:string;

    skillPercentage: number;
    skillColor: string

    detailedDescriptionText: string[];
    fontAwesomeIcon?: string;

    constructor(headerText:string,
      descriptionText:string,
      skillPercentage: number,
      skillColor: string,
      detailedDescriptionText: string[],
      fontAwesomeIcon?: string){
        this.headerText = headerText;
        this.descriptionText = descriptionText;
        this.skillPercentage = skillPercentage;
        this.skillColor = skillColor;
        this.detailedDescriptionText = detailedDescriptionText;
        this.fontAwesomeIcon = fontAwesomeIcon;
    }
}
