import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-testimonails-section',
  templateUrl: './testimonails-section.component.html',
  styles: [],
})
export class TestimonailsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // swiper testimonials
    var swiper = new Swiper('.mySwiper3', {
      slidesPerView: 4,
      spaceBetween: 5,
      freeMode: true,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 5.5,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });
  }
}
