interface TreeNode {
  getNextChild(): TreeNode;
}

function dfs(root: TreeNode, visitor: (node: TreeNode) => void, parentFirst: boolean = true) {
  var stack = [root];
  parentFirst && visitor(root);
  while (stack.length > 0) {
    var node = stack[stack.length - 1];
    var child = node.getNextChild();
    if (child) {
      stack.push(child);
      parentFirst && visitor(child);
    } else {
      var me = stack.pop();
      parentFirst || visitor(me);
    }
  }
}

class DummyTreeNode implements TreeNode {
  currentChild: number = 0;
  depth: number = 0;
  value: string;
  getNextChild() {
    if (this.depth >= 2 || this.currentChild >= 2) {
      return null;
    }
    return new DummyTreeNode(this.value + "-" + this.currentChild++, this.depth + 1);
  }
  constructor(val: string, depth: number = 0) {
    this.value = val;
    this.depth = depth;
  }
}
const ROOT = new DummyTreeNode("0");

dfs(ROOT, (t) => console.log((t as DummyTreeNode).value));

enum Op {
  KEEP,
  REMOVE,
}
var s1 = "acb",
  n1 = 4,
  s2 = "ab",
  n2 = 2;
var max = 0;
class MyTreeNode implements TreeNode {
  s1Len: number;
  s2Len: number;
  lastOp: Op = null;
  myOp: Op = null;
  getNextChild() {
    if(this.lastOp==Op.REMOVE){
      return null;
    }
    if(this.s2Len%s2.length==0){
      max = Math.max(this.s2Len/s2.length, max);
    }
    var appendable = false;
    if (this.lastOp == null) {
      appendable = this.s1Len<n1*s1.length &&
      s1.charAt(this.s1Len % s1.length) == s2.charAt(this.s2Len % s2.length);
    }
    if(appendable){
      this.lastOp = Op.KEEP;
      return new MyTreeNode(this.s1Len+1, this.s2Len+1, Op.KEEP);
    } else {
      if(this.s1Len==0) return null;
      this.lastOp = Op.REMOVE;
      return new MyTreeNode(this.s1Len+1, this.s2Len+1, Op.KEEP);
    }
  }
  constructor(s1Len:number, s2Len:number, myOp: Op){
    this.s1Len = s1Len;
    this.s2Len = s2Len;
  }
}
var str = "";
debugger
dfs(new MyTreeNode(0,0,null), (t) =>{
  var myNode  = <MyTreeNode>t;
  if(myNode.myOp == Op.KEEP){
    str += s2.charAt((myNode.s2Len-1)%s2.length)
  }
  console.log(str);
  debugger
} );