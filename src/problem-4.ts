type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};
type Shape = Circle | Rectangle;
function calculateShapeArea(shape: Shape) {
  if (shape?.shape === "circle") {
    return +(Math.PI * shape?.radius * shape?.radius).toFixed(2); 
  }
  if (shape?.shape === "rectangle") {
    return  shape?.height * shape?.width;
  }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(circleArea);
console.log(rectangleArea);
