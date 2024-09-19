export class Capsule {
  static Row(x: number, y: number, width: number, height: number): string {
    if (width <= height) return "";

    const radius = height / 2;
    const innerWidth = width - height;
    return `
      M${x} ${y}
      L${x + innerWidth} ${y}
      a${radius} ${radius} 0 0 1 0 ${height}
      L${x} ${y + height}
      a${radius} ${radius} 0 0 1 0 ${-height}
    `;
  }
}
