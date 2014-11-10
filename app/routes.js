/**
 * Created by tom on 10/14/14.
 */
Router.map(function(){
  this.route('home', {
    path: '/'
  });
  this.route('checkins', function(){
    this.render('Checkins');
  });

  //this.route('dashboard', {
  //  path: '/dashboard',
  //  loginRequired: 'entrySignIn',
  //  waitOn: function(){
  //    return this.subscribe('items');
  //  },
  //  data: {
  //    items: Items.find({})
  //  },
  //  onAfterAction: function(){
  //    SEO.set({
  //      title: 'Dashboard | ' + SEO.settings.title
  //    });
  //  }
  //});

  this.route('profile', {
    path: '/profile',
    data: function(){
      return Meteor.user();
    }
  });

  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function(){
      this.response.statusCode = 404;
    }
  })
});