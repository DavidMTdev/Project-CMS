export default class Hex {
    r!: string
    g!: string
    b!: string

    constructor(style: CSSStyleDeclaration) {
        this.r = style.color.split(/[^\d]/g)[4]
        this.g = style.color.split(/[^\d]/g)[6]
        this.b = style.color.split(/[^\d]/g)[8]
    }

    getHex() {
        return `#${this.fullColorHex(this.r, this.g, this.b)}`
    }

    rgbToHex(rgb: any) {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
    }

    fullColorHex(r: any, g: any, b: any) {   
        const red = this.rgbToHex(r);
        const green = this.rgbToHex(g);
        const blue = this.rgbToHex(b);
        return red+green+blue;
    }
}