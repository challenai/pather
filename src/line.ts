export class Line {
  static Basic(x: number, y: number, x1: number, y1: number): string {
    return `M${x} ${y} L${x1} ${y1}`;
  }

  static Fold(x: number, y: number, points: number[][]): string {
    if (!points) return "";

    let path = `M${x} ${y}`;
    for (const point of points) {
      path += ` L${point[0]} ${point[1]}`;
    }

    return path;
  }
}
