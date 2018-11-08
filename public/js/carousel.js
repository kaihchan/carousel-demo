var carousel = (function(document) {
    var self;
    var slideCount = 0;
    var activeSlider = 0;
    var autoDuration = 5000;
    var timerRef;

    function init(element, count) {
        self = element;
        slideCount = count;

        if (slideCount && slideCount > 1){
            toSlide(activeSlider);
            setMouseOverListener();
            setMouseOutListener();
            setArrowsListener();
            setDotsListener();
            setAutoPlay(autoDuration);
        }
    }

    function setAutoPlay(duration) {
        timerRef = setInterval(function(){
            toSlide(getNextSlideIndex());
        }, duration);
    }
    function stopAutoPlay() {
        clearInterval(timerRef);
    }

    function setMouseOverListener() {
        self.addEventListener('mouseover', function(){
            stopAutoPlay();
        });
    }
    function setMouseOutListener() {
        self.addEventListener('mouseout', function(){
            setAutoPlay(autoDuration);
        });
    }
    function setArrowsListener() {
        self.querySelector(".carousel__arrow--left").addEventListener('click', function(){
            backwardSlide();
        });
        self.querySelector(".carousel__arrow--right").addEventListener('click', function(){
            forwardSlide();
        });
    }
    function setDotsListener(){
        var nodeList = self.querySelectorAll(".carousel__dot");
        for(var index = 0; index < nodeList.length ; index++) {
            nodeList[index].addEventListener('click', function(event){
                var index = parseInt(event.currentTarget.getAttribute("index"));
                if (index != activeSlider) {
                    toSlide(index);
                }
            });
        }
        // nodeList.forEach not support in IE
        // self.querySelectorAll(".carousel__dot").forEach(function(element) {
        //     element.addEventListener('click', function(event){
        //         toSlide(parseInt(event.currentTarget.getAttribute("index")));
        //     });
        // });
    }

    function getPrevSlideIndex() {
        return activeSlider - 1 < 0 ? slideCount - 1 : activeSlider - 1;
    }

    function getNextSlideIndex() {
        return activeSlider + 1 === slideCount ? 0 : activeSlider + 1;
    }

    function toSlide(index) {
        var currentSlide = self.querySelector(".carousel__element.active");
        if (currentSlide) {
            toggleActive(currentSlide);
        }
        var currentDot = self.querySelector(".carousel__dot.active");
        if (currentDot) {
            toggleActive(currentDot);
        }

        var nextSlide = self.querySelectorAll(".carousel__element")[index];
        var nextDot = self.querySelectorAll(".carousel__dot")[index];
        toggleActive(nextSlide);
        toggleActive(nextDot);

        activeSlider = index;
    }

    function toggleActive(element) {
        element.classList.toggle("active");
    }

    function forwardSlide() {
        toSlide(getNextSlideIndex());
    }

    function backwardSlide() {
        toSlide(getPrevSlideIndex());
    }

    return {
        init: init
    }
})(document);
