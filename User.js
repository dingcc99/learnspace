Ext.define('AM.controller.User',{
  extend:'Ext.app.Controller',
  models: ['User'],
  stores: ['Users'],
  views: ['user.West, user.Grid'],
  refs: [{
      ref: 'UserList',
      selector: 'userlist',
  }],
  init: function() {
    this.control({
      'userlist treepanel':{
        itemclick:function(tree,record,item){
          var me = this;
          var tabpanel = me.getUserList.down('tabpanel');
          var tab = tabpanel.getComponent(record.raw.id);
          if(Ext.isEmpty(tab)){
            tab = tabpanel.add({
              xtype: 'panel',
              closable: true,
              itemId: record.raw.id,
              title: record.raw.text,
              html: '<iframe width="100%" height="100%" framespacing="0" marginheight="0" frameborder="0" src='+record.raw.url+'></iframe>'
            })
          }
          tabpanel.setActiveTab(tab);
        }
      }
    });
  },
  createpro: function(btn){
    alert(0);
  }
});
