import { Component, OnInit, Input } from '@angular/core';
import { live2dJSString } from './live2d.js';

@Component({
  selector: 'lib-ng-live2d',
  templateUrl: './ng-live2d.component.html',
  styleUrls: ['./ng-live2d.component.css']
})
export class NgLive2dComponent implements OnInit {

  constructor() { }

  public style: object = {
    width: 280,
    height: 250
  };

  @Input() modelNameOrUrl = ''; // 模型或者地址
  @Input() needToTop = false; // 是否需要点击回到顶部
  @Input() positionRight = true; // 是否右下角


  public isLoaded = true; // 是否显示

  private modelNameArray: Array<string> = ['z16', 'Epsilon2_1', 'izumi', 'koharu', 'shizuku', 'miku', 'hijiki', 'tororo'];

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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    this.style = {
      width: (150 / 1424) * document.body.clientWidth,
      height: ((150 / 1424) * document.body.clientWidth) / 0.8
    };
     // tslint:disable-next-line:no-string-literal
    if (window['loadlive2d']) {
      // tslint:disable-next-line:no-string-literal
      window['loadlive2d'](
        'ng-live2d',
        this.setUrl()
      );
    }
  }

  /**
   * 初始化
   */
  private init(): void {
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
        this.setUrl()
      );
    }, 500);
  }

  /**
   * 设置模型url
   */
  private setUrl(): string {
    if (this.modelNameOrUrl && this.modelNameOrUrl) {
      const keyIndex = this.modelNameArray.indexOf(this.modelNameOrUrl);
      if (keyIndex === -1) {
       return this.modelNameOrUrl;
      } else {
        return this.model[this.modelNameOrUrl] ? this.model[this.modelNameOrUrl] : this.model.hijiki;
      }
    } else {
      return this.model.hijiki;
    }
  }

  /**
   * 回到顶部
   */
  public scrollToTop(): void {
    const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (top > 300 && this.needToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
