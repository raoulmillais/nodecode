//= require "init"

(function() {

    theater.Easing = {
        
        linear: function(time, startValue, endValue, duration) {
            return endValue * time / duration + startValue;
        },
        
        easeInQuad: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue * time * time + startValue;
        },
        
        easeOutQuad: function (time, startValue, endValue, duration) {
            time /= duration;
            return -endValue * time*(time-2) + startValue;
        },
        
        easeInOutQuad: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time + startValue;
            time--;
            return -endValue/2 * (time*(time-2) - 1) + startValue;
        },
        
        easeInCubic: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time + startValue;
        },
        
        easeOutCubic: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue*(time*time*time + 1) + startValue;
        },
        
        easeInOutCubic: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time*time + startValue;
            time -= 2;
            return endValue/2*(time*time*time + 2) + startValue;
        },
        
        easeInQuart: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time*time + startValue;
        },
        
        easeOutQuart: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return -endValue * (time*time*time*time - 1) + startValue;
        },
        
        easeInOutQuart: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time*time*time + startValue;
            time -= 2;
            return -endValue/2 * (time*time*time*time - 2) + startValue;
        },
        
        easeInQuint: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time*time*time + startValue;
        },
        
        easeOutQuint: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue*(time*time*time*time*time + 1) + startValue;
        },
        
        easeInSine: function (time, startValue, endValue, duration) {
            return -endValue * Math.cos(time/duration * (Math.PI/2)) + endValue + startValue;
        },
        
        easeOutSine: function (time, startValue, endValue, duration) {
            return endValue * Math.sin(time/duration * (Math.PI/2)) + startValue;
        },
        
        easeInOutSine: function (time, startValue, endValue, duration) {
            return -endValue/2 * (Math.cos(Math.PI*time/duration) - 1) + startValue;
        },
        
        easeInExpo: function (time, startValue, endValue, duration) {
            return endValue * Math.pow( 2, 10 * (time/duration - 1) ) + startValue;
        },
        
        easeOutExpo: function (time, startValue, endValue, duration) {
            return endValue * ( -Math.pow( 2, -10 * time/duration ) + 1 ) + startValue;
        },
        
        easeInOutExpo: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2 * Math.pow( 2, 10 * (time - 1) ) + startValue;
            time--;
            return endValue/2 * ( -Math.pow( 2, -10 * time) + 2 ) + startValue;
        },
        
        easeInCirc: function (time, startValue, endValue, duration) {
            time /= duration;
            return -endValue * (Math.sqrt(1 - time*time) - 1) + startValue;
        },
        
        easeOutCirc: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue * Math.sqrt(1 - time*time) + startValue;
        },
        
        easeInOutCirc: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return -endValue/2 * (Math.sqrt(1 - time*time) - 1) + startValue;
            time -= 2;
            return endValue/2 * (Math.sqrt(1 - time*time) + 1) + startValue;
        }
        
    }
    
})();