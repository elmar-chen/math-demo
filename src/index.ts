class Item {
  x: number;
  y: number;
  margin: number[];
  padding: number[];
  blocks: Item[];
  add(sub: Item) {
    this.blocks.push(sub);
  }
  constructor(parent?: Item) {
    parent.add(this);
  }
}

class MyText extends Item{
    font:string;
    content: string;
    constructor(parent?: Item, text?:string){
        super(parent);
        this.content = text;
    }
}

var root = new Item();
root.padding = [0, 10, 0, 10];
var stationArea = new Item(root);
var labelA = new MyText(stationArea,"A");

labelA.x = 0;
labelA.y = 0;
var labelB = new MyText(stationArea);
labelB.x = 0;
labelB.x = 0;

var playground = new Item(root);
