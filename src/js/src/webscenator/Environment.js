//= require <jquery-1.4.2>
//= require "init"
//= require "services/ToolboxService"

(function($) {
    // Namespace shortcuts
    var services = webscenator.services;

    window.webscenator.Environment = {
        
        // begin init
        init: function() {
            console.log('Initialising Environment');
            this.initaliseServices();
        },
        
        initaliseServices: function() {
            this.toolboxService = Object.create(services.ToolboxService);
            this.toolboxService.init(this);
        }
        // end init
        
    };

})(jQuery);