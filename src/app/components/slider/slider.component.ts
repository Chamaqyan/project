import { Component, OnInit } from '@angular/core';
 

@Component({
    selector: 'app-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.scss']
})
export class SliderComponent implements OnInit {
  
    slides = [
        {img: "http://placehold.it/350x150/000000"},
        {img: "http://placehold.it/350x150/111111"},
        {img: "http://placehold.it/350x150/333333"},
        {img: "http://placehold.it/350x150/666666"}
      ];

    public slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300
    };
 
    constructor() { }

    ngOnInit() {
        this._checkSliderMode();
        console.log(this.slides)
    }

    private _checkSliderMode(): void {
            this.slideConfig.slidesToShow = 1;
            this.slideConfig.slidesToScroll = 1;
            this.slideConfig['prevArrow'] = "<img class='a-left control-c prev slick-prev' src='../../../assets/image/next.svg'>";
            this.slideConfig['nextArrow'] = "<img class='a-right control-c next slick-next' src='../../../assets/image/right-chevron.svg'>";
    }

}