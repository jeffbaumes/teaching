
n = 20;
g = s.make("g", d3.range( n*n ));
t = transform();
t.x(function(d) { return (1 + Math.floor(d/n))*5/n; });
t.y(function(d) { return (1 + d%n)*5/n; });
t.scale(0.5);
g.transform(t);
r = g.add("rect");
r.width(5/n);
r.height(5/n);
//r.stroke("black");
//r.strokeWidth(0.01);

function timer(t) {
  r.x(function(d) { return (1+Math.sin(t+2*Math.PI/(n)*Math.floor(d/n)))*5/n; });
  r.y(function(d) { return (1+Math.cos(t+2*Math.PI/(n)*Math.floor(d/n)))*5/n; });
  r.fill(function(d) { return d3.hsl(50*(t+d), 1, 0.75); });
}
