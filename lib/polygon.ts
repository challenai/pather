export class Polygon {
  static Basic(points: number[][]): string {
    const n = points.length;
    if (n < 3) return "";
    let path = `M${points[0][0]} ${points[0][1]}`;
    for (let i = 0; i < n; i++) {
      path += ` L${points[i][0]} ${points[i][1]}`
    }

    path += " Z";

    return path;
  }


  static Regular(x: number, y: number, sides: number, radius: number): string {
    const base = 2 * Math.PI / sides;
    let path = ""
    for (let i = 1; i < sides; i++) {
      const radians = base * i;
      path += ` l${radius * Math.cos(radians)} ${radius * Math.sin(radians)}`
    }

    // FIX: align to its center
    return `M${x + radius / 2} ${y} ${path} Z`;
  }
}
