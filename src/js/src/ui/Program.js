//= require <jquery-1.4.2>
//= require <chain.js>
//= require "../Stage"
//= require "../Animation"
//= require "../Color"
//= require "../Circle"

//= require "../ColorPicker"
//= require "../ShapeSelector"

(function() {
    
    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $actors = $('#actors'),
            $strokeColorPicker = $('#control-stroke-colour'),
            $shapeSelector = $('#shapes'),
            stage = Object.create(Stage);
            
        stage.init('tile-canvas', 20, 400, function() {
            var newMinutes = Math.floor(this.time / 60000),
                newSeconds = Math.floor((this.time - (newMinutes * 60000)) / 1000),
                newMilliseconds = this.time - ((newSeconds * 1000) + (newMinutes * 60000));
            
            $('#stage-time').val(newMinutes + 'm ' + newSeconds + 's ' + newMilliseconds + 'ms');
        });
        
        window.stage = stage;
        
        $('#actors').items([]).chain(function() {
            var model = this.item();

            $(this).click(function() {
                var $self = $(this);
                $('#actors li').removeClass('selected');
                $self.toggleClass('selected');
                $('#properties').propertiesEditor(model.obj);
            });
        });
        
        
        $canvas.click(function(evt) {
            var newColor = $strokeColorPicker.data('SelectedColor'),
                selectedShape = $shapeSelector.data('SelectedShape'),
                newShape,
                newShapeAnimation = Object.create(Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            
            // create a new ball and attach an animation
            switch (selectedShape) {
                case 'Circle':
                    newShape = Object.create(Circle);
                    newShape.init(newX, newY, 50, newColor);
                    break;
                case 'Rectangle':
                    newShape = Object.create(Rectangle);
                    newShape.init(newX, newY, 75, 50, newColor);
                    break;
            }
           
            
            newShapeAnimation.init(stage, 2000, newX, newX + 300, newShape, 'x', false, Easing.easeOutSine); 

            // add the new ball to the actors pallette
            $actors.items('add', { name: selectedShape, obj: newShape }).chain();
            
            // put the ball on the stage
            stage.actors.push(newShape);
            stage.animations.push(newShapeAnimation);
            newShape.draw(stage);
            if (stage.isRunning) newShapeAnimation.start();
        });
        
       
        $strokeColorPicker.colorPicker();
        $shapeSelector.shapeSelector();
        $('#stage-start').click(function() { stage.start(); });
        $('#stage-stop').click(function() { stage.stop(); });
        $('#stage-rewind').click(function() { 
            stage.rewind(); 
            $('#stage-time').val('0m 0s 0ms');
        });
        $('#stage-refresh').click(function() { stage.draw(); });
    });
})();