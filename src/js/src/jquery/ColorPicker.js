//= require <jquery-1.4.2>
//= require <jquery.colorpicker/colorpicker>
//= require <jquery.colorpicker/eye>
//= require <jquery.colorpicker/utils>

//= require "../Object.js
//= require "../theater/Color.js

(function($) {

    $.fn.colorPicker = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('ColorPicker'),
                args,
                action;
            
            if (!obj) return $().eq(-1);
            
            action = obj[options];
            
            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }
        
        options = $.extend($.fn.colorPicker.defaults, options);
        
        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        this.$context = el;
                        this.$opacity = this.$context.find(options.opacitySelector);
                        this.selectedColor = Object.create(theater.Color);
                        this.selectedColor.init(0, 0, 255, this.opacity());
                        this.$context.find(options.colorPickerSelector).ColorPicker({
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
                                var color = Object.create(theater.Color),
                                    opacity = $self.data('ColorPicker').opacity();
                                    
                                color.init(rgb.r, rgb.g, rgb.b, opacity);
                                
                                $self.data('ColorPicker').selectedColor = color;
                                $self.find(options.colorPreviewSelector).css('backgroundColor', '#' + hex);
                            }
                        });        
                        
                    },
                    
                    opacity: function() {
                        return parseFloat(this.$opacity.val());
                    },
                    
                    color: function() {
                        return this.selectedColor;
                    },
                    
                    destroy: function() {
                                        
                    }
                };
                
                model.init($self);
                $self.data('ColorPicker', model);           
        
        });
    
    };
    
    $.fn.colorPicker.defaults = {
        colorPickerSelector: '.color-picker',
        opacitySelector: '.opacity',
        colorPreviewSelector: 'div.color-preview'
    };
    
    $.colorPicker = function(color, options) {
        // TODO: Build HTML for ColorPicker, initialise and return
    };

})(jQuery);