export class Circle {
  static Basic(x: number, y: number, radius: number): string {
    return `
      M${x} ${y}
      a${radius} ${radius} 0 1 0 ${-radius * 2} 0
      a${radius} ${radius} 0 1 0 ${radius * 2} 0
    `;
  }
}
