﻿(function() {

    window.Stage = {
        
        animations: [],
        
        actors: [],
        
        init: function(canvasId, fps, size, 
                    drawCallback /*optional*/) {
            var self = this,
                canvas = document.getElementById(canvasId);
                
            if (!canvas.getContext) return;
            
            drawCallback = drawCallback || this.draw;

            this.fps = fps;
            this.context = canvas.getContext('2d');
            this.boundCallback = function() { drawCallback.call(self); };
            this.size = size;
            this.isRunning = false;
        },
        
        start: function() {
            if (this.isRunning) return this;
            this.isRunning = true;
            
            if (this.context && this.boundCallback && !this.intervalId) {
                this.intervalId = window.setInterval(this.boundCallback, 1000 / this.fps);
            }
            
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].start();
            }
            
            return this;
        },
        
        stop: function() {
            if (!this.isRunning) return this;
            this.isRunning = false;
            
            if (this.context && this.boundCallback && this.intervalId) {
                window.clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
            
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].stop();
            }
            
            return this;
        },
        
        rewind: function() {
            this.stop();
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].reset(true);
            }
            this.draw();
        },
        
        clear: function() {
            if (!this.context) return this;
            
            this.context.clearRect(0, 0, this.size, this.size);
            
            return this;
        },
        
        draw: function() {
            this.clear();
            
            for (var i = 0, l = this.actors.length; i < l; i++) {
                this.actors[i].draw(this);
            }
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].advanceFrame();
            }
            
            return this;
        }
        
    };

})();