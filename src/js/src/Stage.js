(function() {

    window.Stage = {
        
        init: function(options) {
            var self = this, // capture reference to this in boundCallback closure
                canvas = document.getElementById(options.canvasId);
                
            if (!canvas.getContext) return;

            this.fps = options.fps;
            this.context = document.getElementById(options.canvasId).getContext('2d');
            this.boundCallback = function() { options.drawCallback.call(self); };
            this.size = options.size;
        },
        
        start: function() {
            if (this.context && this.boundCallback && !this.intervalId) {
                this.intervalId = window.setInterval(this.boundCallback, 1000 / this.fps);
            }
        },
        
        stop: function() {
            if (this.context && this.boundCallback && this.intervalId) {
                window.clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
        },
        
        clear: function() {
            if (!this.context) return;
            this.context.clearRect(0, 0, this.size, this.size);
        }
        
    };

})();