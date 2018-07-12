import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  test = [];

  constructor(
    private service: SharedService
  ) {
  }

  ngOnInit() {
    this.service.loadDone();
    for (let i = 0; i < 15; i++) {
      this.test.push(i);
    }
  }

}
