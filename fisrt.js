// <body style="background-color: #212121; color: #fff;">
/* <div class="parent">
<!-- this is a comment -->
<div class="day">Monday</div>
<div class="day">Tuesday</div>
<div class="day">Wednesday</div>
<div class="day">Thursday</div>
</div>
</body> */

const parent = document.querySelector('.parent')
console.log(parent);

// console.log(parent.children);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    console.log("NODES: ", parent.childNodes);

    //------------------------***************************

    // const div = document.createElement('div')
    // console.log(div);
    // div.className = "main"
    // div.id = Math.round(Math.random() * 10 + 1)
    // div.setAttribute("title", "generated title")
    // div.style.backgroundColor = "green"
    // div.style.padding = "12px"
    // // div.innerText = "Chai aur code"
    // const addText = document.createTextNode("Chai aur code")
    // div.appendChild(addText)
    // document.body.appendChild(div)