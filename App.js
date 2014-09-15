Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{ html:"My first RallyChapterCumulativeFlow app2"},
        {xtype: 'rallyportfolioitemtypecombobox'},
        {xtype: 'rallyiterationcombobox'}
    ],
    launch: function() {
        //Write app code here
        console.log("Our first app has arrived3!!");
    }
});
