
//sidebar
const menuItems =  document.querySelectorAll(".menu-item");

//MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search")

//THEME
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme")
const fontSize = document.querySelectorAll(".chose-size span");
var root = document.querySelector(":root");
const color = document.querySelectorAll(".chose-color span")

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// ============= SIDEBAR =========== //

//remove active class from menu item //
const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove("active");
    })
}


menuItems.forEach(item =>{
    item.addEventListener("click", ()=>{
        changeActiveItem()
        item.classList.add("active");
        if(item.id != 'notifications'){
        document.querySelector(".notifications-popup").style.display  = "none";
        }
        else{
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none"
        }
    })
})

// ============= messages =========== //

//searches chats
const searchMessage = ()=>{
    const val =  messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val)  != -1){
            user.style.display = "flex";
        } else{
            user.style.display = "none"
        }
    })
}

// search chat//
messageSearch.addEventListener("keyup", searchMessage);

//highlight messages card when msg menu item is clicked and remove notification count //
messagesNotification.addEventListener("click", ()=>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(()=>{
        messages.style.boxShadow = "none";
    },2000)
})


// =========== THEME CUSTOMIZATION ==========//

//close model
themeModel.addEventListener("click", (e)=>{
    if(e.target.classList.contains("customize-theme")){
        themeModel.style.display ="none"
    }
})


//open modal
theme.addEventListener("click", ()=>{
    themeModel.style.display="grid";
})

// ========== FONT SIZE ========== //

//remove active class
const removeSize = ()=>{
    fontSize.forEach(size =>{
        size.classList.remove("active")
    })
}

fontSize.forEach(size =>{
    size.addEventListener("click", ()=>{
        removeSize();
        let fontSize;
        size.classList.toggle("active");

        if(size.classList.contains("font-size-1")){
            fontSize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if(size.classList.contains("font-size-2")){
            fontSize = "13px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        } else if(size.classList.contains("font-size-3")){
            fontSize = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if(size.classList.contains("font-size-4")){
            fontSize = "19px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        } else if(size.classList.contains("font-size-5")){
            fontSize = "22px";
            root.style.setProperty("----sticky-top-left", "-12rem");
            root.style.setProperty("----sticky-top-right", "-35rem");
        }

        //change font size of the root html eelement 
        document.querySelector("html").style.fontSize = fontSize;
    })
}) 

//remove  active class from color
const changeActiveColor = ()=>{
    color.forEach(rmv  =>{
        rmv.classList.remove("active")
    })
}

// primary color change

color.forEach(colorp =>{
    colorp.addEventListener("click", ()=>{
        //let primary;
        changeActiveColor(); //call remove activecolor function
      if(colorp.classList.contains("color-1")){
        primaryHue = 252;
      }  else if(colorp.classList.contains("color-2")){
        primaryHue = 52;
      } else if(colorp.classList.contains("color-3")){
        primaryHue = 352;
      } else  if(colorp.classList.contains("color-4")){
        primaryHue = 152;
      } else if(colorp.classList.contains("color-5")){
        primaryHue = 282;
      }
      colorp.classList.add("active")
      
      root.style.setProperty("--primary-color-Hue", primaryHue);
    })
})


// BACKGROUND COLOR CHANGE

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background colo through function
const changeBG = ()=>{
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

bg1.addEventListener("click", ()=>{
    bg1.classList.add("active");
    //Remove active class from prev
    bg2.classList.remove("active");
bg3.classList.remove("active");
window.location.reload();
})

//thats all for bg2
bg2.addEventListener("click", ()=>{
 lightColorLightness = "95%";
 whiteColorLightness = "70%";
 darkColorLightness = "10%";

 //Add active class
bg2.classList.add("active");

//Remove active class from other
bg1.classList.remove("active");
bg3.classList.remove("active");
changeBG();
})

//now for bg3
bg3.addEventListener("click", ()=>{
    lightColorLightness = "95%";
    whiteColorLightness = "20%";
    darkColorLightness = "90%";
    //Add active class
   bg3.classList.add("active");
   
   //Remove active class from other
   bg1.classList.remove("active");
   bg2.classList.remove("active");
   changeBG();
   })

