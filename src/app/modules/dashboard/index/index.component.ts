import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared/shared.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private service: SharedService
  ) {
  }

  ngOnInit() {
    this.service.loadDone();
  }

}
