import { Component } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppComponent {
  expandedElement: any;
  public data = [
    {
      _id: 'c9d5ab1a',
      subdomain: 'wing',
      domain: 'aircraft',
      part_id: 'c9d5ab1a',
      'info.mimetype': 'application/json',
      'info.dependent': 'parent',
      nested: [
        {
          domain: '123aircraft',
          _id: 'c1859902',
          'info.mimetype': 'image/jpeg',
          'info.dependent': 'c9d5ab1a',
          part_id: 'c1859902',
          subdomain: 'tail',
        },

        {
          domain: '456aircraft',
          _id: 'c1859902',
          'info.mimetype': 'image/jpeg',
          'info.dependent': 'c9d5ab1a',
          part_id: 'c1859902',
          subdomain: 'tail',
        },
      ],
    },
    {
      _id: '1b0b0a26',
      subdomain: 'fuel',
      domain: 'aircraft',
      part_id: '1b0b0a26',
      'info.mimetype': 'image/jpeg',
      'info.dependent': 'no_parent',
    },
  ];

  dataSource = new MatTableDataSource([]);
  displayedColumns = [
    '_id',
    'subdomain',
    'domain',
    'part_id',
    'info.mimetype',
    'info.dependent',
  ];
  constructor() {
    this.displayedColumns = this.displayedColumns;
    this.dataSource = new MatTableDataSource(this.data);
  }

  getKeys(object): string[] {
    //console.log(object);
    return Object.keys(object);
  }

  onItemSelected(idx: number) {
    console.log(idx);
  }

  applyFilter() {}
}
