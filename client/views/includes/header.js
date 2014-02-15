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
  }
});