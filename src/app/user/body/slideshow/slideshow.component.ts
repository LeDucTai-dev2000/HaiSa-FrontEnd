import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
  }
  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
  }
  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }


}
