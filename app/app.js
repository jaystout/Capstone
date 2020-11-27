function initListeners(){
     $("#nav nav a").click(function(e){
          var btnID = $(this).attr('ref');
          MODEL.getView(btnID);
          //console.log(btnID);
      });
 }
function initListenersApp(){
    $(document).on('click', "#portfolio .work", function(e){
         var btnID = $(this).attr('ref');
         MODEL.getView(btnID);
         console.log(btnID);
         return false;
     });
}

function initSite() {
    $.get('views/nav.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get("views/home.html", function (data){
        $("#app").html(data);
        initListenersApp();
    });

    $.get("views/footer.html", function (data){
        $("#footer").html(data);
    });
}

$(document).ready(function(){
    initSite();


});


//sticky header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 130) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});




