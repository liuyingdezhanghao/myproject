/*
* @Author: huoqishi
* @Date:   2016-07-30 16:18:46
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-30 17:12:28
*/

(function(angular){
  'use strict';
  // 1.创建详情页模块
 var app = angular.module('moviecat.details',['ngRoute','moviecat.jsonp']);


  // 2. 配置路由规则
  app.config(['$routeProvider',function($routeProvider){
     $routeProvider.when('/details/:id',{
      templateUrl:'./details/view.html',
      controller:'detailsController'

     })


  }])

  // 3.创建详情页控制器
  app.controller('detailsController',[
    '$scope','$routeParams','MyService',function($scope,$routeParams,MyService){
      MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,null,function(data){
        // console.log(data);
        $scope.data=data;
        $scope.$apply();
      });
  }]);
})(angular);