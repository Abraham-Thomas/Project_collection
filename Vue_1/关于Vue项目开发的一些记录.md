路由就是根据网址的不同，返回不同的内容给用户。

<router-view/>：显示的是当前路由地址所对应的内容

项目入口文件：main.js

ES6语法，键和值如果相同，则只要写一个就好。Home：Home, 写成 Home,即可

![多页应用特点](E:\GitHub\Project_collection\Vue_1\images\多页面应用.png)

------

![](E:\GitHub\Project_collection\Vue_1\images\单页应用.png)

<router-link to="/"></router-link>：页面跳转，和<a>标签差不多.

<template></template>中只能包含一个根标签。

在不同的手机上浏览器上，默认样式不统一，使用reset.css可以统一。

移动端有一个1像素边框的问题（部分手机分辨率较高），避免边框过度渲染。使用border.css。

------

部分机型click事件会延迟三百毫秒，可通过npm install fastclick --save, 下载第三方的fastclick包到依赖之中，

--save表示不管在开发环境中还是打包上线的代码都能使用。下载后记得在main.js 中引入。

------

如果想用styl语法，需要下载依赖包：npm install stylus --save 和 npm install stylus-loader --save。

------

build目录下webpack.base.conf.js中可以设置一些配置，比如在resolve中，可以将常用路径用其他形式来表示。

比如'@': resolve('src'), 表示用@符号代替src目录。注意：修改配置项后要重启