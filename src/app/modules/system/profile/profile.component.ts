import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../shared/shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(
    private service: SharedService
  ) {
  }

  ngOnInit() {
    this.service.loadDone();
  }

}
