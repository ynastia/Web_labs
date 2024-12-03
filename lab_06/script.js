let box_container = document.getElementById("box-container");
let tags_container = document.getElementById("tags-container");
let data_arr=["junior","middle","senior","front","back"]
let tags_arr=[]
let vacancies_count=10;
for(let i = 0;i<vacancies_count;i++){
    let elem = document.createElement("div");
    let random_count=Math.floor(Math.random() * 5)+1;
    shuffle(data_arr)
    for (let j = 0;j<random_count;j++) {
        let button = document.createElement("button");
        button.innerText=data_arr[j]
        elem.classList.add("box");
        button.onclick=function(){
            if(!tags_arr.includes(button.innerText)){
                let new_button=document.createElement("button");
                new_button.innerText=button.innerText;
                new_button.onclick=function(){
                    tags_arr.splice(tags_arr.indexOf(new_button),1);
                    tags_container.removeChild(new_button);
                }
                tags_arr.push(button.innerText);
                tags_container.append(new_button);
            }
        
        }
        elem.append(button);
        box_container.append(elem);
    }
    
    
}
function filter_page(){
    if(tags_arr.length==0){
        for(let i = 2;i<vacancies_count+2;i++){
            box_container.children[i].style.display="flex";
        }
    }
    else{
        for(let i = 2;i<vacancies_count+2;i++){
        let count=0;
        let div_element=box_container.children[i];
        for(let j = 0;j<div_element.children.length;j++){
            if(tags_arr.includes(div_element.children[j].innerText)){
                count++;
            }
        }
        if(count!=tags_arr.length){div_element.style.display="none"}
        else{div_element.style.display="flex"}
        
        }
    }
    
}
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
}