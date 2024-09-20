export class Polygon {
  static Basic(x: number, y: number, points: number[][]): string {
    const n = points.length;
    if (n < 3) return "";
    let offsetX = 0, offsetY = 0;
    let path = "";
    for (const point of points) {
      path += ` L${point[0]} ${point[1]}`
      offsetX += point[0];
      offsetY += point[1];
    }

    return `M${x - offsetX / n} ${y - offsetY / n} ${path} Z`;
  }
}
