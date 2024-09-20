export class Curve {
  static Basic(
    x: number,
    y: number,
    x1: number,
    y1: number,
    controlPointX: number,
    controlPointY: number,
  ): string {
    return `M${x} ${y} Q${controlPointX} ${controlPointY} ${x1} ${y1}`;
  }

  // curve with multi control point
  static Multi(
    x: number,
    y: number,
    points: number[][],
    radius: number
  ): string {
    if (!points) return "";
    const sz = points.length;
    if (sz === 1) {
      return `M${x} ${y} L${points[0][0]} ${points[0][1]}`;
    }

    let path = `M${x} ${y}`;
    for (let i = 0; i < sz - 1; i++) {
      const x_ = points[i][0];
      const y_ = points[i][1];
      const deltaX1 = i === 0 ? x_ - x : x_ - points[i - 1][0];
      const deltaY1 = i === 0 ? y_ - y : y_ - points[i - 1][1];
      const deltaX2 = x_ - points[i + 1][0];
      const deltaY2 = y_ - points[i + 1][1];
      const ratio = radius / Math.sqrt(deltaX2 * deltaX2 + deltaY2 * deltaY2);
      path += ` L${x_ - deltaX1 * ratio} ${y_ - deltaY1 * ratio} Q${x_} ${y_} ${x_ - deltaX2 * ratio
        } ${y_ - deltaY2 * ratio}`;
    }

    path += `L${points[sz - 1][0]} ${points[sz - 1][1]}`;

    return path;
  }
}
