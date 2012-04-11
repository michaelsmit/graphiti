Ext.data.JsonP.graphiti_command_CommandResize({"tagname":"class","name":"graphiti.command.CommandResize","extends":"graphiti.command.Command","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":true,"inheritdoc":null,"meta":{"author":["Andreas Herz"]},"id":"class-graphiti.command.CommandResize","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-constructor"},{"name":"canExecute","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-canExecute"},{"name":"cancel","tagname":"method","owner":"graphiti.command.Command","meta":{"template":true},"id":"method-cancel"},{"name":"execute","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-execute"},{"name":"getLabel","tagname":"method","owner":"graphiti.command.Command","meta":{},"id":"method-getLabel"},{"name":"redo","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-redo"},{"name":"setDimension","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-setDimension"},{"name":"undo","tagname":"method","owner":"graphiti.command.CommandResize","meta":{},"id":"method-undo"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"CommandResize.js","href":"CommandResize.html#graphiti-command-CommandResize"}],"html_meta":{"author":null},"component":false,"superclasses":["graphiti.command.Command"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/graphiti.command.Command' rel='graphiti.command.Command' class='docClass'>graphiti.command.Command</a><div class='subclass '><strong>graphiti.command.CommandResize</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CommandResize.html#graphiti-command-CommandResize' target='_blank'>CommandResize.js</a></div></pre><div class='doc-contents'><p>Resize command for figures. Can be execute/undo/redo via a CommandStack.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/graphiti.command.CommandResize-method-constructor' class='name expandable'>graphiti.command.CommandResize</a>( <span class='pre'><a href=\"#!/api/graphiti.Figure\" rel=\"graphiti.Figure\" class=\"docClass\">graphiti.Figure</a> figure, [Number width], [Number height]</span> ) : Object</div><div class='description'><div class='short'>Create a new resize Command objects which can be execute via the CommandStack. ...</div><div class='long'><p>Create a new resize Command objects which can be execute via the CommandStack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : <a href=\"#!/api/graphiti.Figure\" rel=\"graphiti.Figure\" class=\"docClass\">graphiti.Figure</a><div class='sub-desc'><p>the figure to resize</p>\n</div></li><li><span class='pre'>width</span> : Number (optional)<div class='sub-desc'><p>the current width</p>\n</div></li><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>the current height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/graphiti.command.Command-method-constructor' rel='graphiti.command.Command-method-constructor' class='docClass'>graphiti.command.Command.constructor</a></p></div></div></div><div id='method-canExecute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-canExecute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandResize-method-canExecute' class='name expandable'>canExecute</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. ...</div><div class='long'><p>Returns [true] if the command can be execute and the execution of the\ncommand modify the model. A CommandMove with [startX,startX] == [endX,endY] should\nreturn false. <br>\nthe execution of the Command doesn't modify the model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/graphiti.command.Command-method-canExecute' rel='graphiti.command.Command-method-canExecute' class='docClass'>graphiti.command.Command.canExecute</a></p></div></div></div><div id='method-cancel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/graphiti.command.Command' rel='graphiti.command.Command' class='defined-in docClass'>graphiti.command.Command</a><br/><a href='source/Command.html#graphiti-command-Command-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.Command-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )<strong class='template signature'>template</strong></div><div class='description'><div class='short'>Will be called if the user cancel the operation. ...</div><div class='long'><p>Will be called if the user cancel the operation.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandResize-method-execute' class='name expandable'>execute</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Execute the command the first time ...</div><div class='long'><p>Execute the command the first time</p>\n<p>Overrides: <a href='#!/api/graphiti.command.Command-method-execute' rel='graphiti.command.Command-method-execute' class='docClass'>graphiti.command.Command.execute</a></p></div></div></div><div id='method-getLabel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/graphiti.command.Command' rel='graphiti.command.Command' class='defined-in docClass'>graphiti.command.Command</a><br/><a href='source/Command.html#graphiti-command-Command-method-getLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.Command-method-getLabel' class='name expandable'>getLabel</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns a label of the Command. ...</div><div class='long'><p>Returns a label of the Command. e.g. \"move figure\".</p>\n\n<p>@final</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the label for this command</p>\n</div></li></ul></div></div></div><div id='method-redo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandResize-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Redo the command after the user has undo this command ...</div><div class='long'><p>Redo the command after the user has undo this command</p>\n<p>Overrides: <a href='#!/api/graphiti.command.Command-method-redo' rel='graphiti.command.Command-method-redo' class='docClass'>graphiti.command.Command.redo</a></p></div></div></div><div id='method-setDimension' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-setDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandResize-method-setDimension' class='name expandable'>setDimension</a>( <span class='pre'>Number width, Number height</span> )</div><div class='description'><div class='short'>Set the new dimension of the element. ...</div><div class='long'><p>Set the new dimension of the element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>the new width.</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>the new height of the element.</p>\n</div></li></ul></div></div></div><div id='method-undo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandResize'>graphiti.command.CommandResize</span><br/><a href='source/CommandResize.html#graphiti-command-CommandResize-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandResize-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Undo the command ...</div><div class='long'><p>Undo the command</p>\n<p>Overrides: <a href='#!/api/graphiti.command.Command-method-undo' rel='graphiti.command.Command-method-undo' class='docClass'>graphiti.command.Command.undo</a></p></div></div></div></div></div></div></div>"});