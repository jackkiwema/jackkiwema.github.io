    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(var tablink in tablinks){
            tablink.clasList.remove("active-link");
        }
        for(var tabcontent in tabcontents){
            tabcontent.clasList.remove("active-tab");
        }
        event.currentTarget.clasList.add("active-link");
        document.getElementById("tabname").classList.add("active-tab");
    };


    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw5HQDJwzYJ4S93i6OySXMX9Ihkky3DtGtJPduX2MNpk744L4Q4E50BM7EKNO6PsYbRoQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });

    
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');
    
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