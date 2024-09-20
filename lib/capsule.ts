export class Capsule {
  static Row(x: number, y: number, width: number, height: number): string {
    if (width < height) return "";

    const radius = height / 2;
    return `
      M${x - radius} ${y - radius}
      l${width - height} 0
      a${radius} ${radius} 0 0 1 0 ${height}
      l${height - width} 0
      a${radius} ${radius} 0 0 1 0 ${-height}
    `;
  }
}
