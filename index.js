//create node
class Node{
  constructor(val){
    this.value=val;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
  }
  //append at the end of linkedList
  append(value){
    let newNode=new Node(value);
    if(this.head==null){
      this.head=newNode;
    }else{
      let cur=this.head;
      while(cur.next!=null){
        cur=cur.next;
      }
      cur.next=newNode;
    }
  }
  //append before
  prepend(value){
    let newNode=new Node(value);
    if(this.head==null){
      this.head=newNode;
    }else{
      newNode.next=this.head;
      this.head=newNode;
    }
  }
  //iterate and display 
  display(){
    let cur=this.head;
    let value=""
		if(cur==null){
			console.log("no element exists to display..")
		}
    while(cur!=null){
      value=value+cur.value+"->"
      cur=cur.next;
    }
    return value;
  }


//insert at particular index
insert(index,val){
  let newNode=new Node(val);
  if(this.head==null){
    this.head=newNode;
  }else{
    let indexCount=1;
    let cur=this.head;
    while(cur!=null){
      if(indexCount==index){
        if(cur.next==null){
          cur.next=newNode;
        }else{
          let next=cur.next;
					cur.next=newNode;
					newNode.next=next;
        } 
      }
      indexCount++;
			cur=cur.next;
    }
    
  }
}



}


const linkedList=new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(9);
linkedList.prepend(100);
linkedList.prepend(2000);
linkedList.append(9);
linkedList.insert(1,2101)
console.log(linkedList.display())
