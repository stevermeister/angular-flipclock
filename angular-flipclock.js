angular.module('angular-flipclock', [])
  .directive('flipClock', function() {
    return {
      replace: true,
      template: '<div></div>',
      restrict: 'E',
      link: function(scope, element, attr) {
        new FlipClock(element, {});
      }
    }
  });