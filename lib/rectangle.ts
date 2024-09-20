export interface Radius4 {
  tl: number;
  tr: number;
  bl: number;
  br: number;
}

export class Rectangle {
  static Basic(x: number, y: number, width: number, height: number): string {
    return `
      M${x - width / 2} ${y - height / 2}
      l${width} 0
      l0 ${height}
      l${-width} 0
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
      M${x - (width - radius.tl - radius.tr) / 2} ${y - height / 2}
      l${width - radius.tr - radius.tl} 0
      a${radius.tr} ${radius.tr} 0 0 1 ${radius.tr} ${radius.tr}
      l0 ${height - radius.tr - radius.br}
      a${radius.br} ${radius.br} 0 0 1 ${-radius.br} ${radius.br}
      l${radius.bl + radius.br - width} 0
      a${radius.bl} ${radius.bl} 0 0 1 ${-radius.bl} ${-radius.bl}
      l0 ${radius.tl + radius.bl - height}
      a${radius.tl} ${radius.tl} 0 0 1 ${radius.tl} ${-radius.tl}
      Z
    `;
  }


  static Diamond(x: number, y: number, width: number, height: number): string {
    const rx = width / 2;
    const ry = height / 2;
    return `
      M${x - rx} ${y}
      l${rx} ${ry}
      l${rx} ${-ry}
      l${-rx} ${-ry}
      Z
    `;
  }
}
