angular.module('app.controllers', [])

  .controller('tourCtrl', function($scope) {

  })

  .controller('personCtrl', function($scope,$ionicModal,$timeout,Items,$ionicFilterBar) {

    //var arrUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    //var arrLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    document.getElementById("a").onclick = function() {
      document.getElementById("A").scrollIntoView();
    };
    document.getElementById("b").onclick = function() {
      document.getElementById("B").scrollIntoView();
    };
    document.getElementById("c").onclick = function() {
      document.getElementById("C").scrollIntoView();
    };
    document.getElementById("d").onclick = function() {
      document.getElementById("D").scrollIntoView();
    };
    document.getElementById("e").onclick = function() {
      document.getElementById("E").scrollIntoView();
    };
    document.getElementById("f").onclick = function() {
      document.getElementById("F").scrollIntoView();
    };
    document.getElementById("g").onclick = function() {
      document.getElementById("G").scrollIntoView();
    };
    document.getElementById("h").onclick = function() {
      document.getElementById("H").scrollIntoView();
    };
    document.getElementById("j").onclick = function() {
      document.getElementById("J").scrollIntoView();
    };
    document.getElementById("k").onclick = function() {
      document.getElementById("K").scrollIntoView();
    };
    document.getElementById("l").onclick = function() {
      document.getElementById("L").scrollIntoView();
    };
    document.getElementById("m").onclick = function() {
      document.getElementById("M").scrollIntoView();
    };
    document.getElementById("n").onclick = function() {
      document.getElementById("N").scrollIntoView();
    };

    document.getElementById("o").onclick = function() {
      document.getElementById("O").scrollIntoView();
    };

    document.getElementById("p").onclick = function() {
      document.getElementById("P").scrollIntoView();
    };
    document.getElementById("q").onclick = function() {
      document.getElementById("Q").scrollIntoView();
    };
    document.getElementById("r").onclick = function() {
      document.getElementById("R").scrollIntoView();
    };
    document.getElementById("s").onclick = function() {
      document.getElementById("S").scrollIntoView();
    };
    document.getElementById("t").onclick = function() {
      document.getElementById("T").scrollIntoView();
    };
    document.getElementById("w").onclick = function() {
      document.getElementById("W").scrollIntoView();
    };
    document.getElementById("y").onclick = function() {
      document.getElementById("Y").scrollIntoView();
    };
    document.getElementById("z").onclick = function() {
      document.getElementById("Z").scrollIntoView();
    };



    //新建联系人
    $ionicModal.fromTemplateUrl('templates/createPerson.html',{
      scope:$scope,
      animation: 'slide-in-up'
    })
      .then(function(modal) {
        $scope.modal = modal;
      });
    $scope.createPerson = function() {
      $scope.modal.show();
    };
    $scope.closePerson = function() {
      $scope.modal.hide();
    };

    // Perform the login action when the user submits the login form
    $scope.doCreate = function () {
      console.log('Doing create');

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closePerson();
      }, 1000);
    };

    $scope.items =Items.all();
    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.items,
        update: function (filteredItems, filterText) {
          $scope.items = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };


    //搜索按钮状态
    $scope.searchStatus=false;

    //删除按钮状态
    $scope.show={
      delete:false
    };
    $scope.deleteItem=function(item){
      var idx = $scope.items.indexOf(item);
      $scope.items.splice(idx,1);
    };

    $scope.call=function(){
      window.location.href='tel:10086';
    };
    $scope.message=function(){
      window.location.href='sms:10086';
    };

  })

  .controller('homeCtrl', function($scope,$stateParams,Items) {

    $scope.item = Items.get($stateParams.itemId);

    $scope.check = false;
    $scope.uncheck = true;
    $scope.changeIcon = function() {
      $scope.check = !$scope.check;
      $scope.uncheck = !$scope.uncheck;
    }
  })



  .controller('myCtrl', ['$scope', '$rootScope', '$cordovaCamera','$ionicActionSheet', function($scope, $rootScope, $cordovaCamera,$ionicActionSheet) {

    $scope.ready = false;
    $scope.images = [];
    // 图片选择项
    $scope.showImageUploadChoices = function() {
      $ionicActionSheet.show({
        buttons: [{
          text: '<b>拍照</b> 上传'
        }, {
          text: '从 <b>相册</b> 中选'
        }],
        titleText: '图片上传',
        cancelText: '取 消',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          //alert(index);
          if (index == 1) {
            $scope.selImages();
          } else if (index == 0) {
            // 拍照上传
            $scope.takePicture();
          }
          return true;
        }
      });

    };

    $rootScope.$watch('appReady.status', function() {
      console.log('watch fired '+$rootScope.appReady.status);
      if($rootScope.appReady.status) $scope.ready = true;
    });

    $scope.takePicture = function () {
      var options = {
        quality: 75,
        targetWidth: 40,
        targetHeight: 40,
        saveToPhotoAlbum: true
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageUri) {
        console.log(imageUri);
        $scope.images.push(imageUri);
      }, function (err) {
        console.log('Failed because: ');
        console.log(err);
      });
    };

    $scope.selImages = function() {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 40,
        targetHeight: 40
      };

      $cordovaCamera.getPicture(options).then(function(imageUri) {
        console.log('img', imageUri);
        $scope.images.push(imageUri);

      }, function(err) {
        // error
        console.log('Failed because: ');
        console.log(err);
      });

    };

  }]);







