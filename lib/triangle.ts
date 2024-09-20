export class Triangle {
  static Equilateral(x: number, y: number, length: number): string {
    const h = Math.sin(Math.PI / 3) * length;
    const mx = length / 2;
    return `
      M${x - mx} ${y + h / 3}
      l${length} 0
      l${-mx} ${-h}
      Z
    `;
  }
}