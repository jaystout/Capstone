var MODEL = (function (){
//represents getting information from the database
var _getView = function(viewName){
    $.get(`views/${viewName}.html`, function (data){ //template literal is backtick, `, to the left of 1 key.
        $("#app").html(data);
    });
};


return{
    getView: _getView,
}
})();

