(function() {

    var demo = window.demo = {
        twoPi: Math.PI * 2,
        
        clear: function(ctx) {
            ctx.clearRect(0, 0, 400, 400);
        },
    
        drawTriangles: function(ctx, firstColor, secondColor) {
            ctx.fillStyle = firstColor;
            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(105, 25);
            ctx.lineTo(25, 105);
            ctx.fill();
            
            ctx.strokeStyle = secondColor;
            ctx.beginPath();
            ctx.moveTo(125, 125);
            ctx.lineTo(125, 45);
            ctx.lineTo(45, 125);
            ctx.closePath();
            ctx.stroke();
        },
        
        drawArcs: function(ctx, strokeColor, fillColor) {
            var x, y, radius, startAngle, endAngle, antiClockwise
                pi = Math.PI;
            
            ctx.strokeStyle = strokeColor;
            ctx.fillStyle = fillColor;
            
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.beginPath();
                    x = 25 + j * 50;
                    y = 25 + i * 50;
                    radius = 20;
                    startAngle = 0;
                    endAngle = pi + (pi * j) / 2;;
                    antiClockwise = (i % 2 == 0) ? false : true;
                    
                    ctx.arc(x, y, radius, startAngle, endAngle, antiClockwise);
                    
                    if (i > 1) {
                        ctx.fill();
                    } else {
                        ctx.stroke();
                    }
                }
            }
        },
        
        drawFace: function(ctx, color) {
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, this.twoPi, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, this.twoPi, true); // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, this.twoPi, true); // Right eye
            ctx.stroke();
        },
        
        drawOverlappingSquares: function(ctx, firstColor, secondColor) {
            ctx.fillStyle = firstColor;
            ctx.fillRect(10, 10, 55, 50);
            
            ctx.fillStyle = secondColor;
            ctx.fillRect(30, 30, 55, 50);
        },
        
        roundedRectangle: function (ctx, color, x, y, width, height, radius) {
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(width - radius, y);
            ctx.quadraticCurveTo(width, y, width, y + radius);
            ctx.lineTo(width, height - radius);
            ctx.quadraticCurveTo(width, height, width - radius, height);
            ctx.lineTo(x + radius, height);
            ctx.quadraticCurveTo(x, height, x, height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.stroke();
        }
    };
    
})();