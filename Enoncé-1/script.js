var FavirtBook=["DEXTER","VAMPAIR DAIRIS"];
function addFavirtBook(bookName){

    var book =bookName.includes("great");
    if (book != true) {

     FavirtBook.push(bookName);
 
    }
}

function printFavoritbook(){

 console.log("number :" + FavirtBook.length)
 console.log("favorit books : ")
  for( let y=0 ; y<FavirtBook.length ;y++)
    console.log(FavirtBook[y]);
 }
