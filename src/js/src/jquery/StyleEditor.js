//= require <jquery-1.4.2>

//= require "ColorPicker"

(function($) {

    $.fn.styleEditor = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('StyleEditor'),
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
        
        options = $.extend($.fn.styleEditor.defaults, options);

        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        this.$context = el;
                        this.$strokeColorPicker = this.$context.find(options.strokeColorSelector).colorPicker();
                        this.$fillColorPicker = this.$context.find(options.fillColorSelector).colorPicker();
                        this.$strokeWeight = this.$context.find(options.strokeWeightSelector);
                    },
                    
                    style: function() {
                        var selectedStyle = {};
                        
                        selectedStyle.stroke = this.$strokeColorPicker.colorPicker('color');
                        selectedStyle.fill = this.$fillColorPicker.colorPicker('color');
                        selectedStyle.strokeWeight = parseFloat(this.$strokeWeight.val());

                        return selectedStyle;
                    },
                    
                    destroy: function() {
                        this.$strokeColorPicker.colorPicker('destroy');
                        this.$fillColorPicker.colorPicker('destroy');
                    }
                };
            
            $self.data('StyleEditor', model);
            model.init($self);
        });
        
    };
    
    $.fn.styleEditor.defaults = {
        strokeColorSelector: '.stroke',
        fillColorSelector: '.fill',
        strokeWeightSelector: '.stroke-weight'
    };
    
    $.styleEditor = function(style, options) {
        // TODO: build html for StyleEditor initialise and return
    };

})(jQuery);