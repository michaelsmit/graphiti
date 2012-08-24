
/**
 * @class graphiti.shape.icon.StopWatch

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new graphiti.shape.icon.StopWatch();
 *     icon.setDimension(50,50);
 *     canvas.addFigure(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends graphiti.shape.icon.Icon
 */
graphiti.shape.icon.StopWatch = graphiti.shape.icon.Icon.extend({
    NAME : "graphiti.shape.icon.StopWatch",

    /**
     * 
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * @param {Number} [width] the width of the Oval
     * @param {Number} [height] the height of the Oval
     */
    init: function(width, height) {
      this._super(width, height);
    },

    /**
     * @private
     * @returns
     */
    createSet : function() {
        return this.canvas.paper.path("M27.216,18.533c0-3.636-1.655-6.883-4.253-9.032l0.733-0.998l0.482,0.354c0.198,0.146,0.481,0.104,0.628-0.097l0.442-0.604c0.146-0.198,0.103-0.482-0.097-0.628l-2.052-1.506c-0.199-0.146-0.481-0.103-0.628,0.097L22.03,6.724c-0.146,0.199-0.104,0.482,0.096,0.628l0.483,0.354l-0.736,1.003c-1.28-0.834-2.734-1.419-4.296-1.699c0.847-0.635,1.402-1.638,1.403-2.778h-0.002c0-1.922-1.557-3.48-3.479-3.48c-1.925,0-3.48,1.559-3.48,3.48c0,1.141,0.556,2.144,1.401,2.778c-1.549,0.277-2.99,0.857-4.265,1.68L8.424,7.684l0.484-0.353c0.198-0.145,0.245-0.428,0.098-0.628l-0.44-0.604C8.42,5.899,8.136,5.855,7.937,6.001L5.881,7.5c-0.2,0.146-0.243,0.428-0.099,0.628l0.442,0.604c0.145,0.2,0.428,0.244,0.627,0.099l0.483-0.354l0.729,0.999c-2.615,2.149-4.282,5.407-4.282,9.057c0,6.471,5.245,11.716,11.718,11.716c6.47,0,11.716-5.243,11.718-11.716H27.216zM12.918,4.231c0.002-1.425,1.155-2.58,2.582-2.582c1.426,0.002,2.579,1.157,2.581,2.582c-0.002,1.192-0.812,2.184-1.908,2.482v-1.77h0.6c0.246,0,0.449-0.203,0.449-0.449V3.746c0-0.247-0.203-0.449-0.449-0.449h-2.545c-0.247,0-0.449,0.202-0.449,0.449v0.749c0,0.246,0.202,0.449,0.449,0.449h0.599v1.77C13.729,6.415,12.919,5.424,12.918,4.231zM15.5,27.554c-4.983-0.008-9.015-4.038-9.022-9.021c0.008-4.982,4.039-9.013,9.022-9.022c4.981,0.01,9.013,4.04,9.021,9.022C24.513,23.514,20.481,27.546,15.5,27.554zM15.5,12.138c0.476,0,0.861-0.385,0.861-0.86s-0.386-0.861-0.861-0.861s-0.861,0.386-0.861,0.861S15.024,12.138,15.5,12.138zM15.5,24.927c-0.476,0-0.861,0.386-0.861,0.861s0.386,0.861,0.861,0.861s0.861-0.386,0.861-0.861S15.976,24.927,15.5,24.927zM12.618,11.818c-0.237-0.412-0.764-0.553-1.176-0.315c-0.412,0.238-0.554,0.765-0.315,1.177l2.867,6.722c0.481,0.831,1.543,1.116,2.375,0.637c0.829-0.479,1.114-1.543,0.635-2.374L12.618,11.818zM18.698,24.07c-0.412,0.237-0.555,0.765-0.316,1.176c0.237,0.412,0.764,0.554,1.176,0.315c0.413-0.238,0.553-0.765,0.316-1.176C19.635,23.974,19.108,23.832,18.698,24.07zM8.787,15.65c0.412,0.238,0.938,0.097,1.176-0.315c0.237-0.413,0.097-0.938-0.314-1.176c-0.412-0.239-0.938-0.098-1.177,0.313C8.234,14.886,8.375,15.412,8.787,15.65zM22.215,21.413c-0.412-0.236-0.938-0.096-1.176,0.316c-0.238,0.412-0.099,0.938,0.314,1.176c0.41,0.238,0.937,0.098,1.176-0.314C22.768,22.178,22.625,21.652,22.215,21.413zM9.107,18.531c-0.002-0.476-0.387-0.86-0.861-0.86c-0.477,0-0.862,0.385-0.862,0.86c0.001,0.476,0.386,0.86,0.861,0.861C8.722,19.393,9.106,19.008,9.107,18.531zM21.896,18.531c0,0.477,0.384,0.862,0.859,0.86c0.476,0.002,0.862-0.382,0.862-0.859s-0.387-0.86-0.862-0.862C22.279,17.671,21.896,18.056,21.896,18.531zM8.787,21.413c-0.412,0.238-0.554,0.765-0.316,1.176c0.239,0.412,0.765,0.553,1.177,0.316c0.413-0.239,0.553-0.765,0.315-1.178C9.725,21.317,9.198,21.176,8.787,21.413zM21.352,14.157c-0.411,0.238-0.551,0.764-0.312,1.176c0.237,0.413,0.764,0.555,1.174,0.315c0.412-0.236,0.555-0.762,0.316-1.176C22.29,14.06,21.766,13.921,21.352,14.157zM12.304,24.067c-0.413-0.235-0.939-0.096-1.176,0.315c-0.238,0.413-0.098,0.939,0.312,1.178c0.413,0.236,0.939,0.096,1.178-0.315C12.857,24.832,12.715,24.308,12.304,24.067zM18.698,12.992c0.41,0.238,0.938,0.099,1.174-0.313c0.238-0.411,0.1-0.938-0.314-1.177c-0.414-0.238-0.937-0.097-1.177,0.315C18.144,12.229,18.286,12.755,18.698,12.992z");
    }
});

