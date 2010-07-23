//= require "init"
//= require "Easing"

(function() {
    
    theater.Animation = {
        
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
            
            return this;
        },
        
        start: function() {
            if (this.isRunning) return this;
            
            this.isRunning = true;
            if (this.currentFrame === 0) {
                this.originalValue = this.targetObject[this.targetProperty];
                this.targetObject[this.targetProperty] = this.startValue;
            }
            
            return this;
        },
        
        stop: function() {
            if (!this.isRunning) return this;
            
            this.isRunning = false;
            
            return this;
        },
        
        reset: function(rewind) {
            if (this.isRunning) this.stop();
            
            this.targetObject[this.targetProperty] = (rewind) ? this.startValue : this.originalValue;
            this.currentFrame = 0;
            
            return this;
        },
        
        advanceFrame: function() {
            if (!this.isRunning) return this;
            
            if (this.currentFrame == this.totalFrames) {
                this.isRunning = false;
                if (this.revertOnStop) {
                    this.targetObject[this.targetProperty] = this.originalValue;
                }
            } else {
                this.targetObject[this.targetProperty] = this.easingFunction(this.currentFrame, this.startValue, this.endValue, this.totalFrames);
                this.currentFrame++;
            }
            
            return this;
        }
    }
    
})();