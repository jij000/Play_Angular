import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent) imageSlider : ImageSliderComponent;

  title = '拼多多';

  topMenus: TopMenu[] = [{
    title: '热门',
    link: '#'
  }, {
    title: '男装',
    link: '#'
  }, {
    title: '手机',
    link: '#'
  }, {
    title: '女装',
    link: '#'
  }, {
    title: '儿童',
    link: '#'
  }, {
    title: '母婴',
    link: '#'
  }, {
    title: '手机1',
    link: '#'
  }, {
    title: '手机2',
    link: '#'
  }, {
    title: '手机3',
    link: '#'
  }, {
    title: '手机4',
    link: '#'
  }, {
    title: '手机5',
    link: '#'
  }, {
    title: '手机6',
    link: '#'
  }];

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }

  imageSliders : ImageSlider[] = [{

    imgUrl: "https://images8.alphacoders.com/829/829026.jpg",
    link: '#',
    caption: "aaa"
  },{

    imgUrl: "https://images8.alphacoders.com/829/829025.jpg",
    link: '#',
    caption: "aaa"
  },{

    imgUrl: "https://images.alphacoders.com/829/829024.jpg",
    link: '#',
    caption: "aaa"
  },{

    imgUrl: "https://images3.alphacoders.com/829/829023.jpg",
    link: '#',
    caption: "aaa"
  },{

    imgUrl: "https://images5.alphacoders.com/829/829033.png",
    link: '#',
    caption: "aaa"
  }];

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.imageSlider);
  }
}
