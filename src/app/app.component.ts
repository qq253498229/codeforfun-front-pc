import {Component, OnInit} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private hotKey: HotkeysService,
    private router: Router
  ) {

    this.hotKey.add(new Hotkey('alt+`', (event: KeyboardEvent): boolean => {
      this.router.navigate(['/index']);
      return false;
    }, undefined, '回到主页。(macOS中对应option+`)'));

    this.hotKey.add(new Hotkey('alt+1', (event: KeyboardEvent): boolean => {
      this.router.navigate(['/project']);
      return false;
    }, undefined, '跳转到项目列表。(macOS中对应option+1)'));

    this.hotKey.add(new Hotkey('alt+2', (event: KeyboardEvent): boolean => {
      this.router.navigate(['/user']);
      return false;
    }, undefined, '跳转到用户列表。(macOS中对应option+2)'));

    this.hotKey.add(new Hotkey('alt+3', (event: KeyboardEvent): boolean => {
      this.router.navigate(['/team']);
      return false;
    }, undefined, '跳转到团队列表。(macOS中对应option+3)'));

    this.hotKey.add(new Hotkey('alt+4', (event: KeyboardEvent): boolean => {
      this.router.navigate(['/dashboard']);
      return false;
    }, undefined, '跳转到工作台。(macOS中对应option+4)'));
  }

  ngOnInit(): void {
  }
}
