Ext.ux.Notification
===================

Displays notification messages in a central location.

Usage
-----

Create an instance:

```js
var notification = Ext.widget('notification', {
  renderTo: Ext.getBody(),
  width: 150,
  cls: 'notification'
});
notification.anchorTo(document, 't-t');
```

Then whenever you want to add a new notification message, call something like:

```js
notification.info('Sample info message.');
```

There are four predefined notify types: `info`, `success`, `warning`, `error`. You can send a simple String to each or you can send a config object or an instance of a component.

You can customize the duration of fade in/out (`fadeInDuration`, `fadeOutDuration`), duration of message display (`delay`) and max number of messages shown before removing old ones (`maxQueueSize`). If you want the notification container to remain visible when there are no messages, set `hideWhenEmpty` to `false`.

You can also prevent auto hiding of a message by setting the `autoHide` property to `false`. Also `delay` can be customized for each message.

For more information, look at the example.html file.

License
-------

MIT
