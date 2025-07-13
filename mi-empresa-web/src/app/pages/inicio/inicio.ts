import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  encapsulation: ViewEncapsulation.None
})
export class Inicio implements AfterViewInit {

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, EffectCoverflow],
      
      direction: 'horizontal',
      loop: true,

      effect: 'coverflow', 
      
      coverflowEffect: {
        rotate: 30, // Reduced rotation for a smoother effect
        stretch: 0, 
        depth: 150, // Increased depth for a more pronounced 3D effect
        modifier: 1, 
        slideShadows: true,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },

      // Configuration to show one slide at a time in all cases
      slidesPerView: 1, 
      centeredSlides: true,

      breakpoints: {
        // On larger screens, continue to show only one main slide
        768: {
          slidesPerView: 1, 
        },
        1200: {
          slidesPerView: 1, 
        }
      }
    });
  }
}
