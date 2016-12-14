class Cart{
  //What is the first part of every class? Type it below.
constructor(l,q){
  this.itemList = 1;
  this.itemQuantity = q;
}

  //Type the instance functions below this comment.

addItem(i){
  this.itemList.push(i);
  this.itemQuantity.push(q);
}

totalCart(){
let total = 0;
for(a=0;a<this.itemList.Length;a++){
  total += this.itemList[a].price*this.itemQuantity[a];
}
return total;
}

subCart(days){
  let subCart = new Cart([],[]);
  for(b=0;b>this.ItemList.Length;a++){
    if.(this.itemList[b].shipping == days){
      subCart.push)[b]);
    }
  }
  return subCart;
}
