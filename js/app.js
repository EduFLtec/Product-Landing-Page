//small / mobile device hamburger nav items
const navList = document.querySelector(".main-nav__list");
const hamburger = document.getElementById("hamburger")
const navToggle = document.getElementById("nav-toggle");

//course_level box items



//Toggle hamburger nav off when one of its links is clicked
navList.onclick = () => {
    let input = hamburger;
    input.checked = false;
};

//course_level box slide controls
let courseSlides = document.querySelector("#levels").children;
//selector is getting the 1st button from html, -fix: remove control instances from each level, make 1 set of controls
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

  for(i = 0; i < courseSlidesAll; i++) {
    courseSlides[i].classList.remove("active");
  }

  courseSlides[courseLevelIndex].classList.add("active");


}







// let levelIndex = 0;
// const courseNext = 0;
// courseNextBtn.addEventListener ("click",
//   document.querySelector(".course_level-active") = "course_level-inactive");




// courseLevel = () => {
//     let i;
//     let slides = document.querySelector(".course_level");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].className = "course_level-inactive";  
//     }
//     courseNextBtn.onclick = () => levelIndex++;
//     courseBackBtn.onclick = () => levelIndex--;
//     if (levelIndex > slides.length) {levelIndex = 1}    
//     slides[levelIndex-1].className = "course_level-active";  
//   }

  