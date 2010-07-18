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
            $strokeColorPicker = $('#stroke-color'),
            $fillColorPicker = $('#fill-color'),
            $shapeSelector = $('#shapes'),
            stage = Object.create(Stage),
            redrawStage;
            
        stage.init('tile-canvas', 20, 400, function() {
            var newMinutes = Math.floor(this.time / 60000),
                newSeconds = Math.floor((this.time - (newMinutes * 60000)) / 1000),
                newMilliseconds = this.time - ((newSeconds * 1000) + (newMinutes * 60000));
            
            $('#stage-time').val(newMinutes + 'm ' + newSeconds + 's ' + newMilliseconds + 'ms');
        });
        
        window.stage = stage;
        redrawStage = function() {
            stage.draw();
        }
        
        $('#actors').items([]).chain(function() {
            var model = this.item();

            $(this).click(function() {
                var $self = $(this);
                $('#actors li').removeClass('selected');
                $self.toggleClass('selected');
                $('#properties-palette').propertiesEditor({ 
                    title: model.name + ' Properties', 
                    model: model.obj, 
                    propertyChange: redrawStage
                });
            });
        });
        
        $canvas.click(function(evt) {
            var strokeColor = $strokeColorPicker.data('SelectedColor'),
                fillColor = $fillColorPicker.data('SelectedColor'),
                selectedShape = $shapeSelector.data('SelectedShape'),
                strokeWeight = parseInt($('#stroke-weight').val()),
                newShape,
                newShapeAnimation = Object.create(Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;
            
            // create a new ball and attach an animation
            switch (selectedShape) {
                case 'Circle':
                    newShape = Object.create(Circle);
                    newShape.init(newX, newY, 50, { stroke: strokeColor, fill: fillColor, strokeWeight: strokeWeight });
                    break;
                case 'Rectangle':
                    newShape = Object.create(Rectangle);
                    newShape.init(newX, newY, 75, 50, { stroke: strokeColor, fill: fillColor, strokeWeight: strokeWeight });
                    break;
            }
            
            newShapeAnimation.init(stage, 2000, newX, newX + 300, newShape, 'x', false, Easing.easeOutSine); 

            // add the new ball to the actors palette
            $actors.items('add', { name: selectedShape, obj: newShape }).chain();
            // re-initalise scrollbars
            $('.palette .content').jScrollPane({
                scrollbarWidth: 5,
                scrollbarMargin: 5,
                showArrows: false
            });
            
            // put the ball on the stage
            stage.actors.push(newShape);
            stage.animations.push(newShapeAnimation);
            newShape.draw(stage);
            if (stage.isRunning) newShapeAnimation.start();
        });
        
        $('.palette .content').jScrollPane({
            scrollbarWidth: 5,
            scrollbarMargin: 5,
            showArrows: false
        });
        
        $('.dock .content').jScrollPane({
            scrollbarWidth: 5,
            scrollbarMargin: 5,
            showArrows: false
        });
        $('.color-picker').colorPicker();
        $shapeSelector.shapeSelector();
        $('#stage-start').click(function() { stage.start(); });
        $('#stage-stop').click(function() { stage.stop(); });
        $('#stage-rewind').click(function() { 
            stage.rewind(); 
            $('#stage-time').val('0m 0s 0ms');
        });
        $('#stage-refresh').click(redrawStage);
    });
})();