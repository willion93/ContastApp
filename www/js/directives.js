angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('autoListDivider', function($timeout) {
  var lastDivideKey = "";

  return {
    link: function(scope, element, attrs) {
      var key = attrs.autoListDividerValue;

      var defaultDivideFunction = function(k){
        return k.slice( 0, 1 ).toUpperCase();
      };

      var doDivide = function(){
        var divideFunction = scope.$apply(attrs.autoListDividerFunction) || defaultDivideFunction;
        var divideKey = divideFunction(key);

        if(divideKey != lastDivideKey) {
          var contentTr = angular.element("<div class='item item-divider'" +"id"+"="+divideKey +">"+divideKey+"</div>");
          //console.log(contentTr);
          element[0].parentNode.insertBefore(contentTr[0], element[0]);

        }

        lastDivideKey = divideKey;
      };

      $timeout(doDivide,0)
    }
  }
})


  .directive('scollView', [function(){
    return{
      link: function(scope, element, attrs) {
        $('#C').scrollIntoView();
      }
    }

  }])
