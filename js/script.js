
// course 
function showCourse(id, courseName) {

    var cName = document.getElementById(courseName);

    var courseContainer = document.getElementsByClassName("eligibilityContainer");
    var courseName = document.getElementsByClassName("courseName");


    for (var i = 0; i < courseContainer.length; i++) {
        courseContainer[i].classList.remove("d-block");
        courseContainer[i].classList.add("d-none");
        document.getElementById(id).classList.add("d-block");
    }

    for (var i = 0; i < courseName.length; i++) {
        courseName[i].classList.remove("activeCourse");
        cName.classList.add("activeCourse");
    }

}

// testimonial slider




$('.studentFeedbackSlider').slick({
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                arrows:false,
            }
        }
    ]
});