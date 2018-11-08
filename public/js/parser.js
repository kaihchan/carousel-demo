var parser = (function(){

    function parseSlides(slides){
        return slides.map(function(element, index){
            return parseSlide(element);
        });
    }

    function parseSlide(slide){
        return {
            imgSrc: slide.imgSrc || '',
            imgTitle: slide.imgTitle || '',
            link: slide.link || '',
        }
    }

    return {
        parseSlides: parseSlides,
        parseSlide: parseSlide,
    }
})();
