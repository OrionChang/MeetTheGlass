Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({userId: Meteor.userId(), read: false});
  },

  notificationCount: function(){
  	return Notifications.find({userId: Meteor.userId(), read: false}).count();
  },

  notificationsLabel: function(){
    return __('notifications.notificationsLabel');
  },

  noNotificationsLabel: function(){
    return __('notifications.noNotificationsLabel');
  }

});

Template.notification.helpers({
  notificationPostPath: function() {
    return Router.routes.postPage.path({_id: this.postId});
  },

  notificationContent: function() {
    return __('notifications.notificationContent');
  },

})

Template.notification.events({
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
})