Ext.data.JsonP.graphiti_command_CommandStackEvent({"parentMixins":[],"singleton":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent' target='_blank'>CommandStackEvent.js</a></div></pre><div class='doc-contents'><p>Event class which will be fired for every CommandStack operation. Required for CommandStackListener.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandStackEvent'>graphiti.command.CommandStackEvent</span><br/><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/graphiti.command.CommandStackEvent-method-constructor' class='name expandable'>graphiti.command.CommandStackEvent</a>( <span class='pre'><a href=\"#!/api/graphiti.command.Command\" rel=\"graphiti.command.Command\" class=\"docClass\">graphiti.command.Command</a> command, Number details</span> ) : Object</div><div class='description'><div class='short'>Create a new CommandStack objects which can be execute via the CommandStack. ...</div><div class='long'><p>Create a new CommandStack objects which can be execute via the CommandStack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>command</span> : <a href=\"#!/api/graphiti.command.Command\" rel=\"graphiti.command.Command\" class=\"docClass\">graphiti.command.Command</a><div class='sub-desc'><p>the related command</p>\n</div></li><li><span class='pre'>details</span> : Number<div class='sub-desc'><p>the current state of the command execution</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCommand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandStackEvent'>graphiti.command.CommandStackEvent</span><br/><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent-method-getCommand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandStackEvent-method-getCommand' class='name expandable'>getCommand</a>( <span class='pre'></span> ) : <a href=\"#!/api/graphiti.command.Command\" rel=\"graphiti.command.Command\" class=\"docClass\">graphiti.command.Command</a></div><div class='description'><div class='short'>Returns null or a Command if a command is relevant to the current event. ...</div><div class='long'><p>Returns null or a Command if a command is relevant to the current event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/graphiti.command.Command\" rel=\"graphiti.command.Command\" class=\"docClass\">graphiti.command.Command</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDetails' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandStackEvent'>graphiti.command.CommandStackEvent</span><br/><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent-method-getDetails' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandStackEvent-method-getDetails' class='name expandable'>getDetails</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Returns an integer identifying the type of event which has occurred. ...</div><div class='long'><p>Returns an integer identifying the type of event which has occurred.\nDefined by {#link graphiti.command.CommandStack}.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isPostChangeEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandStackEvent'>graphiti.command.CommandStackEvent</span><br/><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent-method-isPostChangeEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandStackEvent-method-isPostChangeEvent' class='name expandable'>isPostChangeEvent</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Returns true if this event is fired after the stack having changed. ...</div><div class='long'><p>Returns true if this event is fired after the stack having changed.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if post-change event</p>\n</div></li></ul></div></div></div><div id='method-isPreChangeEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='graphiti.command.CommandStackEvent'>graphiti.command.CommandStackEvent</span><br/><a href='source/CommandStackEvent.html#graphiti-command-CommandStackEvent-method-isPreChangeEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/graphiti.command.CommandStackEvent-method-isPreChangeEvent' class='name expandable'>isPreChangeEvent</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Returns true if this event is fired prior to the stack changing. ...</div><div class='long'><p>Returns true if this event is fired prior to the stack changing.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if pre-change event</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"CommandStackEvent.html#graphiti-command-CommandStackEvent","filename":"CommandStackEvent.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[{"owner":"graphiti.command.CommandStackEvent","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"graphiti.command.CommandStackEvent","meta":{},"tagname":"method","name":"getCommand","id":"method-getCommand"},{"owner":"graphiti.command.CommandStackEvent","meta":{},"tagname":"method","name":"getDetails","id":"method-getDetails"},{"owner":"graphiti.command.CommandStackEvent","meta":{},"tagname":"method","name":"isPostChangeEvent","id":"method-isPostChangeEvent"},{"owner":"graphiti.command.CommandStackEvent","meta":{},"tagname":"method","name":"isPreChangeEvent","id":"method-isPreChangeEvent"}],"property":[],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"graphiti.command.CommandStackEvent","alternateClassNames":[],"inheritdoc":null,"id":"class-graphiti.command.CommandStackEvent","mixedInto":[],"extends":null});