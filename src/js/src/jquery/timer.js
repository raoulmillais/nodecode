//= require <jquery-1.4.2>
//= require <jquery.color>

(function($) {

    $.fn.timer = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('timer'),
                args,
                action;
            
            if (!obj) return $().eq(-1);
            
            action = obj[options];
            
            if (typeof action === 'function') {
                console.log('timer action: ' +  options);
                args = Array.prototype.slice.call(arguments, 1);
                console.log('args: ' + args);

                action.apply(obj, args);
                return this;
            } else {
                return $().eq(-1);
            }
        }
        
        
        options = $.extend($.fn.timer.defaults, options);
        
        return this.each(function() {
            var $self = $(this),
                $minutes = $self.find(options.minutesSelector),
                $seconds = $self.find(options.secondsSelector),
                $milliSeconds = $self.find(options.milliSecondsSelector),
                originalColor = $self.css('color');
            
            $self.data('timer', {
                $seconds: $seconds,
                $minutes: $minutes,
                $milliSeconds: $milliSeconds,
                originalColor: originalColor,
                
                update: function(newMilliSeconds) {
                    console.log('updating: ' + newMilliseconds);
                    var newMinutes = Math.floor(newMilliSeconds / 60000),
                        newSeconds = Math.floor((newMilliSeconds - (newMinutes * 60000)) / 1000),
                        newMilliseconds = newMilliSeconds - ((newSeconds * 1000) + (newMinutes * 60000));
                    
                    this.$minutes.text(newMinutes);
                    this.$seconds.text(newSeconds);
                    this.$milliSeconds.text(newMilliseconds);
                    
                    return $self;
                },
                
                start: function() {
                    return $self.stop().animate({ 'color': '#fff' }, 'fast');
                },
                
                stop: function() {
                    return $self.stop().animate({ 'color': this.originalColor }, 'fast');
                },
                
                rewind: function() {
                    this.update(0);
                    return this.stop();
                }
            });
        
        });
        
    };
    
    $.fn.timer.defaults = {
        minutesSelector: '.minutes',
        secondsSelector: '.seconds',
        milliSecondsSelector: '.milliseconds',
        startedClass: 'started'
    }

})(jQuery);