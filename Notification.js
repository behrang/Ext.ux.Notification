Ext.define('Ext.ux.Notification', {
  extend: 'Ext.container.Container',
  alias: 'widget.notification',
  floating: true,
  autoShow: true,
  hideMode: 'visibility',

  hideWhenEmpty: true,
  fadeInDuration: 400,
  fadeOutDuration: 1000,
  delay: 5000,
  maxQueueSize: 5,

  constructor: function () {
    this.callParent(arguments);
    if (this.hideWhenEmpty && this.items.length === 0) {
      this.hide();
    }
  },

  info: function (message) {
    this.notify(message, 'info');
  },

  success: function (message) {
    this.notify(message, 'success');
  },

  warning: function (message) {
    this.notify(message, 'warning');
  },

  error: function (message) {
    this.notify(message, 'error');
  },

  notify: function (message, type) {
    var me = this, c, el;
    if (me.hideWhenEmpty && me.items.length === 0) {
      me.show();
    }
    if (me.items.length === me.maxQueueSize) {
      me.remove(me.items.get(0), true);
    }
    c = me.add(me.createMessage(message, type));
    el = c.getEl();
    el.setStyle('opacity', 0);
    el.fadeIn({
      duration: me.fadeInDuration
    });
    if (message.autoHide !== false) {
      el.fadeOut({
        duration: me.fadeOutDuration,
        delay: message.delay || me.delay,
        callback: function () {
          if (me.contains(c)) {
            me.remove(c, true);
          }
          if (me.hideWhenEmpty && me.items.length === 0) {
            me.hide();
          }
        }
      });
    }
  },

  removeMessage: function (message) {
    var me = this;
    if (me.items.contains(message)) {
      me.remove(message, true);
    }
    if (me.hideWhenEmpty && me.items.length === 0) {
      me.hide();
    }
  },

  createMessage: function (message, cls) {
    if (Ext.isString(message)) {
      return {
        xtype: 'component',
        cls: 'message ' + cls,
        html: message
      };
    }
    if (message.isComponent) {
      message.addCls(['message', cls]);
      return message;
    }
    if (message) {
      message.cls = 'message ' + cls;
      return message;
    }
  }
});
