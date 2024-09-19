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

  // TODO
  static StepRound(
    x: number,
    y: number,
    points: number[][],
    radius: number
  ): string {
    return "";
  }
}
