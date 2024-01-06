var numOfButtons = document.querySelectorAll("li button").length;
for (var i=0 ; i < numOfButtons ; i++){
    document.querySelectorAll("li button")[i].addEventListener("click", function(){
        selectedButton(this.innerHTML);

    })
    
}

function selectedButton (x){
            
    switch (x) {
        
        case "1":
            for(var i=0; i < numOfButtons ; i++){
                document.querySelectorAll("li button")[i].removeAttribute("id","selected");
            }
            document.querySelectorAll("li button")[0].setAttribute("id","selected");
            
            break;
        
        case "2":
            for(var i=0; i < numOfButtons ; i++){
                document.querySelectorAll("li button")[i].removeAttribute("id","selected");
            }
            document.querySelectorAll("li button")[1].setAttribute("id","selected"); 
            
            break;

        case "3":
            for(var i=0; i < numOfButtons ; i++){
                document.querySelectorAll("li button")[i].removeAttribute("id","selected");
            }
            document.querySelectorAll("li button")[2].setAttribute("id","selected"); 
            
            break;

        case "4":
            for(var i=0; i < numOfButtons ; i++){
                document.querySelectorAll("li button")[i].removeAttribute("id","selected");
            }
            document.querySelectorAll("li button")[3].setAttribute("id","selected"); 
            
            break;

        case "5":
            for(var i=0; i < numOfButtons ; i++){
                document.querySelectorAll("li button")[i].removeAttribute("id","selected");
            }
            document.querySelectorAll("li button")[4].setAttribute("id","selected"); 
            
            break;

        default:
            
            break;
    }
};

document.querySelector(".submitButton").addEventListener("click",function(){
    if(document.getElementById("selected") === null){
        alert("Please select a rating");
    }else{
        document.querySelectorAll(".survey")[0].classList.add("invisible");
        document.querySelectorAll(".survey")[1].classList.remove("invisible");
    }
    document.querySelector("span").innerHTML = document.getElementById("selected").innerHTML;

});