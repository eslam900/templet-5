// click on burgerIcon
const burgerIcon = document.querySelectorAll(".burgerIcon span");
const header = document.querySelector("header");
const links = document.querySelector(".links");
const body = document.querySelector("body");

// add EventListener to menu
body.addEventListener("click", (eo) => {
  if (eo.target.className === "burgerIcon" || eo.target.className === "activ") {
    burgerIcon.forEach((span) => {
      span.classList.toggle("activ");
    });
    links.classList.toggle("show");
  } else {
    burgerIcon.forEach((span) => {
      span.classList.remove("activ");
    });
    links.classList.remove("show");
  }
});
// after window loaded
const landingBox = document.querySelectorAll(".landing .boxs .box");
const allLinks = document.querySelectorAll(".links ul a");
window.onload = ()=>{
  landingBox.forEach((box) => {
    box.style.transform = "translateX(0)";
    box.style.opacity = "1";
    allLinks[0].classList.add("activ")
  })
}
// window on  scrolling
const sections = document.querySelectorAll(".section");
const boxs = document.querySelectorAll(".boxs .box");
const progressRight = document.querySelectorAll(".progressRight span");
const progressLift = document.querySelectorAll(".progressLift span");
const firstProgress = document.querySelectorAll(".firstProgress .progressLift span");
window.onscroll = () => {
  // add position fixed to header
  if (window.scrollY >= header.offsetTop + 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
  //  add transform to sections
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 130) {
      boxs.forEach((box) => {
        if (section.dataset.num === box.dataset.num) {
          box.style.transform = "translateX(0)";
          box.style.opacity = "1";
        }
      });
      //  add class activ to link
      allLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${section.id}`) {
          remove();
          link.classList.add("activ");
        }
      });
      // add progress anmation
      if (section.id == "about") {
        progressRight.forEach((span) => {
          span.style.animation = "loading 3s linear 1  forwards";
        });
        progressLift.forEach((span) => {
          span.style.animation = "loading-2 2.5s linear 1.59s 1  forwards";
        });
        firstProgress.forEach((span) => {
          span.style.animation = "loading-3 2.5s linear 1.59s 1  forwards";
        });
      }
    }
  });
};
// remove class activ from link
const remove = () => {
  allLinks.forEach((link) => {
    link.classList.remove("activ");
  });
};
// change services cards
const buttoms = document.querySelectorAll(".options div");
const dataBox = document.querySelectorAll(".boxs-Serv .dataBox");
const imgServ = document.querySelectorAll(".boxs-Serv img");
buttoms.forEach((buttom) => {
  buttom.addEventListener("click", () => {
    removeShadow();
    buttom.classList.add("shadow");
    // add activ class for box
    dataBox.forEach((data) => {
      removeBox();
      document.getElementById(buttom.dataset.id).classList.add("activ");
    });
    imgServ.forEach((image) => {
      if (buttom.dataset.id == image.dataset.img) {
        image.classList.add("activ");
        image.parentElement.classList.add("activ");
      }
    });
  });
});
// remove shadow class
const removeShadow = () => {
  buttoms.forEach((buttom) => {
    buttom.classList.remove("shadow");
  });
};
// remove activ class from box
const removeBox = () => {
  dataBox.forEach((box) => {
    box.classList.remove("activ");
  });
  imgServ.forEach((image) => {
    image.classList.remove("activ");
    image.parentElement.classList.remove("activ");
  });
};
// click to move slider
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const nexButt = document.getElementById("next");
const prevButt = document.getElementById("prevent");
const size = images[0].clientWidth + 12;
let counter = 1;

slider.style.transform = 'translateX('+ -size * counter +  'px)'


const invert = setInterval(()=>{
        if (counter >= images.length - 4) return;
        slider.style.transition = 'transform 0.3s linear' 
        counter++
        slider.style.transform = 'translateX('+ -size * counter + 'px)' 
},3000)
nexButt.addEventListener('click', () => {
    if (counter >= images.length - 5) return;
    slider.style.transition = 'transform 0.3s linear' 
    counter++
    slider.style.transform = 'translateX('+ -size * counter + 'px)' 
})
prevButt.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.3s linear' 
    counter--
    slider.style.transform = 'translateX('+ -size * counter + 'px)' 
})

slider.addEventListener('transitionend',() => {
    if(images[counter].id === 'endImg'){
        slider.style.transition = 'none'
        counter = images.length - 6
        slider.style.transform = 'translateX('+ -size * counter + 'px)'
    }
    if(images[counter].id === 'fristImg'){
        slider.style.transition = 'none'
        counter = 1
        slider.style.transform = 'translateX('+ -size * counter + 'px)'
    }
})

// hidden the placeholder whene click on inputs

const inputs = document.querySelectorAll(".second form input");
const textArea = document.querySelector(".second textarea");

inputs.forEach((input) => {
  input.onfocus = () => {
    input.setAttribute("place-data", input.getAttribute("placeholder"));
    input.setAttribute("placeholder", "");
  };
  input.onblur = () => {
    input.setAttribute("placeholder", input.getAttribute("place-data"));
    input.setAttribute("place-data", "");
  };
});

textArea.onfocus = () => {
  textArea.setAttribute("place-data", textArea.getAttribute("placeholder"));
  textArea.setAttribute("placeholder", "");
};
textArea.onblur = () => {
  textArea.setAttribute("placeholder", textArea.getAttribute("place-data"));
  textArea.setAttribute("place-data", "");
};

