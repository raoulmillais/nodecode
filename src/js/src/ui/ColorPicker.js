//= require <jquery-1.4.2>
//= require "../Object"
//= require "../Color"

(function($) {

    $.fn.colorPicker = function() {
        var $self = this,
            color = selectColor(this.children('li.selected').attr('id'));
        
        $self.data('SelectedColor', color);
        
        this.children('li').click(function() {
            $self.children('li').removeClass('selected');
            $(this).toggleClass('selected');
            $self.data('SelectedColor', selectColor(this.id));
        });        
        
        function selectColor(id) {
            var result = Object.create(Color);
            
            switch (id) {
                case 'control-stroke-colour-cyan':
                    result.init(25, 240, 252, 1.0);
                    break;
                case 'control-stroke-colour-lime':
                    result.init(201, 255, 32);
                    break;
                case 'control-stroke-colour-orange':
                    result.init(252, 90, 0, 1.0);
                    break;
                case 'control-stroke-colour-purple':
                    result.init(243, 0, 252, 1.0);
                    break;
            }
            
            return result;
        }
        
        return this;
    };
    
})(jQuery);