

example.connection_labeledit.LabelEditor = Class.extend({
	
	init:function(canvas){
		
		this.html = $('<div id="inputbox" class="shadow">'+
                         '   <div class="dialog_label">Edit me</div>'+
                         '   <input class="dialog_input" id="dialog_label_text" style="width:100%">'+
                         '</div>'
               );
		this.html.hide();
		$("body").append(this.html);
		
	    var label ="-disabled-";
		$("#dialog_label_text").val(label);
		$("#dialog_label_text").bind("keyup",$.proxy(function(e){
		      if (e.which == 13) {
		           $("#dialog_label_text").blur();
		      }
		      var label = $("#dialog_label_text").val();
		      this.currentFigure.setLabel(label);
		},this));
		
		// Setup the selectionListener for the Ccanvas
		//
	    canvas.addSelectionListener($.proxy(function(e){
	    	this.currentFigure = e;
     		if(e instanceof example.connection_labeledit.LabelConnection){
	     		$("#dialog_label_text").val(e.getLabel());
		     	this.html.fadeIn();
	     	}
	     	else{
                this.html.fadeOut();
	     	}
	    },this));
		  
	}
});