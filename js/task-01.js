const categories = document.querySelector('ul').children.length;
console.log(`Numbers of categories: ${categories}`);

const ItemsInList = document.querySelector('ul').children;

for (let i = 0; i < ItemsInList.length; i++) {
    let nameCategory = ItemsInList[i].firstElementChild.textContent;
    let itemsQuantity =ItemsInList[i].querySelectorAll('li').length;
    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${itemsQuantity}`);

// const itemCategories = document.querySelectorAll('.item');
// console.log(itemCategories);
// Names of categories



// const names = document.querySelector("h2");
// console.log(`Category: ${names.textContent}`);

 

// const list = document.getElementsByTagName('li').length;
// console.log(list);


    // const item = document.querySelector("h2");
    // console.log(item)
    // console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  }



