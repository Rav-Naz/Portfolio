import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from "rxjs";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({
        gridRow: ''
      })),
      state('right', style({
        opacity: 0,
        transform: 'translateX(200px)'
      })),
      state('null', style({
        opacity: 0,
        transform: 'translateX(200px)',
      })),
      transition('null => left', (animate('0.5s ease-out'))),
      transition('null => right', (animate('0.5s ease-out'))),
      transition('right => null', (animate('0s'))),
      transition('left => null', (animate('0s'))),
    ]),
  ]
})
export class ProjectsComponent {

  constructor() { }

  public animationDirection: 'left' | 'right' = null;
  public actualIndex = 1;
  public windowSize = {height: 969,  width: 1920 };
  public list: Array<any> = [
    {title: 'LSOApp 2.0', role: 'Developer', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#E71E25'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#595959', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'},
    {title: 'LSOApp 2.0', role: 'sfa', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#4b8b3b'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#aaaaaa', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'},
    {title: 'LSOApp 2.0', role: 'afsd  sper', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#f4f186'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#ffffff', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'}
  ];

  ngOnInit(): void {
    this.windowSize = {height: window.innerHeight, width: window.innerWidth };
    const observable: Observable<any> = fromEvent(window, 'resize');
    observable.subscribe(size => {
      if (!size) { return; }
      this.windowSize = {height: size.currentTarget.innerHeight, width: size.currentTarget.innerWidth};
    });
  }

  projectPosition(offset: number) {
    return  Math.abs((this.actualIndex - offset)) % this.list.length;
  }

  slide(direction: 'left' | 'right' | 'null') {
    const left = document.getElementById('left');
    const center = document.getElementById('center');
    const right = document.getElementById('right');
  }

}
