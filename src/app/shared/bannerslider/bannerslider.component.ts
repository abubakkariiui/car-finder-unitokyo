import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bannerslider',
  templateUrl: './bannerslider.component.html',
  styleUrls: ['./bannerslider.component.scss'],
})
export class BannersliderComponent implements OnInit {
  constructor() {}

  admin_base_ur = environment.admin_base_url;

  images = [
    'assets/img/car-finder/home/hero1.png',
    'assets/img/car-finder/home/hero2.png',
    'assets/img/car-finder/home/hero3.png',
    'assets/img/car-finder/home/hero4.png',
  ];

  @Input() slidersData: any;

  ngOnInit(): void {}

  getImgSrc = (imgStr) => {
    const div = document.createElement('div');
    div.innerHTML = imgStr;
    const img = div.querySelector('img');
    return img.src;
  };

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    lazyLoading: true,
    navigation: false,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: true,
  };
}
