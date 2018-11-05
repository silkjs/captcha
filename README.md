# code-validator

前端验证码生产器

## 引用

```js
import { CodeValidator } from "code-validator";
```

## 生成随机验证码

```js
const cv = new CodeValidator();

const res = cv.random();
```

## 说明

interface

```ts
export class CodeValidator {
  constructor(options?: { width?: number; height?: number; length?: number });
  random(): { base: string; value: string };
}
```

> 初始化参数 options

| 参数   | 默认值 | 说明       |
| :----- | :----- | :--------- |
| width  | 100    | 图片宽度   |
| height | 30     | 图片高度   |
| length | 4      | 验证码长度 |

> 返回值

| 参数  | 说明                     |
| :---- | :----------------------- |
| base  | 验证码图片的 base64 编码 |
| value | 图片高度                 |

## example

[stackblitz](https://stackblitz.com/edit/code-validator)

![img1]('./doc/code.png)
![img2]('./doc/code1.png)

<iframe src="https://stackblitz.com/edit/code-validator" frameborder="0"></iframe>
