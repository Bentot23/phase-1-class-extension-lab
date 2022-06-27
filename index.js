// Your code here
class Polygon {
    constructor(arrayInt) {
        this.arrayInt = arrayInt;
    }
    get countSide() {
        return this.arrayInt.length
    }
    get perimeter() {
      let sum = 0;
      this.arrayInt.map(num => sum+=num)
      return sum;
    }
};

// const a = new Polygon([ 5, 5, 5 ] )
// console.log(a.arrayInt)
// console.log(a.countSide)
// console.log(a.perimeter)


class Triangle extends Polygon {
    constructor(arrayInt) {
        super(arrayInt);
    }
    get isValid() {
      for(let num of this.arrayInt) {
        // if(num+num<=num) {
        //   return false
        // } else {
        //   return true
        // }
        return num+num>num ? true : false;
      }
    }
};

let b = new Triangle([ 5, 5, 5 ]);

class Square extends Polygon {
  constructor(arrayInt) {
    super(arrayInt);
  }
  get isValid() {
    for(let i=0;i<this.arrayInt.length;i++) {
      for(let j=1;j<this.arrayInt.length;j++){
        if(this.arrayInt[i] === this.arrayInt[j]) {
            return true
        } else {
            return false
        }
      }
    }
  }
  get area() {
    for(let num of this.arrayInt) {
      return num * num;
    }
  }
}
let c = new Square([ 5, 5, 5, 5 ]);
let d = new Square([5,4,3,2]);


