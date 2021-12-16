import {Position, Size,pos,poses,dims, dim} from "./dimension";
class Block {
  x: Position;
  y: Position;

  margin: Size[];
  padding: Size[];
  children: Block[] = [];
  constructor(parent?: Block) {
    parent && parent.children.push(this);
  }
}

class MyText extends Block {
  font: string;
  content: string;
  constructor(parent: Block, text?: string) {
    super(parent);
    this.content = text;
  }
}

var root = new Block();
root.padding = dims([0, 10, 0, 10]);




var stationArea = new Block(root);

var labelA = new MyText(stationArea, "A");


labelA.x = {
   self_base: 'center',
   parent_base: 'start'
}


var labelB = new MyText(stationArea, "B");
labelB.x = {
  self_base: 'center',
  parent_base: 'start'
}

var playground = new Block(root);




// // window.addEventListener('DOMContentLoaded', (ev) => {
// //   var canvas = <HTMLCanvasElement>document.getElementById("drawing");
// //   const d2 = canvas.getContext("2d");
// //   d2.font= "bold 120px serif";;
// //   d2.fillText("abcdefÂ♂♀╂╊╊∫∮ghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 10 ,150);
// //   var m = d2.measureText("abcdefÂ♂♀╂╊╊∫∮ghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
// //   d2.beginPath();
// //   d2.moveTo(10, 150-m.actualBoundingBoxAscent);
// //   d2.lineTo(2000, 150-m.actualBoundingBoxAscent);
// //   d2.moveTo(10, 150+m.actualBoundingBoxDescent);
// //   d2.lineTo(2000, 150+m.actualBoundingBoxDescent);
// //   d2.moveTo(10, 150);
// //   d2.lineTo(2000, 150);
// //   d2.strokeStyle="blue";
// //   d2.stroke();

// //   d2.beginPath();
// //   d2.moveTo(10, 150-m.fontBoundingBoxAscent);
// //   d2.lineTo(2000, 150-m.fontBoundingBoxAscent);
// //   d2.moveTo(10, 150+m.fontBoundingBoxDescent);
// //   d2.lineTo(2000, 150+m.fontBoundingBoxDescent);
// //   d2.strokeStyle="red";
// //   d2.stroke();

// //   console.log(d2.measureText("abcdefÂ♂♀╂╊╊∫∮ghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
// // });
