# code-validator

前端验证码生产器

## install

```bash
yarn add code-validator
# OR  npm install code-validator --save
```

## import

```js
import { CodeValidator } from "code-validator";
```

## guide

```js
const cv = new CodeValidator();

const res = cv.random();
```

### in angular

```ts
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { CodeValidator } from 'code-validator'

@Component({
  selector: 'my-app',
  template: `
  <img [src]="base64" (click)="random()"/>
  <h3>{{value}}</h3>
  `
})
export class AppComponent implements OnInit {
  base64: SafeUrl
  value: string
  cv = new CodeValidator({
    width:160,
    height:50,
    length:5
  })

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.random()
  }
  random() {
    let res = this.cv.random()
    this.base64 = this.sanitizer.bypassSecurityTrustUrl(res.base)
    this.value = res.value
  }
}
```

## more

> interface

```ts
export class CodeValidator {
  constructor(options?: { width?: number; height?: number; length?: number });
  random(): { base: string; value: string };
}
```

> constructor options

| 参数   | 默认值 | 说明       |
| :----- | :----- | :--------- |
| width  | 100    | 图片宽度   |
| height | 30     | 图片高度   |
| length | 4      | 验证码长度 |

> random return

| 参数  | 说明                     |
| :---- | :----------------------- |
| base  | 验证码图片的 base64 编码 |
| value | 图片高度                 |

## example

[![img1](./doc/code.png)](https://stackblitz.com/edit/code-validator)
[![img2](./doc/code1.png)](https://stackblitz.com/edit/code-validator)

