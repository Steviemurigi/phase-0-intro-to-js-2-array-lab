const cats = ["Milo","Otis","Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newList = [...cats, name];
    return newList;
}
function prependCat(name){
    const newList2 = [name,...cats];
    return newList2;
}
function removeLastCat(){
    const removeCat = cats.slice (0,2);
    return removeCat;
}
function  removeFirstCat(){
    const removeCat2 = cats.slice (1);
    return removeCat2;
}
