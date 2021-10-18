/* attempt 1 
const calculatorRectangleArea = function (length, width) {
  this.length = length; 
  this.width = width; 
  this.area = function ()
  {
    return this.length * this.width; 
  } else {
    return undefined; 
  }
}

const calculatorTriangleArea = function (base, height) {
  this.base = base; 
  this.height = height; 
  this.area = function ()
  {
    return this.base * this.height / 2; 
  } else {
    return undefined; 
  }
}

const calculatorCircleArea = function (radius) {
  this.radius = radius; 
  this.area = function ()
  {
    return Math.PI * this.radius * this.radius; 
  } else {
    return undefined; 
  } */

const calculateRectangleArea = function (length, width) {
  this.length = length;
  this.width = width;
  this.area = function () {
    if (rectangle >= 0 && length >= 0 && width >= 0) {
      return this.length * this.width;
    } else {
      return undefined;
    }
  }

  const calculateTriangleArea = function (base, height) {
    this.base = base;
    this.height = height;
    this.area = function () {
      if (triangle >= 0 && base >= 0 && height >= 0) {
        return this.base * this.height / 2;
      } else {
        return undefined;
      }
    }

    const calculateCircleArea = function (radius) {
      this.radius = radius;
      this.area = function () {
        if (circle >= 0 && radiuse >= 0) {
          return Math.PI * this.radius * this.radius;
        } else {
          return undefined;
        }
      }

      console.log(calculateRectangleArea(10, 5));     // should print 50
      console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
      console.log(calculateRectangleArea(10, -5));    // should print undefined\


      function calculateRectangleArea(length, width) {
        var rectangle = length * width;
        if (rectangle >= 0 && length >= 0 && width >= 0) {
          return rectangle;
        } else {
          return undefined;
        }

      }

      function calculateRectangleArea(length, width) {
        var rectangle = length * width;
        if (rectangle >= 0 && length >= 0 && width >= 0) {
          return rectangle;
        } else {
          return undefined;
        }

      }

      function calculateTriangleArea(base, height) {

        var triangle = (base * height) / 2;

        if (triangle >= 0 && base >= 0 && height >= 0) {
          return triangle;

        } else {
          return undefined;
        }

      }

      function calculateCircleArea(radius) {
        var circle = Math.PI * Math.pow(radius, 2);
        if (circle >= 0 && radius >= 0) {
          return circle;
        } else {
          return undefined;
        }
      }

      function calculateRectangleArea(length, width) {
        var rectangle = length * width;
        if (rectangle >= 0 && length >= 0 && width >= 0) {
          return rectangle;
        } else {
          return undefined;
        }

      }

      function calculateTriangleArea(base, height) {

        var triangle = (base * height) / 2;

        if (triangle >= 0 && base >= 0 && height >= 0) {
          return triangle;

        } else {
          return undefined;
        }

      }

      function calculateCircleArea(radius) {
        var circle = Math.PI * Math.pow(radius, 2);
        if (circle >= 0 && radius >= 0) {
          return circle;
        } else {
          return undefined;
        }
      }