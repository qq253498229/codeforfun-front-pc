# CodeforfunPc

## 测试页面

[点击](http://test.codeforfun.cn/index)

## 使用技术及第三方工具

- [Angular](https://angular.io/) Angular(v6.0.3)
- [NG-ZORRO](https://ng.ant.design/docs/introduce/zh) NG-ZORRO(v1.1.1)，Ant Design 的 Angular 实现
- [Ngx-translate](https://github.com/ngx-translate/core) I18n工具(v10.0.2)
- [Underscore](https://underscorejs.org/) JS工具(v1.9.1)

## 文件结构

- [app](src/app) 程序源码
  - [AppModule](src/app/app.module.ts) 主模块/路由
  - [shared](src/app/shared) 通用模块
    - [layout](src/app/shared/layout) 布局组件
    - [header](src/app/shared/header) 头部组件
    - [footer](src/app/shared/footer) 底部组件
    - [index](src/app/shared/index) 主页模块
    - [page-not-found](src/app/shared/page-not-found) 404组件
    - [shared](src/app/shared/shared) 通用import模块
  - [modules](src/app/modules) 业务模块
    - [system](src/app/modules/system) 系统设置模块
      - [profile](src/app/modules/system/profile) 个人资料组件
- [assets](src/assets) 静态文件目录
  - [images](src/assets/images) 图片目录
    - [icon](src/assets/images/icon) 图标文件目录 
  - [i18n](src/assets/i18n) 国际化资源目录
    - [zh.json](src/assets/i18n/zh.json) 中文
    - [en.json](src/assets/i18n/en.json) 英文
- [environments](src/environments) 环境配置文件
  - [environment.prod.ts](src/environments/environment.prod.ts) 生产环境参数文件
  - [environment.ts](src/environments/environment.ts) 开发环境参数文件
- [styles](src/styles) 样式文件夹
  - [common.scss](src/styles/common.scss) 全局样式文件
  - [reset.scss](src/styles/reset.scss) 初始化样式文件
- [styles.scss](src/styles.scss) 样式引入文件
