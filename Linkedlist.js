Const Node=require('./node.js');

Const LinkedList = function(){
  let root=new Node(undefined);
  let length = 0
  let lastnode=root

  function has(node){
    let start = root;
    for (let i=0;r<length;r++){
      if(start.getValue()==Node.getValue()){
        return true;
      }
      else{
        start=start.getNext();
      }
      return flase
    }
  function add(Node){
    lastnode.setNext(Node);
    lastnode=node;
  }
  function remove(Node){
    let temp=new Node(undefined);
    let start=root;
    let last;
    while(start.getValue()!==node.getValue()){
      last=start;
      start=start.getNext();
    }
    temp.setValue(start.getNext.getValue);
    temp.setNext(start.getNext.getNext);
    last.SetNext(temp)
  }


}
