//  At first creating an function where we are adding an event listener and using DOM content loaded property which will load js after loading all the hitml file 

document.addEventListener('DOMContentLoaded', () => {

    //  Accessing all the element from javascript 

    const itemInput = document.getElementById('item-input');
    const quantityInput = document.getElementById('quantity-input');
    const addButton = document.getElementById('add-button');

    const list = document.getElementById('list');



    //  created on event listener where he runnned one eveny where we are adding one item by clicking the button


    addButton.addEventListener('click', addItem);
    //  In this function we are setting input and qunitity values and trimming so there space can be removed

    function addItem() {

        const item = itemInput.value.trim();  //  it is an item
        const quantity = quantityInput.value.trim();

        //  here we has accessed the item and quantity values 



        //  Now starts the main logic where we are using createElement, appendChild and textcontent for adding the content



        if (item !== "") {  // If the item is empty then the below code will run

            const listItem = document.createElement('li');  // here we are creating an element call list('li')
            listItem.textContent = `${quantity} ${item}`;
            list.appendChild(listItem);
            itemInput.value = "";
            quantityInput.value = '';
        }


    }













});