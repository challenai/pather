# Pather

Super easy to use Path Generator for Canvas and SVG.

### Install

`npm install @pattaya/pather --save`

### Use

import the Circle, Rectangle from pather library,  
and stroke it!
You can use it in React, Vue, or just vanilla js.

```javascript
// import shapes
import { Rectangle, Polygon, Curve, Circle } from "./pather.min.js";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

// create rectangle, with x, y, width, height, and round coner
const rect = new Path2D(Rectangle.Round(300, 300, 200, 100, 20));
ctx.stroke(rect);

// create circle, with x, y, radius
const circle1 = new Path2D(Circle.Basic(420, 300, 6));
ctx.stroke(circle1);

// create curve, with points and curve ratio
const curve = new Path2D(
  Curve.Multi(
    [
      [420, 300],
      [520, 460],
      [720, 300],
    ],
    200
  )
);
ctx.stroke(curve);

// create circle, with x, y, radius
const circle2 = new Path2D(Circle.Basic(720, 300, 6));
ctx.stroke(circle2);

// create regular polygon, with 5 sides and size
const polygon = new Path2D(Polygon.Regular(800, 240, 5, 80));
ctx.stroke(polygon);
```

### License

MIT
