export class CodeValidator {
    constructor(options = {}) {
        this.str = "ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";
        this.value = "";
        this.width = options.width || 100;
        this.height = options.height || 30;
        this.length = options.length || 4;
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
    }
    random() {
        this.value = "";
        this.ctx.fillStyle = this.randomColor(150, 230);
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.textBaseline = "top";
        for (let i = 0; i < this.length; i++) {
            const c = this.randomString(); // 一个随机字符
            this.value = `${this.value}${c}`;
            const fs = this.randomNumber(16, this.height); // 字体大小
            this.ctx.font = fs + "px  SimHei";
            const fc = this.randomColor(50, 150); // 字体颜色
            this.ctx.strokeStyle = fc;
            const deg = this.randomNumber(-45, 45); // 旋转角度
            const x = -fs / 2; // 每个字符左上角的坐标
            const y = -fs / 2;
            // 绘制一个字符: 保存状态->平移->旋转->绘制->恢复状态
            this.ctx.save();
            this.ctx.translate((this.width / this.length) * i + 15, 15);
            this.ctx.rotate((deg * Math.PI) / 180);
            this.ctx.strokeText(c, x, y);
            this.ctx.restore();
        }
        for (let i = 0; i < 5; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.randomNumber(0, this.width), this.randomNumber(0, this.height));
            this.ctx.lineTo(this.randomNumber(0, this.width), this.randomNumber(0, this.height));
            this.ctx.strokeStyle = this.randomColor(0, 255);
            this.ctx.stroke();
        }
        for (let i = 0; i < 50; i++) {
            this.ctx.beginPath();
            this.ctx.arc(this.randomNumber(0, this.width), this.randomNumber(0, this.height), 0.5, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.randomColor(0, 255);
            this.ctx.fill();
        }
        return {
            base: this.canvas.toDataURL(),
            value: this.value,
        };
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomColor(min, max) {
        return `rgb(${this.randomNumber(min, max)},${this.randomNumber(min, max)},${this.randomNumber(min, max)})`;
    }
    randomString() {
        return this.str[this.randomNumber(0, this.str.length)];
    }
}
