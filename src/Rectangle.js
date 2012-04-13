
/**
 * @class graphiti.Rectangle
 * A Rectangle Figure.
 * 
 * @author Andreas Herz
 * @extends graphiti.VectorFigure
 */
graphiti.Rectangle = graphiti.VectorFigure.extend({
    NAME : "graphiti.Rectangle", // only for debugging

    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     */
    init: function( width, height) {
      this._super();

      this.setBackgroundColor( new graphiti.util.Color(0,0,0));
      this.setColor(new  graphiti.util.Color(0,0,0));

      if(typeof width === "undefined"){
        this.setDimension(10, 10);
      }
      else{
        this.setDimension(width, height);
      }
    },
    
    /**
     * @method
     * propagate all attributes like color, stroke,... to the shape element
     **/
    repaint: function()
    {
      this._super({width: this.width, height:this.height});
    },

    /**
     * @private
     **/
    createShapeElement : function()
    {
       return this.canvas.paper.rect(this.getX(),this.getY(),this.getWidth(), this.getHeight());
    }


});