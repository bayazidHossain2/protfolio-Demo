$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Learner", "Programmer", "Web-Developer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Tutor", "Programmer", "Web-Developer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: !true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const form = document.querySelector(".contact form"),
messageSend = form.querySelector(".button");

if(form == null){
    console.log("form null");
}else{
    console.log("form not null");
}
if(messageSend == null){
    console.log("button null");
}else{
    messageSend.onclick = ()=>{
        console.log("send clicked.");
        let xhr = new XMLHttpRequest(); //creating XML object
        xhr.open("POST","php/msend.php",true);
        console.log("ajax opened.");
        xhr.onload = ()=>{
            console.log("page loaded.");
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let data = xhr.response;
                    if(data == "success"){

                    }else{
                        errorText.textContent = data;
                        errorText.style.display = "block";
                    }
                    console.log("response is :");
                    console.log(data);
                }
            }else{
                console.log("ajax not loaded.");
            }
        }
        // we have to send the form data throwgh ajax to php 
        let formData = new FormData(form);
        xhr.send(formData);
    }
}

console.log("lask\ndkjf");