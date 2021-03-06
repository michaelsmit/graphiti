
/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends graphiti.ui.parts.GraphicalEditor
 */
example.Application = Class.extend(
{
    NAME : "example.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
	      this.view    = new example.View("canvas");
          this.toolbar = new example.Toolbar("toolbar", this, this.view );
	       
          this.appLayout = $('#container').layout({
	   	     north: {
	              resizable:false,
	              closable:false,
                  spacing_open:0,
                  spacing_closed:0,
                  size:50,
	              paneSelector: "#toolbar"
	            },
	            center: {
	              resizable:false,
	              closable:false,
                  spacing_open:0,
                  spacing_closed:0,
	              paneSelector: "#canvas"
	            }
	       });
          


          // Load some data into the canvas
          var jsonDocument = 
              [
                {
                  "type": "graphiti.shape.node.Start",
                  "id": "354fa3b9-a834-0221-2009-abc2d6bd852a",
                  "x": 25,
                  "y": 97,
                  "width": 50,
                  "height": 50,
                  "radius": 2
                },
                {
                  "type": "graphiti.shape.node.End",
                  "id": "ebfb35bb-5767-8155-c804-14bda7759dc2",
                  "x": 272,
                  "y": 45,
                  "width": 50,
                  "height": 50,
                  "radius": 2
                },
                {
                  "type": "graphiti.Connection",
                  "id": "74ce9e7e-5f0e-8642-6bec-4ff9c54b3f0a",
                  "source": {
                    "node": "354fa3b9-a834-0221-2009-abc2d6bd852a",
                    "port": "output0"
                  },
                  "target": {
                    "node": "ebfb35bb-5767-8155-c804-14bda7759dc2",
                    "port": "input0"
                  }
                }
              ];
          
          // unmarshal the JSON document into the canvas
          // (load)
          var reader = new graphiti.io.json.Reader();
          reader.unmarshal(this.view, jsonDocument);
         
	},
	   
    layout:function(){
        this.appLayout.resizeAll();
    }
    
	

});
