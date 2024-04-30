import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousels',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss',
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  images = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg',
    'https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png',
    'https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s',
  ];

  currentImage = 0;
  interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000);
  }

  showPreviousImage() {
    this.currentImage = this.getPreviousImage();
    this.resetInterval();
  }
  showNextImage() {
    this.currentImage = this.getNextImage();
    this.resetInterval();
  }

  getPreviousImage() {
    const prevImage =
      this.currentImage - 1 < 0
        ? this.images.length - 1
        : this.currentImage - 1;

    return prevImage;
  }
  getNextImage() {
    const nextImage = (this.currentImage + 1) % this.images.length;
    return nextImage;
  }
}
