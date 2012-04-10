if(typeof example==="undefined")var example = {};

example.Start = graphiti.Rectangle.extend({

    init : function()
    {
        this._super();
        this.outputPort = null;
        this.setDimension(50, 50);
        this.setResizeable(false);
        this.setAlpha(0.5);
    },
    
    setCanvas : function(/* :@NAMESPACE@Workflow */canvas)
    {
        this._super(canvas);

        if (canvas !== null && this.outputPort === null)
        {
            this.outputPort = new graphiti.OutputPort();
           this.outputPort.setCanvas(canvas);
            this.addPort(this.outputPort, this.width,0);
        }
    }

});
