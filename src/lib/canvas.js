// Resize canvas and set background color
const resizeCanvas = (canvas, width, height) => {
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
};

// Draw regular polygon (Pentagon)
const drawPentagon = (ctx, cx, cy, sides, radius, angle, color) => {
  const step = (Math.PI * 2) / sides; // Divide circle by number of sides
  let rotation = angle;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const x = Math.cos(step * i) * radius;
    const y = Math.sin(step * i) * radius;
    ctx.lineTo(x, y);
  }
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
};

// Generate random stars
const generateStars = (canvas, starSizes, starNumber, stars) => {
  stars.length = 0; // Clear previous stars
  for (let i = 0; i < starNumber; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = starSizes[Math.floor(Math.random() * starSizes.length)];
    const vx = (Math.random() - 0.5) * 0.5;
    const vy = (Math.random() - 0.5) * 0.5;
    const rotationSpeed = (Math.random() - 0.5) * 0.05;
    stars.push({
      x,
      y,
      vx,
      vy,
      size,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed,
    });
  }
};

// Draw and update stars with pentagon shape
const drawStars = (ctx, canvas, stars, starColor) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
  stars.forEach((star) => {
    star.x += star.vx;
    star.y += star.vy;

    // Bounce off the edges of the canvas
    if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

    star.angle += star.rotationSpeed;

    // Draw pentagon instead of star
    drawPentagon(
      ctx,
      star.x,
      star.y,
      5, // Number of sides (pentagon)
      star.size,
      star.angle,
      starColor
    );
  });
};

// Initialize canvas, generate stars, and start the animation
export const initializeCanvasAndStars = (
  canvas,
  ctx,
  starSizes,
  starColor,
  starNumber,
  stars
) => {
  let animationId;

  // Resize canvas and set background color
  resizeCanvas(canvas, canvas.width, canvas.height);

  // Generate stars once
  generateStars(canvas, starSizes, starNumber, stars);

  const animate = () => {
    drawStars(ctx, canvas, stars, starColor);
    animationId = requestAnimationFrame(animate); // Store the animation frame id
  };

  // Start the animation
  animate();

  // Return a cleanup function to stop the animation when needed
  return () => {
    cancelAnimationFrame(animationId); // Cancel the previous animation
  };
};
