//small / mobile device hamburger nav items
const navList = document.querySelector(".main-nav__list");
const hamburger = document.getElementById("hamburger")
const navToggle = document.getElementById("nav-toggle");


//Toggle hamburger nav off when one of its links is clicked
navList.onclick = () => {
    let input = hamburger;
    input.checked = false;
};

//course_level box slide controls
let courseSlides = document.querySelector("#levels").children;
let courseNextBtn = document.querySelector(".btn.next");
let coursePrevBtn = document.querySelector(".btn.previous");
let courseSlidesAll = courseSlides.length;
let courseLevelIndex = 0;

courseNextBtn.onclick = function () {
  moveCourseSlide("next");
}

coursePrevBtn.onclick = function () {
  moveCourseSlide("prev")
}

function moveCourseSlide(direction) {

  if(direction=="next"){
    courseLevelIndex++;
      if(courseLevelIndex==courseSlidesAll){
        courseLevelIndex = 0;
      }
  }
  else{
    if(courseLevelIndex == 0) {
      courseLevelIndex = courseSlidesAll-1;
    } else {
      courseLevelIndex--;
    }
  }
  for(i = 0; i < courseSlidesAll; i++) {
    courseSlides[i].classList.remove("active");
  }

  courseSlides[courseLevelIndex].classList.add("active");


}


//features_main box slide controls with progress slider - need to fix
let featureSlides = document.querySelector("#features").children;
let featureNextBtn = document.querySelector(".progress-slider > .btn.next");
let featurePrevBtn = document.querySelector(".progress-slider > .btn.previous")
let featureSlidesAll = courseSlides.length;
let featureLevelIndex = 0;

let featureRadioSlides = document.querySelectorAll(".radio.btn.progress");

featureNextBtn.onclick = function () {
  moveFeatureSlide("next");
}

featurePrevBtn.onclick = function () {
  moveFeatureSlide("prev")
}


function moveFeatureSlide(direction) {
  if(direction=="next"){
    featureLevelIndex++;
      if(featureLevelIndex == featureSlidesAll){
        featureLevelIndex = 0;
      }
  }
  else{
    if(featureLevelIndex == 0) {
      featureLevelIndex = featureSlidesAll-1;
    } else {
     featureLevelIndex--;
    }
  }
  for(i = 0; i < featureSlidesAll; i++) {
    featureSlides[i].classList.remove("active");
    featureRadioSlides[i].removeAttribute("checked");
  
  }

  featureSlides[featureLevelIndex].classList.add("active");
  featureRadioSlides[featureLevelIndex].setAttribute("checked", "checked");
  


}