angular.module('app.services', [])
/**
 * 拍照功能
 */
  .factory('Camera', function($q) {
    return {
      getPicture: function(options) {
        var q = $q.defer();
        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  })
///**
// * Upyun认证数据
// */
//  .factory('Upyun', function($http) {
//    return {
//      token: function(name, size) {
//        return $http.jsonp("http://transfer.impress.pw/upyun?callback=JSON_CALLBACK", {
//          cache: false
//        });
//      }
//    }
//  })

.factory('Items', function(){
    var items = [{
      id: 0,
      name: 'Wicky',
      telphone: 12345678910,
      face: 'img/wicky.png',
      signature:'hahahahaha'
    }, {
      id: 1,
      name: 'LiuDanyu',
      telphone: 12345678911,
      face: 'img/liudanyu.png',
      signature:'hahahahaha'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      telphone: 12345678912,
      face: 'img/adam.jpg',
      signature:'hahahahaha'
    }, {
      id: 3,
      name: 'Perry Governor',
      telphone: 12345678910,
      face: 'img/perry.png',
      signature:'hahahahaha'
    }, {
      id: 4,
      name: 'Mike Harrington',
      telphone: 12345678918,
      face: 'img/mike.png'
    },{
      id: 5,
      name: 'Cheer Harrington',
      telphone: 12345678910,
      face: 'img/mike.png',
      signature:'hahahahaha'
    },{
      id: 6,
      name: 'JiaYuzhuo',
      telphone: 12345678910,
      face: 'img/jiayuzhuo.jpg',
      signature:'hahahahaha'
    },{
      id: 7,
      name: 'ZhangXuanwei',
      telphone: 12345678910,
      face: 'img/zhangxuanwei.jpg',
      signature:'hahahahaha'
    },{
      id: 8,
      name: 'ZhangYao',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    },{
      id: 9,
      name: 'Demo',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    },{
      id: 9,
      name: 'Kisa',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    },{
      id: 10,
      name: 'Staff',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    },{
      id: 11,
      name: 'YangDonghui',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    },{
      id: 12,
      name: 'Tina',
      telphone: 12345678910,
      face: 'img/zhangyao.jpg',
      signature:'hahahahaha'
    }];
    return {
      all: function() {
        return items;
      },

      get: function(itemId) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].id === parseInt(itemId)) {
            return items[i];
          }
        }
        return null;
      }
    };

})

  //.factory('PersonService', function ($http) {
  //  var BASE_URL = "http://api.randomuser.me/";
  //  var items = [];
  //
  //  return {
  //    GetFeed: function () {
  //      return $http.get(BASE_URL + '?results=30').then(function (response) {
  //        items = response.data.results;
  //        return items;
  //      });
  //    }
  //  }
  //})


  .service('BlankService', [function(){

}]);

