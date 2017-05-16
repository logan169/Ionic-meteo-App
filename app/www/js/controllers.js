

angular.module('starter.controllers',[])

  .controller('ChercherCtrl',['$scope','$ionicLoading','$state','$http',function ($scope,$ionicLoading,$state,$http){

    // on affiche l'icone de chargement le temps de loader la liste des villes sous format json
    $ionicLoading.show({
      template: 'Chargement...'
    });

    // variable où l'on stock la liste des villes
    $scope.city = "";
    // lien vers le json
    $scope.citiesUrl = '/ressource/Unique_cities2.json';

    // on va chercher la liste de ville à afficher dans le fichier json
    $http.get($scope.citiesUrl)
      .then(
        function(res){
          // on retire le chargement
          $ionicLoading.hide();
          //on enregistre les villes de la liste dans $scope.cities
          $scope.cities = res.data;
          console.log('cities loaded');
        },
        function(res){
          //en cas de problème
          console.log('Problème dans le chargement de la liste des villes');
          console.log(res.message);
        });

    $scope.search = function(city){
      // on appelle la vue prévision en passant la ville en paramètre
      $state.go('Prevision', {city: city})
    }

  }])

  ///////////////////////////////////////////////////////////////////////////////

  .controller('PrevisionCtrl',['$scope','$state','$ionicLoading','$http','$stateParams',function ($scope,$state,$ionicLoading,$http,$stateParams){
    // variable pour verifier si la ville existe
    $scope.cityDefined = false;

    console.log("$scope.cityDefined",$scope.cityDefined);
    console.log("$stateParams.city",$stateParams.city);

    //url d'open weather pour les infos quotidiennes dans laquelle on passe la ville en param
    url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $stateParams.city + "&mode=json&units=metric&cnt=10&APPID=f5fbf26393c3d7c7c8f87dd6dc22b14b";

    // on affiche le chargement le temps de charger les prévisions
    $ionicLoading.show({
      template: 'Chargement...'
    });

    //on fait un http sur l'url d'openweathermap.org
    $http.get(url)
      .then(
        function(res){
          $scope.prevision = res.data;
          // on verifie que la ville cherchée existe en comparant la ville de la requete et de la reponse
          if($scope.prevision.city.name == $stateParams.city){
            $scope.city = $stateParams.city;
            $scope.cityDefined = true;

            $scope.trad($scope.prevision);

            /*
             console.log("$scope.prevision.city.name == $stateParams.city",$scope.prevision.city.name == $stateParams.city);
             console.log($scope.prevision.city.name);
             console.log("$scope.cityDefined",$scope.cityDefined);
             console.log("$stateParams.city",$stateParams.city);
             */

          }
          $ionicLoading.hide();
        },
        function(res){
          $ionicLoading.hide();
          console.log(res.message);
        }
      );

    $scope.Math = Math;

    //Fonction renvoyant vers la vue full prev si on clique sur une prevision
    $scope.getfp = function(row){
      row.city = $stateParams.city;
      // on appelle la vue prévision en passant la ville en paramètre
      $state.go('PrevisionFull', {row: row});

    };

    var l = $scope.prevision;
    console.log(l);

    //#12h30

    $scope.trad = function(){
      var dayDict = {
        0:'Dim',
        1:'Lun',
        2:'Mar',
        3:'Mer',
        4:'Jeu',
        5:'Ven',
        6:'Sam'
      };

      for (i=0;i<$scope.prevision.list.length;i++){
        var date = new Date($scope.prevision.list[i].dt*1000);
        var day = date.getDay();
        $scope.prevision.list[i].day = dayDict[day];

      }
    }
  }])

  //////////////////////////////////////////////////////////////////////////

  .controller('PrevisionFullCtrl',['$scope','$state','$stateParams',function ($scope,$state,$stateParams){

    $scope.item = $stateParams.row;
    console.log($scope.item);
    $scope.Math = Math;
    




  }]);

///////////////////////////////////////////////////////////////////////////////






