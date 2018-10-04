import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appLoadImage]'
})
export class LoadImageDirective implements AfterContentInit {

  @Input()
  appLoadImage: string;
  constructor(private el: ElementRef) {
  }

  ngAfterContentInit(): void {
    const img = new Image()
    img.onload = () => {
      this.el.nativeElement.src = img.src;
    }
    img.onerror = () => {
      this.el.nativeElement.src = '/assets/not-found.png';
    }
    img.src = this.appLoadImage;
  }
}
