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
}
