//= require <jquery-1.4.2>
//= require "../Object"
//= require "../Color"

(function($) {

    $.fn.colorPicker = function() {

        return this.each(function() {

            var $self = $(this),
                color = selectColor($self.children('li.selected').get());

            $self.data('SelectedColor', color);
            
            $self.children('li').click(function() {
                $self.children('li').removeClass('selected');
                $(this).toggleClass('selected');
                $self.data('SelectedColor', selectColor(this));
            });        
            
            function selectColor(el) {
                var result = Object.create(Color),
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
    
})(jQuery);