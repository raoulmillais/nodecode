//= require "Easing"

(function() {
    
    window.Animation = {
        
        init: function(stage, duration, startValue, 
                       endValue, targetObject, targetProperty, 
                       revertOnStop /*optional*/, easingFunction /*optional */) {
            if (!(targetProperty in targetObject)) throw new Error("targetProperty is not a property of targetObject");
            this.originalValue = targetObject[targetProperty];
            this.stage = stage;
            this.duration = duration;
            this.startValue = startValue;
            this.endValue = endValue;
            this.targetObject = targetObject;
            this.targetProperty = targetProperty;
            this.totalFrames = stage.fps * duration / 1000;
            this.currentFrame = 0;
            this.isRunning = false;
            this.revertOnStop = revertOnStop || false;
            this.easingFunction = easingFunction || Easing.linear;
        },
        
        start: function() {
            if (this.isRunning) return;
            this.isRunning = true;
            this.targetObject[this.targetProperty] = this.startValue;
        },
        
        stop: function() {
            if (!this.isRunning) return;
            this.isRunning = false;
        },
        
        reset: function() {
            if (this.isRunning) this.stop();
            this.targetObject[this.targetProperty] = this.originalValue;
            this.currentFrame = 0;
        },
        
        advanceFrame: function() {
            if (!this.isRunning) return;
            if (this.currentFrame == this.totalFrames) {
                this.isRunning = false;
                if (this.revertOnStop) {
                    this.targetObject[this.targetProperty] = this.originalValue;
                }
            } else {
                this.targetObject[this.targetProperty] = this.easingFunction(this.currentFrame, this.startValue, this.endValue, this.totalFrames);
                this.currentFrame++;
            }
        }
    }
    
})();