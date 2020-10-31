import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  actualIndex = 1;
  list: Array<any> = [
    {title: 'LSOApp 2.0', role: 'Developer', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#E71E25'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#595959', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'},
    {title: 'LSOApp 2.0', role: 'sfa', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#4b8b3b'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#fasfsf', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'},
    {title: 'LSOApp 2.0', role: 'afsd  sper', period: '2019-2020',
    imgPath: '../../../../assets/images/icon_s.png', backgroundColor: 'black', shadowColor: '#f4f186'
    , technologyStack: [2, 3, 4, 12, 13, 14], areaTopColor: '#ffffff', areaBottomColor: '#fffff', imageFilter: null, projectPath: 'lso-app'}
  ];

  projectPosition(offset: number) {
    return  Math.abs((this.actualIndex - offset)) % this.list.length;
  }

}
