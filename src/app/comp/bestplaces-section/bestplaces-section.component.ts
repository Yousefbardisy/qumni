import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-bestplaces-section',
  templateUrl: './bestplaces-section.component.html',
  styles: [],
})
export class BestplacesSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // swiper best places
    var swiper = new Swiper('.mySwiper5', {
      slidesPerView: 3,
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }
}
