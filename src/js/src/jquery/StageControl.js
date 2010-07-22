//= require <jquery-1.4.2>
//= require "../theater/Stage"

//= require "timer"

(function($) {

    $.fn.stageControl = function(options) {
        
        options = $.extend($.fn.stageControl.defaults, options);
        if (!options.stage) return $().eq(-1);
        
        return this.each(function() {
            var $self = $(this),
                $timer = $self.find(options.timerSelector);
            
            $timer.timer();
            options.stage.onDraw = function() {
                $timer.timer('update', this.time);
            };
            
            $self.find(options.startSelector).click(function() { 
                stage.start(); 
                $timer.timer('start');
            });
            $self.find(options.stopSelector).click(function() { 
                stage.stop(); 
                $timer.timer('stop');
            });
            $self.find(options.rewindSelector).click(function() { 
                stage.rewind(); 
                $timer.timer('rewind');
            });
            $self.find(options.refreshSelector).click(function() {
                stage.draw();
            });
        });
        
    };
    
    $.fn.stageControl.defaults = {
        timerSelector: '.timer',
        startSelector: '.start',
        stopSelector: '.stop',
        rewindSelector: '.rewind',
        refreshSelector: '.refresh'
    };

})(jQuery);