Template.header.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current().route.name === name
    });
    
    return active && 'active';
  },
  
  recentPostsLink: function(){
	  return __('includes.header.recentPostsLink');
  },
	
  popularPostsLink: function(){
	  return __('includes.header.popularPostsLink');
  },

  newPostLink: function(){
    return __('includes.header.newPostLink');
  }
});


Template.header.rendered = function () {

  if (!Meteor.user()) {
    $('#login-dropdown-list .dropdown-toggle').text(__('includes.header.loginDropdownLabel')).append('&nbsp;<strong class="caret"></strong>');  
  };  

  $('#login-username-label').text(__('includes.header.loginUsernameLabel'));
  $('#login-username-or-email-label').text(__('includes.header.loginUsernameOrEmailLabel'));
  $('#login-password-label').text(__('includes.header.loginPasswordLabel'));
  $('#login-password-again-label').text(__('includes.header.loginPasswordAgainLabel'));

  $('#signup-link').text(__('includes.header.signupLink'));
  $('#login-buttons-password').text(__('includes.header.signinLink'));
  $('#forgot-password-link').text(__('includes.header.forgotPasswordLink'));

  
  
  $('#back-to-login-link').text(__('includes.header.backToLoginLink'));
  
  $('#login-buttons-forgot-password').text(__('includes.header.forgotPasswordSendEmailLink'));

  $('#login-buttons-logout').text(__('includes.header.signoutLink'));
  $('#login-buttons-open-change-password').text(__('includes.header.changePasswordLink'));

  $('#login-old-password-label').text(__('includes.header.oldPasswordLabel'));
  $('#login-buttons-do-change-password').text(__('includes.header.changePasswordLink'));
  $('#login-dropdown-list .btn.login-close').text(__('includes.header.loginCloseLink'));

  


};