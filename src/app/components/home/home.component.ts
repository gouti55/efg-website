import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  startIndex: any;

  images = [  
    { img: "../assets/img/slider/img1.jpg" },  
    { img: "../assets/img/slider/img2.jpeg" },  
    { img: "../assets/img/slider/img3.jpeg" },
  ];

  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
