const menuClass= document.getElementById("menu")

const menuIcon = document.getElementById("menu-icon")
   menuIcon.addEventListener("click", ()=>{
    if(menuClass.className ==="hidden"){
        menuClass.classList.remove("hidden");
    }
    else{
        menuClass.classList.add("hidden")
    }
   })
 

