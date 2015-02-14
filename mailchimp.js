angular.module('cg.mailchimp', [])

    .provider('CgMailChimpService', function () {
        var config = { username: '', dc: '', u: '', id:''};

        this.setConfig = function (cfg) {
            config = cfg;
        };

        this.$get = function ($http, $q) {

            var url = 'http://'+ config.username + '.'+config.dc +'.list-manage1.com/subscribe/post-json';

            return {
                subscribe: function (data) {
                    var defer = $q.defer();
                    var params = angular.extend(data, {u: config.u, id: config.id, c:'JSON_CALLBACK'});
                    $http({
                        url: url,
                        params: params,
                        method: 'JSONP'
                    }).then(function (data) {
                        if(data.data.result === 'success')
                            defer.resolve(data.data);
                        else
                            defer.reject(data.data);

                    }, function (err) {
                        defer.reject(err)
                    });

                    return defer.promise;
                }
            }
        }
    });