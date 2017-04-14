/**
 * References:
 * This solution borrows its idea from
 * https://www.grobmeier.de/bootstrap-tabs-with-angular-js-25112012.html
 * http://stackoverflow.com/questions/26844361/bootstrap-tabs-with-angularjs
 */
app.directive('showDialog', function () {
    return {
        link: function (scope, element, attrs) {
            jQuery(element).on('click', function ($event) {
                jQuery(element.attr('data-target')).modal('show');
            });
        }
    };
});