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

// Set the date we're counting down to
var countDownDate = new Date("Aug 11, 2022 17:57:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  document.getElementById("demo").innerHTML = "0" + hours + ":"
  + minutes + ":" + seconds;
  demo.style.fontSize = '80px'; 

 
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let counter_car = 0;

    car1.addEventListener('click', function (event) {  
        counter_car = 0;
        courusel1_1.style.display = 'block'; 
        courusel1_2.style.display = 'block';      
        courusel_c.style.display = 'none';
        courusel_d.style.display = 'none';
        courusel3_1.style.display = 'none';
        courusel2_1.style.display = 'none';
        car2.style.border = '1px solid #EBEBEB';
        car1.style.border = '1px solid #FED100';
        car3.style.border = '1px solid #EBEBEB';
    });

    car2.addEventListener('click', function (event) {  
        counter_car = 1;
        courusel_c.style.display = 'block'; 
        courusel2_1.style.display = 'block';      
        courusel1_2.style.display = 'none';
        courusel_d.style.display = 'none';
        courusel1_1.style.display = 'none';
        courusel3_1.style.display = 'none';
        car2.style.border = '1px solid #FED100';
        car1.style.border = '1px solid #EBEBEB';
        car3.style.border = '1px solid #EBEBEB';
    });

    car3.addEventListener('click', function (event) {  
        counter_car = 2;
        courusel_d.style.display = 'block'; 
        courusel3_1.style.display = 'block';      
        courusel_c.style.display = 'none';
        courusel1_2.style.display = 'none';
        courusel1_1.style.display = 'none';
        courusel2_1.style.display = 'none';
        car2.style.border = '1px solid #EBEBEB';
        car1.style.border = '1px solid #EBEBEB';
        car3.style.border = '1px solid #FED100';
    });

    courusel_btn1.addEventListener('click', function (event) {  
        
        if (counter_car == 0) {
            counter_car += 1;
            courusel1_1.style.display = 'none';      
            courusel2_1.style.display = 'block'; 
           // document.getElementById("courusel_change").innerHTML = "<h3>???????????? 3 ??????????</h3><p>???????????? 2 ??</p><p>???????????? 2 ??</p><p>?????????? 16 ??<sup>3</sup></p><p>???????????????????????????????? 1,5 ??</p><button>????????????????</button>"; 
           // courusel_change.style.display = 'flex'; 
           // courusel_change.style.flexDirection = 'column';
            courusel1_2.style.display = 'none';  
            courusel_c.style.display = 'block';
            car2.style.border = '1px solid #FED100';
            car1.style.border = '1px solid #EBEBEB';
            car3.style.border = '1px solid #EBEBEB';
        } else if (counter_car == 1) {
            counter_car += 1;
            courusel_c.style.display = 'none';
            courusel_d.style.display = 'block';  
            courusel2_1.style.display = 'none'; 
            courusel3_1.style.display = 'block'; 
            car2.style.border = '1px solid #EBEBEB';
            car1.style.border = '1px solid #EBEBEB';
            car3.style.border = '1px solid #FED100';
        }
        else if (counter_car == 2) {
            counter_car = 0;
            courusel_d.style.display = 'none';
            courusel1_2.style.display = 'block';  
            courusel3_1.style.display = 'none'; 
            courusel1_1.style.display = 'block';   
            car2.style.border = '1px solid #EBEBEB';
            car1.style.border = '1px solid #FED100';
            car3.style.border = '1px solid #EBEBEB';
        }
    });


    courusel_btn2.addEventListener('click', function (event) {  
        
        if (counter_car == 0) {
            counter_car += 1;
            courusel1_1.style.display = 'none';      
            courusel2_1.style.display = 'block'; 
           // document.getElementById("courusel_change").innerHTML = "<h3>???????????? 3 ??????????</h3><p>???????????? 2 ??</p><p>???????????? 2 ??</p><p>?????????? 16 ??<sup>3</sup></p><p>???????????????????????????????? 1,5 ??</p><button>????????????????</button>"; 
           // courusel_change.style.display = 'flex'; 
           // courusel_change.style.flexDirection = 'column';
            courusel1_2.style.display = 'none';  
            courusel_c.style.display = 'block';
            car2.style.border = '1px solid #FED100';
            car1.style.border = '1px solid #EBEBEB';
            car3.style.border = '1px solid #EBEBEB';
        } else if (counter_car == 1) {
            counter_car += 1;
            courusel_c.style.display = 'none';
            courusel_d.style.display = 'block';  
            courusel2_1.style.display = 'none'; 
            courusel3_1.style.display = 'block'; 
            car2.style.border = '1px solid #EBEBEB';
            car1.style.border = '1px solid #EBEBEB';
            car3.style.border = '1px solid #FED100';
        }
        else if (counter_car == 2) {
            counter_car = 0;
            courusel_d.style.display = 'none';
            courusel1_2.style.display = 'block';  
            courusel3_1.style.display = 'none'; 
            courusel1_1.style.display = 'block';   
            car2.style.border = '1px solid #EBEBEB';
            car1.style.border = '1px solid #FED100';
            car3.style.border = '1px solid #EBEBEB';
        }
    });
 

    reviews__btn1.addEventListener('click', function (event) {  
        reviews01.style.display = 'none';
        reviews_1.style.display = 'block';
    });

    reviews__btn2.addEventListener('click', function (event) {  
        reviews02.style.display = 'none';
        reviews_2.style.display = 'block';
    });

    reviews__btn3.addEventListener('click', function (event) {  
        reviews03.style.display = 'none';
        reviews_3.style.display = 'block';
    });

 }



window.addEventListener('load', init);



/*
    item2.addEventListener('click', function (event) {
        totalPrice = totalPrice + 20;
        let item = document.createElement("div");
        item.innerHTML = "<p>???????? 20 ????????????</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item3.addEventListener('click', function (event) {
        totalPrice = totalPrice + 15;
        let item = document.createElement("div");
        item.innerHTML = "<p>???????? 15 ????????????</p>";
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