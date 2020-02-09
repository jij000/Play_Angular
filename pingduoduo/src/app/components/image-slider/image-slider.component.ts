import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider{
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() scrollHeight = "160px";
  @Input() intervalBySeconds = 2;
  @ViewChild("imageSlider", {static: true}) imgSlider: ElementRef;
  @ViewChildren("img") imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) { }  // 注入rd2

  ngOnInit() {
    console.log("ngOnInit", this.imgSlider);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngOnInit", this.imgs);
    // this.imgs.forEach(item=>item.nativeElement.style.height = "100px");
    this.imgs.forEach(item=> {
      this.rd2.setStyle(item.nativeElement, "height", "100px");
    });
    let i = 0;
    setInterval(()=>{
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 
        "scrollLeft", 
        (++i % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    }, this.intervalBySeconds * 1000);
  }
}
