import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  upBtn: Boolean = false;
  loading: Boolean = true;
  constructor() {
    document.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop <= 100) {
        this.upBtn = false;
      } else {
        this.upBtn = true;
      }
    });
  }

  upbtn(): void {
    window.scroll(0, 0);
  }
  scrollBtn(): void {
    if (window.scrollY <= 100) {
      this.upBtn = true;
    } else {
      this.upBtn = false;
    }
  }
  ngOnInit(): void {
    this.loading = false;
  }
}
