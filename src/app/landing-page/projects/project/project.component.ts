import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  constructor() { }

  technologyStackList = [
    '../../../../assets/images/js.png',
    '../../../../assets/images/ts.png',
    '../../../../assets/images/angular.png',
    '../../../../assets/images/nativescript.png',
    '../../../../assets/images/node-js.png',
    '../../../../assets/images/mysql.png',
    '../../../../assets/images/html.png',
    '../../../../assets/images/sass.png',
    '../../../../assets/images/css.png',
    '../../../../assets/images/flutter.png',
    '../../../../assets/images/dart.png',
    '../../../../assets/images/python.png',
    '../../../../assets/images/android.png',
    '../../../../assets/images/ios.png',
    '../../../../assets/images/web.png',
  ];

  @Input() project: {title: string, role: string, period: string,
     imgPath: string, backgroundColor: string, shadowColor: string,
      technologyStack: Array<number>, areaTopColor: string, areaBottomColor: string,
      imageFilter: string, projectPath: string};
}
