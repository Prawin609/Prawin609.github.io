"use strict";
$(document).ready(function(){
    var ul = document.getElementById('list');
    var li;
    
    try{
        var addButton = document.getElementById('add');
        addButton.addEventListener('click',addItem);
    }catch(err){
        console.log(err.name +": " +err.message);
    }
    
    try{
        var removeButton = document.getElementById('remove');
        removeButton.addEventListener('click',removeItem);
    }catch(err){
        console.log(err.name +": " +err.message);
    }
    
    
    
    //add items for the ratings in the checkbox format
    function addItem(){
        var input = document.getElementById('input');
        var item = input.value;
        ul = document.getElementById('list');
        var textnode = document.createTextNode(item);
        
        if(item === ''){
            return false;
        }else{
            li = document.createElement('li');
            
            
            //defining the attributes
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.setAttribute('id','check');
            
            var label = document.createElement('label');
            label.setAttribute('for','item');
            
            ul.appendChild(label);

            //adding sub-child to the parent
            li.appendChild(checkbox);
            label.appendChild(textnode);
            li.appendChild(label);
            ul.insertBefore(li, ul.childNodes[0]);
            
            
            //timeout functionality for animation effect while adding the data
            setTimeout(function(){
                li.className = 'visual';
            },20)
            
            input.value = '';
            
        }
    }
    
    
    //remove items from the rating based on checkbox selection
    function removeItem() {
        li = ul.children;
        for(let index = 0; index<li.length; index++){
            while(li[index] && li[index].children[0].checked){
                 ul.removeChild(li[index]);
            }
        }
    }

    
    //functionality for number of hits in the browser
    if (localStorage.hits) {
        localStorage.hits =
            parseInt(localStorage.hits) + 1;
    } else { localStorage.hits = 1; }
    
    if (sessionStorage.hits) {
        sessionStorage.hits =
            parseInt(sessionStorage.hits) + 1;
    } else { sessionStorage.hits = 1; }
    
    $('p span').text(localStorage.hits);
    
    
    
    
    //defining logics for add information about destination
    try{
            const container = $('.div_container');
            var memo_text = $('.text_field');
            const add = $('.add');

        
            //getting data from the local storage for initial loadup
            if(window.localStorage.getItem("memo") == undefined){
             var memo_list = [];
             window.localStorage.setItem("memo", JSON.stringify(memo_list));
    }


            var memos = window.localStorage.getItem("memo");
            var memo_list = JSON.parse(memos);

            //defining and updating the data to be added
            var refreshDate = function() {
                var currentdate = new Date();
                var datetime = currentdate.getDate() + "."
                    + (currentdate.getMonth()+1)  + "." 
                    + currentdate.getFullYear();
                    return datetime;
                }


            //class that defines the functionality for add, update and delete about travel destinaton data
            class item{
                constructor(name){
                    this.addData(name);
                }
                
                //add the travel destination
                addData(name){
                    var itemBox = document.createElement('div');
                    itemBox.classList.add('item');

                    
                    //defining the attributes
                    var text_field = document.createElement('input');
                    text_field.type = "text";
                    text_field.disabled = true;
                    text_field.value = name;
                    text_field.classList.add('item_input');

                    var date_field = document.createElement('span');
                    date_field.classList.add('span_date');


                    date_field.innerHTML = refreshDate();
                    var update = document.createElement('button');
                    update.classList.add('update');
                    update.innerHTML = "UPDATE";
                    
                    //defining the update event
                    update.addEventListener('click', () => this.update(text_field, name));

                    var delete_item = document.createElement('button');
                    delete_item.classList.add('delete');
                    delete_item.innerHTML = "DELETE";
                    
                    //defining the delete event
                    delete_item.addEventListener('click', () => this.delete_item(itemBox, name));

                    container.append(itemBox);

                    itemBox.appendChild(text_field);
                    itemBox.appendChild(date_field);
                    itemBox.appendChild(update);
                    itemBox.appendChild(delete_item);

            }

                //update the travel destination
                update(text_element, name){
                    if(text_element.disabled == true){
                       text_element.disabled = !text_element.disabled;
                    }
                    else{
                        text_element.disabled = !text_element.disabled;
                        let indexof = memo_list.indexOf(name);
                        memo_list[indexof] = text_element.value;
                        window.localStorage.setItem("memo", JSON.stringify(memo_list));
                    }
                }

                
                //delete the travel destination
                delete_item(itemBox, name){
                    console.log(itemBox);
                    console.log(itemBox.parentNode);
                    itemBox.parentNode.removeChild(itemBox);
                    let index = memo_list.indexOf(name);
                    memo_list.splice(index, 1);
                    window.localStorage.setItem("memo", JSON.stringify(memo_list));
                }
            }
        
                //adding few datas for initial load up to the constructor
                new item("Toronto");
                new item("Berlin");
        
                //click event for adding the items
                add.click(function (){
                    if(memo_text.val() != ""){
                        new item(memo_text.val());
                        memo_list.push(memo_text.val());
                        window.localStorage.setItem("memo", JSON.stringify(memo_list));
                        memo_text.val("");
                    }
                });

                for (var i = 0; i < memo_list.length; i++){
                    console.log(memo_list[i]);
                    new item(memo_list[i]);
                }
    }catch(error){
         console.log(error.name +": " +error.message);
    }
    

});
