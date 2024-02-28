document.querySelector('.select').onchange = function() {
    var value = this.value;

    if(this.value == 'week'){
        window.location.href = "https://leonidas-css-grid-layout-interfaces.edgardoponce.com/calendar/index.html"
    }else{
        window.location.href = "https://leonidas-css-grid-layout-interfaces.edgardoponce.com/calendar/day.html"
    }

};