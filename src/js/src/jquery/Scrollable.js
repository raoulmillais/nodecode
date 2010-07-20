//= require <jquery-1.4.2>
//= require <jquery.mousewheel>
//= require <jScrollPane-1.2.3>

(function($) {

    $.fn.scrollable = function(options) {
        var self = this,
            delayedInitId;
        
        options = $.extend($.fn.scrollable.defaults, options);
        
        if (options.reInitialiseOnResize) {
            $(window).resize(function() {
                var ctx = self;
                
                window.clearTimeout(delayedInitId);
                delayedInitId = window.setTimeout(function() {
                    initialiseJScrollPane(self);
                }, 10)
            });
        }
        return initialiseJScrollPane(self);
        
        function initialiseJScrollPane(ctx) {
            return ctx.each(function() {
                var $self = $(this);
                console.log('  initialising scrollable');
                console.log(this);
                $self.jScrollPane({
                    scrollbarWidth: 5,
                    scrollbarMargin: 15,
                    showArrows: false
                });
                //$self.parent().css('height', $self.height());
            });
        }
    };
    
    $.fn.scrollable.defaults = {
        reInitialiseOnResize: false
    };

})(jQuery);