//= require <jquery-1.4.2>
//= require <chain>

(function($) {
    
    $.fn.projectViewer = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('ProjectViewer'),
                args,
                action;
            
            if (!obj) return $().eq(-1);
            
            action = obj[options];
            
            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);
                console.log('args: ' + args);

                action.apply(obj, args);
                return this;
            } else {
                return $().eq(-1);
            }
        }
        
        options = $.extend($.fn.projectViewer.defaults, options);
        
        return this.each(function() {
            var $self = $(this);
            
            $self.items([]).chain(function() {
                var model = this.item();

                $(this).bind('click.projectViewer', function() {
                    var $clicked = $(this);
                    $self.find('li').removeClass(options.selectedClass);
                    $clicked.toggleClass(options.selectedClass);
                    
                    $.isFunction(options.selectionChange) && options.selectionChange.call($self, model)
                });
            });
            
            $self.data('ProjectViewer', {
                $container: $self,
                
                add: function(item) {
                    console.log('Item added: ' + item);
                    return this.$container.items('add', item);
                },
                
                destroy: function() {
                    this.$container.children().unbind('.projectViewer');
                    return $().eq(-1);
                }
            });
        });
    };

    $.fn.projectViewer.defaults = { 
        selectedClass: 'selected',
        
        selectionChange: null
    };

})(jQuery);