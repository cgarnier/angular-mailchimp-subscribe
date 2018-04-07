Angular mailchimp subscribe
=============

Easy Mailchimp Subscription module. With no form or jquery bullshit.

Install
------------
```
bower install angular-mailchimp-subscribe
```

Usage
-------------

  * config :

  You can retrieve your config form the mailchimp form exemple (on your mailchimp account: Lists > select a list > signup forms > embedded form, you will find this kind of uri in the code) :

```
  http://<username>.<dc>.list-manage1.com/subscribe/post?u=<u>&id=<id>
```

    angular.module('app', ['cg.mailchimp'])
    .config(function (CgMailChimpServiceProvider) {

        CgMailChimpServiceProvider.setConfig({
                username: '<username>',
                dc: '<dc>',
                u: '<u>',
                id:'<id>>'
            });
    })


  * Usage in controller



    .controller('MyController', function (CgMailChimpService) {

              $scope.chimp = {EMAIL:'john.conor@sky.net', FNAME: 'John', LNAME: 'Conor'};

              $scope.subscribe = function () {
                  CgMailChimpService.subscribe($scope.chimp).then(function (data) {
                      console.log('[Debug] success', data);

                  }, function (error) {
                      console.log('[Debug] failed', error);
                  });
    });

Contribution
---------------
Feel free to add feature you need.


Licence
-----------------
MIT



