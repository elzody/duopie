import type { Course } from './types';

interface PieOptions {
  sortBy?: string,
  renderingContext: CanvasRenderingContext2D,
  radius: number,
  donut?: boolean,
}

interface PieSlice {
  startAngle: number,
  endAngle: number,
  radius: number,
  color: string,
}

const Pie = {
  options: {} as PieOptions,
  courses: [] as Course[],
  slices: [] as PieSlice[],
  
  from(courses: Course[], options: PieOptions) {
    this.options = options;
    this.courses = courses.sort((a: Course, b: Course) => b.xp - a.xp).slice(0, 4);
    
    this.bake();

    return this;
  },

  bake() {
    const courses = this.courses.map(c => c.xp);
    const total = courses.reduce((p, c) => p + c);
    const color = getColors();
    
    let startAngle = -(Math.PI / 2);

    for (const c of courses) {
      const endAngle = (c * 2 * Math.PI) / total;

      this.slices.push({
        startAngle,
        endAngle: startAngle + endAngle,
        radius: this.options.radius,
        color: color.next(),
      });

      startAngle += endAngle;
    }
  },

  draw() {
    const lineWidth = 2;
    const ctx = this.options.renderingContext;

    for (const slice of this.slices) {
      ctx.strokeStyle = "#ffffff";
      ctx.fillStyle = slice.color;
      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      ctx.moveTo(250, 250);
      ctx.arc(250, 250, slice.radius, slice.startAngle, slice.endAngle);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
    }
  }
}


function getColors() {
  const colors = [
    "#1cb0f6",
    "#ff4b4b",
    "#ffc800",
    "#ff9600",
    "#ce82ff",
    "#2b70c9",
  ];

  let index = 0;

  return {
    next() {
      if (index > colors.length) index = 0;

      return colors[index++];
    }
  }
}

export default Pie;
