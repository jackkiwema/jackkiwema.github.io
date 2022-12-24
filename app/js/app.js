const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
let tablinks = document.querySelectorAll('.tab-links');
let tabcontents = document.querySelectorAll('.tab-contents');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function opentab(tabname){
    for(let i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove('active-link');
    }
    for(let j = 0; j < tabcontents.length; j++){
        tabcontents[j].classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.querySelector(tabname).classList.add('active-tab');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw5HQDJwzYJ4S93i6OySXMX9Ihkky3DtGtJPduX2MNpk744L4Q4E50BM7EKNO6PsYbRoQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Delivered successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });
