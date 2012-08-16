
/**
 * @class graphiti.SetFigure
 * 
 * A SetFigure is a composition of different SVG elements.
 * 
 * @author Andreas Herz
 * @extends graphiti.shape.basic.Rectangle
 */
graphiti.SetFigure = graphiti.shape.basic.Rectangle.extend({
    
    NAME : "graphiti.SetFigure",

    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     */
    init: function( width, height) {
      // collection of SVG DOM nodes
      this.svgNodes=null;
      
      this.originalWidth = null;
      this.originalHeight= null;
      
      this.scaleX = 1;
      this.scaleY = 1;
      
      this._super( width, height);

      this.setStroke(0);
      this.setBackgroundColor(null); 
    },
    
    /**
     * @method
     * Set/Reset the cnavas for the element.
     * 
     * @param {graphiti.Canvas} canvas the canvas to use
     */
    setCanvas: function( canvas )
    {
      // remove the shape if we reset the canvas and the element
      // was already drawn
      if(canvas===null && this.svgNodes!==null){
         this.svgNodes.remove();
         this.svgNodes=null;
      }
      
      this._super(canvas);
     },
 
    /**
     * @method
     * propagate all attributes like color, stroke,... to the shape element and
     * repaint them.
     * 
     **/
    repaint : function(attributes)
    {
        if (this.originalWidth !== null) {
            this.scaleX = this.width / this.originalWidth;
            this.scaleY = this.height / this.originalHeight;
        }

        if (this.repaintBlocked === true || this.shape === null) {
            return;
        }

        if (typeof attributes === "undefined") {
            attributes = {};
        }

        if (this.svgNodes !== null) {
            if (this.isResizeable() === true) {
                this.svgNodes.transform("s"+this.scaleX+","+this.scaleY+","+this.getAbsoluteX()+","+this.getAbsoluteY()+ " t"
                        + this.getAbsoluteX() + "," + this.getAbsoluteY());
            }
            else {
                this.svgNodes.transform("t" + this.getAbsoluteX() + "," + this.getAbsoluteY());
            }
        }

        this._super(attributes);
    },

    /**
     * @private
     */
    createShapeElement : function()
    {
       // NOTE: don't change the order of the two calls. This defines the z-oder in the canvas.
       // The "set" must always be on top.
       var shape= this.canvas.paper.rect(this.getX(),this.getY(),this.getWidth(), this.getHeight());
       this.svgNodes = this.createSet();
       
       this.originalWidth = this.svgNodes.getBBox().width;
       this.originalHeight= this.svgNodes.getBBox().height;

       return shape;
    },
    
    /**
     * @method
     * Override this method to add your own SVG elements. Ssee {@link graphiti.shape.basic.Label} as example.
     * 
     * @template
     */
    createSet: function()
    {
    	return this.canvas.paper.set(); // return empty set as default;
    },
    
});