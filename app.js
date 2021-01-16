const text = document.querySelector(".title"); //class title
const changeColor = document.querySelector(".changeColor"); //class chageColor Btn
const userList = document.querySelector(".name-list"); //class name-list
const listInput = document.querySelector(".list-input"); //class list-input
const addListBun = document.querySelector(".addListBtn"); //class addListBtn
const userLists = document.querySelectorAll('.name-list li');

changeColor.addEventListener('click', function(){
    text.classList.toggle("change");
});

for( user of userLists){
    user.addEventListener('click', function() {
        this.style.color = 'red';
    });
};

addListBun.addEventListener('click', function() {
// Create on li out of thin air
const newLi = document.createElement("LI");
const liContent = document.createTextNode(listInput.value);
// Add the input value inside that new li
newLi.appendChild(liContent);
console.log(newLi);
// Attaching the li to the user list
userList.appendChild(newLi)
});

