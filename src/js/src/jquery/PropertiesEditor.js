//= require <jquery-1.4.2>

//= require "StyleEditor"

(function($) {

    $.fn.propertiesEditor = function(options) {
        var $self = this,
            $list = $('<ul></ul>'),
            $title = $('<h3></h3>').addClass(options.titleClass),
            $label,
            $item,
            $edit,
            $styleEditor;
        
        options = $.extend($.fn.propertiesEditor.defaults, options);
        
        if (!options.model) return this;
        
        this.data('PropertiesEditor', options.model);
        
        this.empty()
        
        $title.appendTo(this).html(options.title);
        for(var prop in options.model) {
        
            var propType = typeof options.model[prop]
                propName = prop;
            
            switch (propType) {
                case 'function':
                    break;
                case 'object':
                    console.log('creating styleeditor for ' + propName);
                    $item = $('<li></li>').css('clear', 'both');
                    $styleEditor = $.styleEditor(options.model[propName], {});
                    $item.append($styleEditor).appendTo($list);
                    
                    $styleEditor.bind('StyleChanged.PropertiesEditor', function(event, data) {
                        options.model['style'] = data.newStyle;
                        console.log(options.model);
                        $.isFunction(options.propertyChange) && options.propertyChange.call($self);
                    });
                    break;
                default:
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
                    
                    $edit.blur(function() {
                        var oldValue = options.model[this.name],
                            newValue = $(this).val();
                            
                        if (newValue != oldValue) {
                            if (typeof oldValue === 'number') newValue = parseInt(newValue);
                            options.model[this.name] = newValue;
                        }
                        
                        $.isFunction(options.propertyChange) && options.propertyChange.call($self);
                    });
                                        
                    break;
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