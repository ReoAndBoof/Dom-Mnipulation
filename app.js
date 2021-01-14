// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBun = document.querySelector(".addListBtn");

//  text.style.color = 'red';
// text.style.backgroundColor = "green";
// text.classList.add("change");

// changeColor.addEventListener('click', function(){
    // text.classList.toggle("change");
// });

/*const userList = document.querySelectorAll('.name-list li');

for( user of userList){
    user.addEventListener('click', function() {
        this.style.color = 'red';
    });
};*/

addListBun.addEventListener('click', function() {
// Create on li out of thin air
const newLi = document.createElement("LI");
const liContent = document.createTextNode(listInput.value);
console.log(listInput.value);

// Add the input value inside that new li
newLi.appendChild(liContent);

// Attaching the li to the user list
userList.appendChild(newLi);
});