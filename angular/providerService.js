/**
 * Created by wyunfei on 2017/2/23.
 */
var m1 = angular.module('module1', []);
m1.provider('myService', function () {

    return {
        name: 'hello',
        $get: function () {
            return {
                name: this.name,
                show: function () {
                    return this.name + 'angular';
                }
            }
        }
    }
});
