Angular mailchimp subscribe
=============

Easy Mailchimp Subscription module. With no form or jquery bullshit.

Insall
------------
```
bower install angular-mailchimp-subscribe
```

Usage
-------------

  * config :

  You can retrieve your config form the mailchimp form exemple :

```
  http://<username>.<dc>.list-manage1.com/subscribe/post?u=<key>&id=<id>
```

    angular.module('app', ['cg.mailchimp'])
    .config(function (CgMailChimpServiceProvider) {

        CgMailChimpServiceProvider.setConfig({
                username: '<username>',
                dc: '<dc>',
                u: '<key>',
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



