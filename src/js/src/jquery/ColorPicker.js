//= require <jquery-1.4.2>
//= require "../Object"
//= require "../theater/Color"

(function($) {

    $.fn.colorPicker = function(options) {

        options = $.extend($.fn.colorPicker.defaults, options);

        return this.each(function() {

            var $self = $(this),
                color = selectColor($self.children(options.colorElementSelector + '.' + options.selectedClass).get());

            $self.data('SelectedColor', color);
            
            $self.children(options.colorElementSelector).bind('click.colorPicker', function() {
                $self.children('li').removeClass(options.selectedClass);
                $(this).toggleClass(options.selectedClass);
                $self.data('SelectedColor', selectColor(this));
            });        
            
            function selectColor(el) {
                var result = Object.create(theater.Color),
                    $el = $(el);
                    
                if ($el.hasClass('cyan')) {
                    result.init(25, 240, 252, 1.0);
                } else if ($el.hasClass('lime')) {
                    result.init(201, 255, 32);
                } else if ($el.hasClass('orange')) {
                    result.init(252, 90, 0, 1.0);
                } else if ($el.hasClass('purple')) {
                    result.init(243, 0, 252, 1.0);
                }
                
                return result;
            }
            
        });
    };
    
    $.fn.colorPicker.defaults = {
        colorElementSelector: 'li',
        selectedClass: 'selected'
    };
    
})(jQuery);