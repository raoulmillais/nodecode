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
                        var self = this;
                        
                        this.$context = el;
                        this.$strokeColorPicker = this.$context.find(options.strokeColorSelector);
                        this.$fillColorPicker = this.$context.find(options.fillColorSelector);
                        this.$strokeWeight = this.$context.find(options.strokeWeightSelector);
                        
                        if (!this.$strokeColorPicker.data('ColorPicker'))
                            this.$strokeColorPicker.colorPicker();
                        
                        this.$strokeColorPicker.bind('ColorChanged', function(event, data) {
                            self.triggerStyleChanged.call(self);
                        });

                        if (!this.$fillColorPicker.data('ColorPicker'))
                            this.$fillColorPicker.colorPicker();

                        this.$fillColorPicker.bind('ColorChanged.StyleEditor', function() {
                            self.triggerStyleChanged.call(self);
                        });
                        
                        this.$strokeWeight.bind('change.StyleEditor', function() {
                            self.triggerStyleChanged.call(self);
                        });
                    },
                    
                    triggerStyleChanged: function() {
                        this.$context.trigger('StyleChanged', { newStyle: this.style() });
                    },
                    
                    style: function() {
                        var selectedStyle = {};
                        
                        selectedStyle.stroke = this.$strokeColorPicker.colorPicker('color');
                        selectedStyle.fill = this.$fillColorPicker.colorPicker('color');
                        selectedStyle.strokeWeight = parseFloat(this.$strokeWeight.val());

                        return selectedStyle;
                    },
                    
                    destroy: function() {
                        this.$strokeColorPicker.unbind('.StyleEditor');
                        this.$fillColorPicker.unbind('.StyleEditor');
                        this.$strokeWeight.unbind('.StyleEditor');
                        
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
    
    // <div class="style-editor">
        // <div id="stroke-color" class="stroke rgba-picker">
            // <span>Stroke</span>
            // <div class="color-picker"><div class="color-preview" style="background-color: #0000ff"></div></div>
            // <input id="stroke-opacity" class="property-value opacity" name="stroke-opacity" type="text" value="1" />
        // </div>
        // <div id="fill-color" class="fill rgba-picker">
            // <span>Fill</span>
            // <div class="color-picker"><div class="color-preview" style="background-color: #0000ff"></div></div>
            // <input id="fill-opacity" class="property-value opacity" name="fill-opacity" type="text" value="0.5" />
        // </div>
        // <p>
            // <label for="stroke-weight" class="property-label">Stroke Weight</label>
            // <input id="stroke-weight" class="property-value stroke-weight" name="stroke-weight" type="text" value="3" />
        // </p>
    // </div>
    
    
    $.styleEditor = function(style, options) {
        options = $.extend($.fn.styleEditor.defaults, options);
        
        var $container =  $('<div></div>')
                            .addClass('style-editor'),
            $strokeColor = $.colorPicker(style.stroke, { title: 'Stroke' })
                            .addClass('stroke'),
            $fillColor = $.colorPicker(style.fill, { title: 'Fill' })
                            .addClass('fill'),
            $strokeWeightContainer = $('<p class="stroke-weight-container"></p>'),
            $strokeWeightLabel = $('<span></span>')
                                    .addClass('property-label')
                                    .text('Weight'),
            $strokeWeight = $('<input></input>')
                            .addClass('stroke-weight')
                            .addClass('property-value')
                            .attr('type', 'text')
                            .val(style.strokeWeight);
                            
        return $container
                .append($strokeColor)
                .append($fillColor)
                .append($strokeWeightContainer
                        .append($strokeWeightLabel)
                        .append($strokeWeight))
                .styleEditor(options);;
    };

})(jQuery);