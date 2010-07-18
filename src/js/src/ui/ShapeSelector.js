//= require <jquery-1.4.2>

(function($) {

    $.fn.shapeSelector = function() {
        var $self = this,
            selectedShape = selectShape(this.children('li.selected').attr('id'));
        
        $self.data('SelectedShape', selectedShape);
        
        this.children('li').click(function() {
            $self.children('li').removeClass('selected');
            $(this).toggleClass('selected');
            $self.data('SelectedShape', selectShape(this.id));
        });        
        
        function selectShape(id) {
            var result;
            
            switch (id) {
                case 'shape-circle':
                    return 'Circle';
                case 'shape-rectangle':
                    return 'Rectangle';
                default:
                    return 'Circle';
            }
        }
        
        return this;
    };
    
})(jQuery);