export class Line {
  static Basic(x: number, y: number, x1: number, y1: number): string {
    return `M${x} ${y} L${x1} ${y1}`;
  }
}
