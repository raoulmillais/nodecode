//= require <jquery-1.4.2>

(function($) {

    $.fn.propertiesEditor = function(options) {
        var $self = this,
            $list = $('<ul></ul>'),
            $title = $('<h3></h3>').addClass(options.titleClass),
            $label,
            $item,
            $edit;
        
        options = $.extend($.fn.propertiesEditor.defaults, options);
        
        if (!options.model) return this;
        
        this.data('PropertiesEditor', options.model);
        
        this.empty()
        
        $title.appendTo(this).html(options.title);
        for(var prop in options.model) {
            if (typeof options.model[prop] !== 'function') {
                $edit = $('<input></input>')
                    .addClass(options.propertyValueClass)
                    .attr('type', 'text')
                    .attr('name', prop)
                    .attr('value', options.model[prop]);
                
                if (typeof options.model[prop] === 'object')
                    $edit.attr('readonly', 'true');
                
                $label = $('<label></labell>').attr('for', prop).addClass(options.propertyLabelClass).text(prop);
                $item = $('<li></li>').css('clear', 'both');
                $label.appendTo($item);
                $edit.appendTo($item);
                $item.appendTo($list);
                
                if (typeof options.model[prop] !== 'object') {
                    $edit.blur(function() {
                        var oldValue = options.model[this.name],
                            newValue = $(this).val();
                            
                        if (newValue != oldValue) {
                            console.log('Changing ' + this.name + ' to ' + newValue);
                            if (typeof oldValue === 'number') newValue = parseInt(newValue);
                            options.model[this.name] = newValue;
                        }
                        
                        $.isFunction(options.propertyChange) && options.propertyChange.call($self);
                    });
                }
            }
        }
        
        $list.appendTo(this);
        
        return this;
    }

    $.fn.propertiesEditor.defaults = {
        title: 'Properties',
        titleClass: 'name',
        propertyLabelClass: 'property-label',
        propertyValueClass: 'property-value',
        propertyChange: null
    }
    
    
})(jQuery);