export class Slide {
    headerText: string;
    descriptionText:string;

    skillPercentage: number;
    skillColor: string

    detailedDescriptionText: string[];
    fontAwesomeIcon?: string;

    exampleImagesUrls?: string[];

    constructor(headerText:string,
      descriptionText:string,
      skillPercentage: number,
      skillColor: string,
      detailedDescriptionText: string[],
      fontAwesomeIcon?: string,
      exampleImagesUrls?: string[]){
        this.headerText = headerText;
        this.descriptionText = descriptionText;
        this.skillPercentage = skillPercentage;
        this.skillColor = skillColor;
        this.detailedDescriptionText = detailedDescriptionText;
        this.fontAwesomeIcon = fontAwesomeIcon;
        this.exampleImagesUrls = exampleImagesUrls;
    }
}
