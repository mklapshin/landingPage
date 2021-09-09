 function init() {
let a = 0;
    show_add.addEventListener('click', function (event) {
       a += 1;
       if (a%2 == 0) {
        add1.style.display = 'block'; 
       } else {
        add1.style.display = 'none'; 
       }
    });

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const slides = document.querySelectorAll('.slider__slides');
    const btn = document.querySelectorAll('.types__cars');
    const dots = document.querySelectorAll('.slider__dots')
    let index = 0;
    
    const activeSlide = number =>{
        for(let slide of slides){
            slide.classList.remove("active-slide");
        }
        slides[number].classList.add("active-slide");
    }
    
    const activeBtn = number =>{
        for(let button of btn){
            button.classList.remove("active");
        }
        btn[number].classList.add("active");
    }
    
    const activeDot = number =>{
        for(let dot of dots){
            dot.classList.remove("active-dot");
        }
        dots[number].classList.add("active-dot");
    }
    
    const currentSlide = ind =>{
        activeSlide(ind);
        activeBtn(ind);
        activeDot(ind);
    }
    
    const nextSlide = () => {
        if(index == slides.length - 1){
            index = 0;
            currentSlide(index);
        }else{
            index++;
            currentSlide(index);
        }
    }
    
    const prevSlide = () => {
        if(index == 0){
            index = slides.length - 1;
            currentSlide(index);
        }else{
            index--;
            currentSlide(index);
        }
        
    }
    
    dots.forEach((item , indexDot) => {
        item.addEventListener("click", () => {
            index = indexDot;
            currentSlide(index);
        })
    });
    
    btn.forEach((item , indexBtn) => {
        item.addEventListener("click", () => {
            index = indexBtn;
            currentSlide(index);
        })
    });
    
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    

  let time = 21600;
  const timeCountdown = document.getElementById("demo");
  
  function countTime (){
      let hours = Math.floor(time/3600);
      let minutes = Math.floor((time - hours * 3600)/ 60);
      let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
      hours = hours <10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0"+ seconds : seconds;
  
      timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
      time--;
  }
  
  setInterval(countTime, 1000);
  

    reviews__btn1.addEventListener('click', function (event) {  
        reviews01.style.display = 'none';
        reviews_1.style.display = 'block';
        reviews__btn1.style.display = 'none';
        reviews__btn1_2.style.display = 'block';
    });

    reviews__btn2.addEventListener('click', function (event) {  
        reviews02.style.display = 'none';
        reviews_2.style.display = 'block';
        reviews__btn2.style.display = 'none';
        reviews__btn2_2.style.display = 'block';
    });

    reviews__btn3.addEventListener('click', function (event) {  
        reviews03.style.display = 'none';
        reviews_3.style.display = 'block';
        reviews__btn3.style.display = 'none';
        reviews__btn3_2.style.display = 'block';
    });

    reviews__btn1_2.addEventListener('click', function (event) {  
        reviews01.style.display = 'block';
        reviews_1.style.display = 'none';
        reviews__btn1.style.display = 'block';
        reviews__btn1_2.style.display = 'none';
    });

    reviews__btn2_2.addEventListener('click', function (event) {  
        reviews02.style.display = 'block';
        reviews_2.style.display = 'none';
        reviews__btn2.style.display = 'block';
        reviews__btn2_2.style.display = 'none';
    });

    reviews__btn3_2.addEventListener('click', function (event) {  
        reviews03.style.display = 'block';
        reviews_3.style.display = 'none';
        reviews__btn3.style.display = 'block';
        reviews__btn3_2.style.display = 'none';
    });


let menu_counter = 0;
    menubtn3.addEventListener('click', function (event) {  
        if (menu_counter % 2 == 0) {
          menu2.style.display = 'block';
          fullscreeninfo.style.display = 'none';
          menu_counter+=1;
          hamburger.style.backgroundColor = 'red';
         } else {
          menu2.style.display = 'none';
          fullscreeninfo.style.display = 'block'; 
          menu_counter+=1;
          hamburger.style.backgroundColor = '#FED100';
        }
    });
 }


window.addEventListener('load', init);



/*
    item2.addEventListener('click', function (event) {
        totalPrice = totalPrice + 20;
        let item = document.createElement("div");
        item.innerHTML = "<p>Хлеб 20 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item3.addEventListener('click', function (event) {
        totalPrice = totalPrice + 15;
        let item = document.createElement("div");
        item.innerHTML = "<p>Вода 15 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

}


window.addEventListener('load', init);


    $('#button_1').click(function(){
        $("#block_1").css("display", "none");
      });
    $('#button_2').click(function(){
        $("#block_2").css("display", "none");
      });
    $('#button_3').click(function(){
        $("#block_1").css("display", "none");
        $("#block_2").css("display", "none");
      });

      $('#add_2').click(function(){
          alert('ok')
      });

})

*/