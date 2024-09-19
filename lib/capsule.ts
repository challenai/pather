export class Capsule {
  static Basic(x: number, y: number, width: number, height: number): string {
    const radius = height / 2;
    const width_ = width - height;
    return `
      M${x} ${y}
      L${x + width_} ${y}
      a${radius} ${radius} 0 0 1 0 ${height}
      L${x} ${y + height}
      a${radius} ${radius} 0 0 1 0 ${-height}
    `;
  }
}
