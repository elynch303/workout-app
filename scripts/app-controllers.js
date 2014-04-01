window.myApp = this.angular.module('myApp', []);
window.ScopeSelet = function(selector){
    return angular.element(selector).scope();
};


//Global Vars if vars gets to bigg move to new file 
// remember workout is the whole rutien("Back day") and exsersise is one action(Eg."abb duck tuck up")
var monthDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var daysWorkout = [1,2,3,4,5,6,7];
var workouts =  [
  {workout:"Back", done:false, day:1},
  {workout:"Strangth", done:false, day:2},
  {workout:"Vert", done:false, day:3},
  {workout:"Speed", done:false, day:4},
  {workout:"Rest", done:false, day:5},
  {workout:"Rest", done:false, day:6},
  {workout:"Rest", done:false, day:7}
  ];

// angular.js controls for adding and removing workouts
myApp.controller('workoutsCtrl', function($scope) {
  $scope.workouts = workouts;
  
  $scope.addWorkout = function() {
    $scope.workouts.push({workout:$scope.workoutText, done:false , day:$scope.workouts.length+1});
    $scope.workoutText = '';
  };
 
  $scope.remove = function() {
    var oldWorkouts = $scope.workouts;
    $scope.workouts = [];
    angular.forEach(oldWorkouts, function(workout) {
      if (!workout.done) $scope.workouts.push(workout);
    });
  };
});


// angular.js controls for making the calander
myApp.controller('MyCtrl', function($scope) {
    var dates = [];
    for (var i = 0; i < monthDays.length; i++ ) {
        if (i % 7 == 0) dates.push([]);
        dates[dates.length-1].push(monthDays[i]);
    }
  return $scope.dates = dates;
});

// other controllers 
//print new workout order
function printShuffle(){ 
  //call shuffle
  shuffle(workouts);
  // print new array order in row
  for(var i=0; i<daysWorkout.length; i++) {  
    //wright valu out un table
    $(".workout"+i).html(workouts[i]['workout']);
  }
}

//shuffles and array 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle
  while (0 !== currentIndex) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
