(function(document){
    api.fetchData()
    .then(function(data){
        var res = data.result || [];
        var dom = parser.parseSlides(res).map(function(value, index){
            return template.slide(value);
        });

        var carouselEle = document.getElementById('start');
        carouselEle.innerHTML = dom.join('') + template.arrows() + template.dots(res.length);
        carousel.init(carouselEle, res.length);
    })
    .catch(function(reason){
        console.log(reason);
    });
})(document);
