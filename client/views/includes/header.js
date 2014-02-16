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
  $('#login-username-label').text(__('includes.header.loginUsernameLabel'));
  $('#login-password-label').text(__('includes.header.loginPasswordLabel'));
  $('#signup-link').text(__('includes.header.signupLink'));
  $('#login-buttons-password').text(__('includes.header.signinLink'));
  $('#login-password-again-label').text(__('includes.header.loginPasswordAgainLabel'));
  $('#back-to-login-link').text(__('includes.header.backToLoginLink'));
  $('#login-dropdown-list .dropdown-toggle').text(__('includes.header.loginDropdownLabel')).append('&nbsp;<strong class="caret"></strong>');
};