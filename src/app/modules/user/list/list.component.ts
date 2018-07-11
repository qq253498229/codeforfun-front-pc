import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  test = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 15; i++) {
      this.test.push(i);
    }
  }

}
