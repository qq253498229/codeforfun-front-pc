import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  LANG_KEY = 'lang';

  constructor(
    public translate: TranslateService
  ) {
    const lang = localStorage.getItem(this.LANG_KEY);
    translate.addLangs(['zh', 'en']);

    if (lang) {
      translate.setDefaultLang(lang);
      this.translate.use(lang);
    } else {
      translate.setDefaultLang('zh');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    }
  }

  getTranslate() {
    return this.translate;
  }

  changeLang(obj) {
    this.translate.use(obj);
    localStorage.setItem(this.LANG_KEY, obj);
  }
}
