
/**
 * @class graphiti.shape.analog.OpAmp
 * Hand drawn arrow which points down left
 * 
 * See the example:
 *
 *     @example preview small frame
 *     
 *     var figure =  new graphiti.shape.analog.OpAmp();
 *     canvas.addFigure(figure,10,10);
 *     
 *     
 * @extends graphiti.SVGFigure
 */
graphiti.shape.analog.OpAmp = graphiti.SVGFigure.extend({

    NAME:"graphiti.shape.analog.OpAmp",
    
    // custom locator for the special deisgn of the OpAmp Input area
    MyInputPortLocator : graphiti.layout.locator.Locator.extend({
        init:function( ){
          this._super();
        },    
        relocate:function(index, figure){
            var gap = 19;
            figure.setPosition(0, 8+gap*index);
        }
    }),

    /**
     * @constructor
     * Create a new instance
     */
    init:function(){
        this._super();
        this.inputLocator = new this.MyInputPortLocator();
        
        this.createPort("input", this.inputLocator);
        this.createPort("input", this.inputLocator);
        
        this.createPort("output");
    },
    

    getSVG: function(){
         return '<svg width="46" height="36" xmlns="http://www.w3.org/2000/svg" version="1.1">'+
                 '<path d="m8.2627,0l0,35.36035l31.23926,-17.76025l-31.23926,-17.60011l0,0l0,0.00001zm2.27832,27.36719l4.08105,0m-2.10449,-2.20703l0,4.27979m2.26367,-21.35938l-4.15918,0"  stroke="#010101" fill="#ffffff"/>'+
                 '<line x1="0.53516"  y1="8"  x2="8.21191"  y2="8"  stroke="#010101"/>'+
                 '<line x1="39.14941" y1="18" x2="45.81055" y2="18" stroke="#010101" />'+
                 '<line x1="0.53516"  y1="27" x2="8.21191"  y2="27" stroke="#010101" />'+
                '</svg>';
    }
});