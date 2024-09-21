export class Step {
  // points example: [[0, 220], [1, 120]]
  // 0: x, 1: y
  static Basic(x: number, y: number, points: number[][]): string {
    if (!points) return "";

    let path = `M${x} ${y}`;
    for (const point of points) {
      if (point[0] === 0) {
        x = point[1];
      } else {
        y = point[1];
      }
      path += ` L${x} ${y}`;
    }

    return path;
  }

  static Round(
    x: number,
    y: number,
    points: number[][],
    radius: number
  ): string {
    if (!points) return "";
    const sz = points.length;
    let path = `M${x} ${y}`;
    let needRotate = false;
    let nx = 0,
      ny = 0;
    let clockwise = false;
    for (let i = 0; i < sz - 1; i++) {
      needRotate = points[i][0] !== points[i + 1][0];
      if (!needRotate) {
        if (points[i][0] === 0) x = points[i][1];
        if (points[i][0] === 1) y = points[i][1];
        path += ` L${x} ${y}`;
        continue;
      }
      if (points[i][0] === 0) {
        x = points[i][1] > x ? points[i][1] - radius : points[i][1] + radius;
        nx = points[i][1];
        ny = points[i + 1][1] > y ? y + radius : y - radius;
        clockwise = points[i][1] > x === points[i + 1][1] > y;
      }
      if (points[i][0] === 1) {
        y = points[i][1] > y ? points[i][1] - radius : points[i][1] + radius;
        ny = points[i][1];
        nx = points[i + 1][1] > x ? x + radius : x - radius;
        clockwise = points[i][1] > y !== points[i + 1][1] > x;
      }
      path += ` L${x} ${y} A${radius} ${radius} 0 0 ${clockwise ? 1 : 0
        } ${nx} ${ny}`;
      x = nx;
      y = ny;
    }

    if (points[sz - 1][0] === 0) x = points[sz - 1][1];
    if (points[sz - 1][0] === 1) y = points[sz - 1][1];

    path += ` L${x} ${y}`;

    return path;
  }
}
