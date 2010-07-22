//= require <jquery-1.4.2>
//= require <jquery.colorpicker/colorpicker>
//= require <jquery.colorpicker/eye>
//= require <jquery.colorpicker/utils>

//= require "../Object.js
//= require "../theater/Color.js

(function($) {

    $.fn.colorPicker = function(options) {
    
        options = $.extend($.fn.colorPicker.defaults, options);
        
        return this.each(function() {
            var selectedColor = Object.create(theater.Color),
                $self = $(this);
            
            selectedColor.init(0, 0, 255, 1.0);
            $self.data('SelectedColor', selectedColor);
            $(this).ColorPicker({
                color: '#0000ff',
                onShow: function (el) {
                    $(el).fadeIn('fast');
                    return false;
                },
                onHide: function (el) {
                    $(el).fadeOut('fast');
                    return false;
                },
                onChange: function (hsb, hex, rgb) {
                    var color = Object.create(theater.Color);
                    color.init(rgb.r, rgb.g, rgb.b, 1.0);
                    
                    $self.data('SelectedColor', color);
                    $self.find('div').css('backgroundColor', '#' + hex);
                }
            });        
        
        });
    
    };
    
    $.fn.colorPicker.defaults = {
    
    };

})(jQuery);