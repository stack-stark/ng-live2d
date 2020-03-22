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
<lib-ng-live2d [modelNameOrUrl]="" [positionRight]=""></lib-ng-live2d>
```
# Params
### modelNameOrUrl string
模型名或地址,包含以下名字,可不传,默认hijiki

`z16`,`Epsilon2_1`,`izumi`,`koharu`,`shizuku`,`miku`,`hijiki`,`tororo`

如果传入值没匹配到上面名字则视为传入的为模型url,则加载传入的地址模型


### positionRight boolean
是否右下角显示,默认true,可不传;false则右下角显示

# Change Log
0.0.1 初始版本--2020.3.5

0.0.2 增加支持传入模型地址,支持左下角显示--2020.3.6

0.0.3 移除needToTop参数，增加扩展功能(分享链接，截图，回到顶部) 2020.3.22

# Demo
http://live2d.asnyc.cn

# License
MIT
