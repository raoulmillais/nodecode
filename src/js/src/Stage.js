(function() {

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
        },
        
        start: function() {
            if (this.context && this.boundCallback && !this.intervalId) {
                this.intervalId = window.setInterval(this.boundCallback, 1000 / this.fps);
            }
            
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].start();
            }
            
            return this;
        },
        
        stop: function() {
            if (this.context && this.boundCallback && this.intervalId) {
                window.clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
            
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].stop();
            }
            
            return this;
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