
n = 1;
circle = s.make("circle", d3.range( n ));
circle.r(100);
circle.cx(200);
circle.cy(200);
circle.fill(d3.hsl(0, 1, 0.8));

numbers = s.make("text", d3.range( n ));
numbers.x(200);
numbers.y(200);
numbers.fontSize(30);
numbers.textAnchor("middle");
numbers.alignmentBaseline("middle");

function timer(time) {
  circle.fill(d3.hsl(360*time/60, 1, 0.8));
  date = new Date();
  now = date.toTimeString().slice(0, 8);
  numbers.text(now);
}
