import { Component, OnInit, Input } from '@angular/core';
import { live2dJSString } from './live2d.js';

@Component({
  selector: 'lib-ng-live2d',
  templateUrl: './ng-live2d.component.html',
  styleUrls: ['./ng-live2d.component.css']
})
export class NgLive2dComponent implements OnInit {

  constructor() { }

  @Input() style: object = {
    width: 280,
    height: 250
  };
  @Input() modelName = '';
  @Input() needTOTop = false;

  public isLoaded = true;

  private model = {
    z16: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-z16/assets/z16.model.json',
    Epsilon2_1: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json',
    izumi: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-izumi/assets/izumi.model.json',
    koharu: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json',
    shizuku: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json',
    miku: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-miku/assets/miku.model.json',
    hijiki: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json',
    tororo: 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json'
  };

  ngOnInit() {
    this.init();
  }

  /**
   * 参数化
   */
  private init() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    if (isMobile) {
      this.isLoaded = false;
      return console.log('mobile do not load model');
    }

    // tslint:disable-next-line:no-string-literal
    if (!window['loadlive2d']) {
      const script = document.createElement('script');
      script.innerHTML = live2dJSString;
      document.body.appendChild(script);
    }

    this.style = {
      width: (150 / 1424) * document.body.clientWidth,
      height: ((150 / 1424) * document.body.clientWidth) / 0.8
    };

    setTimeout(() => {
      // tslint:disable-next-line:no-string-literal
      window['loadlive2d'](
        'ng-live2d',
        this.modelName ? this.model[this.modelName] : this.model.hijiki
      );
    });
  }

  /**
   * 回到顶部
   */
  public scrollToTop() {
    const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (top > 300 && this.needTOTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
