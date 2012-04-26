
/**
 * @class graphiti.Connection
 *  A Connection is the line between two {@link graphiti.Port}s.
 *
 * @inheritable
 * @author Andreas Herz
 * @extends graphiti.Line
 */
graphiti.PolyLine = graphiti.Line.extend({
    NAME : "graphiti.Connection", // only for debugging

   
    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     */
    init: function( ) {
      this._super();
      
      this.oldPoint=null;
      
      // internal status handling for performance reasons
      //
      this.svgPathString = null;
      
      this.lineSegments = new graphiti.util.ArrayList();
    
      this.setColor(new  graphiti.util.Color(0,0,115));
      this.setStroke(1);
    },
    
    /**
     * @method
     * Set the start point of the line.
     * This method fires a <i>document dirty</i> event.
     *
     * @param {Numer} x the x coordinate of the start point
     * @param {Number} y the y coordinate of the start point
     **/
    setStartPoint:function( x, y)
    {
        this.svgPathString=null;
        this._super(x,y);
    },

    /**
     * Set the end point of the line.
     * This method fires a <i>document dirty</i> event.
     *
     * @param {Number} x the x coordinate of the end point
     * @param {Number} y the y coordinate of the end point
     **/
    setEndPoint:function(x,  y)
    {
        this.svgPathString=null;
        this._super(x,y);
    },


    
    /**
     * @private
     **/
    repaint:function()
    {
      if(this.shape===null){
          return;
      }
      
      var i=0;
      
     // routing is only neccessary if any start or endpoint has ben changed....This is an expensive method
     // avooid unneccessary usage
     //
     if(this.svgPathString === null){
    	
        this.startStroke();
    
        // Use the internal router if any has been set....
        //
        this.router.route(this);
    
        // paint the decorator if any exists
        //
        if(this.getSource().getParent().isMoving===false && this.getTarget().getParent().isMoving===false )
        {
          if(this.targetDecorator!==null){
            this.targetDecorator.paint(new graphiti.Graphics(this.graphics,this.getEndAngle(),this.getEndPoint()));
          }
    
          if(this.sourceDecorator!==null){
            this.sourceDecorator.paint(new graphiti.Graphics(this.graphics,this.getStartAngle(),this.getStartPoint()));
          }
        }
        
        if(this.shape!==null)
        {
          var ps = this.getPoints();
          var p = ps.get(0);
          var path = "M"+p.x+" "+p.y;
          for( i=0;i<ps.getSize();i++)
          {
            p = ps.get(i);
            path=path+"L"+p.x+" "+p.y;
          }
          this.svgPathString = path;
        }
        
        this.finishStroke();
    
        for( i=0; i<this.children.getSize();i++)
        {
            var entry = this.children.get(i);
            entry.locator.relocate(entry.figure);
        }
      }
     
      this._super({path:this.svgPathString});
    },
    

    /**
     * @method
     * Called by the framework during drag&drop operations.
     * 
     * @param {graphiti.Figure} draggedFigure The figure which is currently dragging
     * 
     * @return {Boolean} true if this port accepts the dragging port for a drop operation
     * @template
     **/
    onDragEnter : function( draggedFigure )
    {
    	this.setGlow(true);
    	return true;
    },
 
    /**
     * @method
     * Called if the DragDrop object leaving the current hover figure.
     * 
     * @param {graphiti.Figure} draggedFigure The figure which is currently dragging
     * @template
     **/
    onDragLeave:function( draggedFigure )
    {
    	this.setGlow(false);
    },

    
    /**
     * @private
     *
     **/
    startStroke:function()
    {
     this.oldPoint=null;
     this.lineSegments = new graphiti.util.ArrayList();
    },
    
    /**
     * @private
     *
     **/
    finishStroke:function()
    {
      this.oldPoint=null;
    },
    
    /**
     * Returns the fulcrums of the connection
     *
     * @return an graphiti.util.ArrayList of type graphiti.Point
     * @type graphiti.util.ArrayList 
     **/
    getPoints:function()
    {
      var result = new graphiti.util.ArrayList();
      var line=null;
      for(var i = 0; i< this.lineSegments.getSize();i++)
      {
         line = this.lineSegments.get(i);
         result.add(line.start);
      }
      // add the last point
      if(line!==null){
        result.add(line.end);
      }
      return result;
    },
    
    /*
     * @private
     *
     **/
    addPoint:function(/*:graphiti.Point*/ p)
    {
      p = new graphiti.geo.Point(p.x, p.y);
      if(this.oldPoint!==null)
      {
        // store the painted line segment for the "mouse selection test"
        // (required for user interaction)
        var line = {};
        line.start = this.oldPoint;
        line.end   = p;
        this.lineSegments.add(line);
      }
    
      this.oldPoint = {};
      this.oldPoint.x = p.x;
      this.oldPoint.y = p.y;
    },
    
    /**
     * @see graphiti.Figure#onOtherFigureMoved
     **/
    onOtherFigureMoved:function(/*:graphiti.Figure*/ figure)
    {
      this.svgPathString = null;
      this._super(figure);
    },
    
    /**
     * @method
    * Checks if the hands over coordinate close to the line. The 'corona' is considered
    * for this test. This means the point isn't direct on the line. Is it only close to the
    * line!
    *
    * @param {Number} px the x coordinate of the test point
    * @param {Number} py the y coordinate of the test point
    * @return {boolean}
     **/
    hitTest:function( px, py)
    {
      for(var i = 0; i< this.lineSegments.getSize();i++)
      {
         var line = this.lineSegments.get(i);
         if(graphiti.Line.hit(this.corona, line.start.x,line.start.y,line.end.x, line.end.y, px,py)){
           return true;
         }
      }
      return false;
    },
    
   
    /**
     * Returns the Command to perform the specified Request or null.
      *
     * @param {graphiti.EditPolicy} request describes the Command being requested
     * @return null or a Command
     * @type graphiti.Command
     **/
    createCommand:function(/*:graphiti.EditPolicy*/ request)
    {
 
      if(request.getPolicy() === graphiti.EditPolicy.DELETE)
      {
        if(this.isDeleteable()===true){
          return new graphiti.command.CommandDelete(this);
        }
      }
    
      return null;
    }
});