export class Line {
  static Basic(x: number, y: number, x1: number, y1: number): string {
    return `M${x} ${y} L${x1} ${y1}`;
  }

  static Fold(points: number[][]): string {
    if (!points || points.length === 1) return "";

    let path = `M${points[0][0]} ${points[0][1]}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L${points[i][0]} ${points[i][1]}`;
    }

    return path;
  }
}
