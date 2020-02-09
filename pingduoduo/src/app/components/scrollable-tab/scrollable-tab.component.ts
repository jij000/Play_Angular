import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  // 构造函数 永远第一个调用
  constructor() { }

  selectedIndex = -1;
  @Input() menus: TopMenu[] = []; // 从外部导入
  @Input() backgroundColor: '#fff'; // fff 为默认值
  @Input() titleActiveColor: 'yellow';
  @Input() titleColor: 'blue';
  @Input() indicatorColor: 'brown';

  @Output() tabSelected = new EventEmitter();  // 事件发射器

  // 初始化时调用
  ngOnInit(): void {
  }

  handelSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);  // 发射事件
  }
}
