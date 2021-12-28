import { parseLength, length } from "./length";
class Block {
  checkSizeType() {
    throw new Error("Method not implemented.");
  }

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
  width: length;

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
// root.padding = dims([0, 10, 0, 10]);

var stationArea = new Block(root);

var labelA = new MyText(stationArea, "A");

labelA.position = "absolute";
labelA.left = "0 px center";

var labelB = new MyText(stationArea, "B");
labelB.position = "absolute";
labelB.right = "0 px center";

var playground = new Block(root);
playground.display = "block";

playground.height = "fit-content";

for (var i = 0; i < 10; i++) {
  var rect = new Block(playground);
  rect.height = "100px";
}

layout(root);
root.width = parseLength("1000px");


function layout(block: Block) {
  if(block.width.type=='Intrinsic'){
    determineWidth(block);
  }
}
function determineWidth(block: Block) {
  for (let i = 0; i < block.children.length; i++) {
    const child = block.children[i];
    var w = child.width;
    if(w.isPercentage){
      
    }
    // if(child.width.type=='Extrinsic' && child.width.unit=='%' || child.width.type=='Intrinsic'){
    // //  child.width. =  
    // }
  }
}

