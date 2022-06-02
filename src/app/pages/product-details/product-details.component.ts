import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [],
})
export class ProductDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // swiper page product details
    var swiper = new Swiper('.mySwiper4', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: false,
      loop: true,
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          direction: 'horizontal',
          freeMode: false,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
          direction: 'horizontal',
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 60,
          direction: 'vertical',
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 20,
          direction: 'vertical',
        },
      },
    });
  }
}
