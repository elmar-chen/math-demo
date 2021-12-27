import { Position, length, pos, poses, dims, dim } from "./length";
class Block {

  top: string;
  left: string;
  bottom: string;
  right: string;



  position: "absolute" | "static";
  display: "block" | "inline" | "inline-block";
  margin: length[];
  padding: length[];
  children: Block[] = [];
  height: string;
  _width: length;
  set width(exp: number|string){
    this._width = dim(exp);
  }

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

labelA.position = "absolute";
labelA.left = "0 px center";


var labelB = new MyText(stationArea, "B");
labelB.position = "absolute";
labelB.right = "0 px center";


var playground = new Block(root);
playground.display = 'block';

playground.height='fit-content';

for(var i=0;i<10;i++){
  var rect = new Block(playground);
  rect.height="100px";
}

layout(root);
root.width = "1000";
function layout(block: Block){
}







