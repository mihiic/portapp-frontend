import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() images: String[];

  public currentImage: String;
  private currentImageIndex: number;

  constructor() { }

  ngOnInit() {
    this.currentImage = this.images[0];
    this.currentImageIndex = 0;
  }

  @HostListener('window:keydown', ['$event'])
  public keyPressed(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    }
  }

  public prevImage(): void {
    this.currentImageIndex -= 1;
    this.prepareImage();
  }

  public nextImage(): void {
    this.currentImageIndex += 1;
    this.prepareImage();
  }

  private prepareImage(): void {
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    } else if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
    this.currentImage = this.images[this.currentImageIndex];
  }

}
