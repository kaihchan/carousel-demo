var template = (function(){

    function slide(value){
        var imgSrc = value.imgSrc;
        var imgTitle = value.imgTitle;
        var link = value.link;

        return '<li class="carousel__element">\
        <a class="carousel__link" href="'+link+'" target="_blank"><img class="carousel__image" src="'+imgSrc+'" title="'+imgTitle+'" /></a>\
        </li>';
    }

    function arrows(){
        return '<i class="material-icons carousel__arrow carousel__arrow--left">chevron_left</i>\
        <i class="material-icons carousel__arrow carousel__arrow--right">chevron_right</i>';
    }

    function dots(count){
        var dom = '';
        for (var i=0 ; i < count; i++) {
            dom += dot(i);
        }
        return '<div class="carousel__dots">'+dom+'</div>';
    }

    function dot(index){
        return '<i class="carousel__dot" index="'+index+'"></i>';
    }

    return {
        slide: slide,
        arrows: arrows,
        dots: dots
    }
})();
