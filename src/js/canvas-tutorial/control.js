(function($) {
    function createRGBString(red, green, blue) {
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
    
    function createRGBAString(red, green, blue, alpha) {
        return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    }

    $(document).ready(function() {
        var ctx = document.getElementById('tile-canvas').getContext('2d'),
            limeGreen = createRGBString(201, 255, 32),
            translucentCyan = createRGBAString(25, 240, 252, 0.5);
        
        $('#clear-canvas').click(function() {
            demo.clear(ctx);
        });
        
        $('#draw-triangles').click(function() {
            demo.clear(ctx);
            demo.drawTriangles(ctx, translucentCyan, limeGreen);
        });

        $('#draw-arcs').click(function() {
            demo.clear(ctx);
            demo.drawArcs(ctx, limeGreen, translucentCyan);
        });
        
        $('#draw-squares').click(function() {
            demo.clear(ctx);
            demo.drawOverlappingSquares(ctx, limeGreen, translucentCyan);
        });

        $('#draw-face').click(function() {
            demo.clear(ctx);
            demo.drawFace(ctx, translucentCyan);
        });
        
        $('#draw-rounded-rectangle').click(function() {
            demo.clear(ctx);
            demo.roundedRectangle(ctx, limeGreen, 25, 25, 200, 100, 10);
        });
    });


})(jQuery);