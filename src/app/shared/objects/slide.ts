export class Slide {
    headerText: string;
    descriptionText:string;

    imgSymbol: string;

    constructor(headerText:string, descriptionText:string, imgSymbol: string){
        this.headerText = headerText;
        this.descriptionText = descriptionText;
        this.imgSymbol = imgSymbol;
    }
}
