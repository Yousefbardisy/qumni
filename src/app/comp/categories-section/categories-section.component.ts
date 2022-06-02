import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
})
export class CategoriesSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // swiper categories
    var swiper = new Swiper('.mySwiper2', {
      slidesPerView: 6.5,
      spaceBetween: 5,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 3.5,
          spaceBetween: 5,
          slideToClickedSlide: true,
        },
        600: {
          slidesPerView: 5.5,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 6.5,
          spaceBetween: 10,
        },
      },
    });
    // show small img to big image page product details
    $('.vertical-swiper img').mouseover(function () {
      var imageSrc: any = $(this).attr('src');
      $('.block img').attr('src', imageSrc);
    });
  }
}
