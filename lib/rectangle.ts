export interface Radius4 {
  tl: number;
  tr: number;
  bl: number;
  br: number;
}

export class Rectangle {
  static Basic(x: number, y: number, width: number, height: number): string {
    return `
      M${x} ${y}
      L${x + width} ${y}
      L${x + width} ${y + height}
      L${x} ${y + height}
      Z
    `;
  }

  static Round(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | Radius4
  ): string {
    if (typeof radius === "number") {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }

    if (!radius.tl) radius.tl = 0;
    if (!radius.tr) radius.tr = 0;
    if (!radius.bl) radius.bl = 0;
    if (!radius.br) radius.br = 0;

    return `
      M${x + radius.tl} ${y}
      L${x + width - radius.tr} ${y}
      a${radius.tr} ${radius.tr} 0 0 1 ${radius.tr} ${radius.tr}
      L${x + width} ${y + height - radius.br}
      a${radius.br} ${radius.br} 0 0 1 ${-radius.br} ${radius.br}
      L${x + radius.bl} ${y + height}
      a${radius.bl} ${radius.bl} 0 0 1 ${-radius.bl} ${-radius.bl}
      L${x} ${y + radius.tl}
      a${radius.tl} ${radius.tl} 0 0 1 ${radius.tl} ${-radius.tl}
      Z
    `;
  }
}
