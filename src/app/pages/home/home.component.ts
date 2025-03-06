import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
    imageObject: Array<object> = 
    [
        {
            image: 'assets/imgs/services/Nageldesign1.jpeg',
            thumbImage: 'assets/imgs/services/Nageldesign1.jpeg',
            alt: 'Nageldesign1'
        },
        {
            image: 'assets/imgs/services/Nageldesign2.jpg',
            thumbImage: 'assets/imgs/services/Nageldesign2.jpg',
            alt: 'Nageldesign2'
        },
        {
            image: 'assets/imgs/services/Nageldesign3.jpg',
            thumbImage: 'assets/imgs/services/Nageldesign3.jpg',
            alt: 'Nageldesign3'
        },
        {
            image: 'assets/imgs/services/Nageldesign4.JPG',
            thumbImage: 'assets/imgs/services/Nageldesign4.JPG',
            alt: 'Nageldesign4'
        },
        {
            image: 'assets/imgs/services/Nageldesign5.JPG',
            thumbImage: 'assets/imgs/services/Nageldesign5.JPG',
            alt: 'Nageldesign5'
        },
        {
            image: 'assets/imgs/services/Nageldesign6.JPG',
            thumbImage: 'assets/imgs/services/Nageldesign6.JPG',
            alt: 'Nageldesign6'
        },
        {
            image: 'assets/imgs/services/Nageldesign7.JPG',
            thumbImage: 'assets/imgs/services/Nageldesign7.JPG',
            alt: 'Nageldesign7'
        },
        {
            image: 'assets/imgs/services/Nageldesign8.JPG',
            thumbImage: 'assets/imgs/services/Nageldesign8.JPG',
            alt: 'Nageldesign8'
        },
        {
            image: 'assets/imgs/services/Wimpern1.jpeg',
            thumbImage: 'assets/imgs/services/Wimpern1.jpeg',
            alt: 'Wimpern1'
        },
        {
            image: 'assets/imgs/services/Wimpern2.JPG',
            thumbImage: 'assets/imgs/services/Wimpern2.JPG',
            alt: 'Wimpern2'
        },
        {
            image: 'assets/imgs/services/Augenbrauen1.PNG',
            thumbImage: 'assets/imgs/services/Augenbrauen1.PNG',
            alt: 'Augenbrauen1'
        },
        {
            image: 'assets/imgs/services/Augenbrauen2.JPG',
            thumbImage: 'assets/imgs/services/Augenbrauen2.JPG',
            alt: 'Augenbrauen2'
        },
        {
            image: 'assets/imgs/services/Augenbrauen3.JPG',
            thumbImage: 'assets/imgs/services/Augenbrauen3.JPG',
            alt: 'Augenbrauen3'
        },
        {
            image: 'assets/imgs/services/Lippen1.JPG',
            thumbImage: 'assets/imgs/services/Lippen1.JPG',
            alt: 'Lippen1'
        }
    ];
}
