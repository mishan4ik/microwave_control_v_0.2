let btn_reheating = document.querySelector(".reheating_food");
let btn_defrosting = document.querySelector(".defrosting_food");
let btn_grill = document.querySelector(".grill_food");
let reheating = document.querySelector(".block_time_reheating");
let defrosting = document.querySelector(".block_time_defrosting");
let grill = document.querySelector(".block_time_grill");
let start = document.querySelector(".btn_start_app");
let answer = document.querySelector(".answer_text_start");
let time_reheating = document.querySelector(".time_reheating");
let time_defrosting = document.querySelector(".time_defrosting");
let time_grill = document.querySelector(".time_grill");


btn_reheating.onclick = function func(){

    if(reheating.style.display == ""){

        reheating.style.display = "block"

    }
    else{

        reheating.style.display = ""

    }

}

btn_defrosting.onclick = function func(){

    if(defrosting.style.display == ""){

        defrosting.style.display = "block"

    }
    else{

        defrosting.style.display = ""

    }

}

btn_grill.onclick = function func(){

    if(grill.style.display == ""){

        grill.style.display = "block"

    }
    else{

        grill.style.display = ""

    }

}


function timer () {

    time_reheating = document.querySelector(".time_reheating");
    time_defrosting = document.querySelector(".time_defrosting");
    time_grill = document.querySelector(".time_grill");

    
    if(time_reheating.value == 0  || time_defrosting.value == 0 || time_grill.value == 0){

        answer.innerHTML = "Готово"
        document.getElementById("microwave").style.border = "";

    }
    if(time_reheating.value > 0){
        
        answer.innerHTML = "Зачекайте " + time_reheating.value--;
        document.getElementById("microwave").style.border = "4px solid orange";
        

    }
    if(time_defrosting.value > 0){
        
        answer.innerHTML = "Зачекайте " + time_defrosting.value--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }
    if(time_grill.value > 0){
        
        answer.innerHTML = "Зачекайте " + time_grill.value--;
        document.getElementById("microwave").style.border = "4px solid orange";

    }

}


start.onclick = function func() {


    setInterval(timer,1000)
    



}
