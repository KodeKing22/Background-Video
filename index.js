const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");


btn.addEventListener("click", ()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play();
        fa.classList.add("fa-play");
        fa.classList.remove("fa-pause");
    }else{
        btn.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-play");
        fa.classList.add("fa-pause");

    }
});


