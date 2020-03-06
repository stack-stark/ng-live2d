# about
angular下的live2d库,借鉴于https://github.com/QiShaoXuan/vuepress-plugin-cat.git

# Install

``` bash
npm install --save ng-live2d
#or
yarn add ng-live2d
```

# Usage
``` js
impor { NgLive2dModule } from 'ng-live2d';

@NgModule({
    "imports": [
        NgLive2dModule
    ]
})
```
``` html
<lib-ng-live2d [modelNameOrUrl]="" [needToTop]="" [positionRight]=""></lib-ng-live2d>
```
# Params
### modelNameOrUrl string
模型名或地址,包含以下名字,可不传,默认hijiki

`z16`,`Epsilon2_1`,`izumi`,`koharu`,`shizuku`,`miku`,`hijiki`,`tororo`

如果传入值没匹配到上面名字则视为传入的为模型url,则加载传入的地址模型

### needToTop boolean
是否需要点击回到顶部功能,可不传默认false

### positionRight boolean
是否右下角显示,默认true,可不传;false则右下角显示

# Demo
http://live2d.asnyc.cn

# License
MIT
