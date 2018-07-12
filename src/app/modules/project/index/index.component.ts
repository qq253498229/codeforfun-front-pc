import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared/shared.service';

@Component({
  selector: 'app-project-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  test = [1, 2, 3, 4];

  constructor(
    private service: SharedService
  ) {
  }

  ngOnInit() {
    this.service.loadDone();
  }

}
