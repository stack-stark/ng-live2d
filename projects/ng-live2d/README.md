# about
angular下的live2d库,借鉴https://github.com/QiShaoXuan/vuepress-plugin-cat.git

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
<lib-ng-live2d [modelName]="" [needToTop]=""></lib-ng-live2d>
```
# API
### modelName string
模型名,包含以下名字,可不传,默认hijiki
z16,Epsilon2_1,izumi,koharu,shizuku,miku,
hijiki,tororo

### needToTop boolean
是否需要点击回到顶部功能,默认false


# Demo


# License
MIT

# Keywords
live2d 
angular
library