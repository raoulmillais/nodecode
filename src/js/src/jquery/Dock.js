//= require <jquery-1.4.2>
//= require <jquery.mousewheel>
//= require <jScrollPane-1.2.3>

(function($) {

    $.fn.dock = function() {
    
        return this.each(function() {
            var $self = $(this);
            
            $self.find('.content').jScrollPane({
                scrollbarWidth: 5,
                scrollbarMargin: 5,
                showArrows: false
            });
            
            $self.data('Dock', { palettes: $self.find('.palette') });      
        });
    
    }

})(jQuery);