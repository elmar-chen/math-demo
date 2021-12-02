// class Block {
//   x: number;
//   y: number;
//   margin: number[];
//   padding: number[];
//   children: Block[];
//   constructor(parent?: Block){
//     parent.children.push(this);
//   }
  
// }
// class hasBlock {
//   block: Block;
// }

// class MyText extends Block {
//   font: string;
//   content: string;
//   constructor(parent: Block, text?: string) {
//     super(parent);
//     this.content = text;
//   }
// }

// var root = new Block();
// root.padding = [0, 10, 0, 10];
// var stationArea = new Block(root);
// var labelA = new MyText(stationArea, "A");

// labelA.x = 0;
// labelA.y = 0;
// var labelB = new MyText(stationArea, "B");
// labelB.x = 0;
// labelB.x = 0;

// var playground = new Block(root);


window.addEventListener('DOMContentLoaded', (ev) => {
  var canvas = <HTMLCanvasElement>document.getElementById("drawing");
  const d2 = canvas.getContext("2d");
  d2.font= "bold 48px serif";;
  d2.fillText("abcdefÂghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 10 ,50);
  console.log(d2.measureText("abcdefÂghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
});