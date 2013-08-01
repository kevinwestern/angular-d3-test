app.controller('foodctrl', ['$scope', function($scope) {
  var foods = [{
    date: '2013-07-02',
    meals: [{
      time: '8:30',
      items: [{
        name: 'eggs',
        protein: 24,
        calories: 100,
        carbs: 10
      }, {
        name: 'bacon',
        protein: 15,
        calories: 120,
        carbs: 12
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  }, {
    date: '2013-07-03',
    meals: [{
      time: '8:45',
      items: [{
        name: 'oatmeal',
        protein: 5,
        calories: 65,
        carbs: 50
      }, {
        name: 'prtein',
        protein: 25,
        calories: 120,
        carbs: 90
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  }, {
    date: '2013-07-04',
    meals: [{
      time: '8:30',
      items: [{
        name: 'eggs',
        protein: 24,
        calories: 100,
        carbs: 10
      }, {
        name: 'bacon',
        protein: 15,
        calories: 120,
        carbs: 12
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  },{
    date: '2013-07-05',
    meals: [{
      time: '8:30',
      items: [{
        name: 'eggs',
        protein: 24,
        calories: 100,
        carbs: 10
      }, {
        name: 'bacon',
        protein: 15,
        calories: 120,
        carbs: 12
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  },{
    date: '2013-07-06',
    meals: [{
      time: '8:30',
      items: [{
        name: 'eggs',
        protein: 24,
        calories: 100,
        carbs: 10
      }, {
        name: 'bacon',
        protein: 15,
        calories: 120,
        carbs: 12
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  },{
    date: '2013-07-07',
    meals: [{
      time: '8:30',
      items: [{
        name: 'eggs',
        protein: 24,
        calories: 100,
        carbs: 10
      }, {
        name: 'bacon',
        protein: 15,
        calories: 120,
        carbs: 12
      }]
    }, {
      time: '11:45',
      items: [{
        name: 'pork',
        protein: 16,
        calories: 50,
        carbs: 10
      }, {
        name: 'cauliflower',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '15:30',
      items: [{
        name: 'protein',
        protein: 24,
        calories: 92,
        carbs: 15
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }, {
      time: '18:00',
      items: [{
        name: 'chicken',
        protein: 24,
        calories: 50,
        carbs: 10
      }, {
        name: 'broccoli',
        protein: 2,
        calories: 5,
        carbs: 5
      }]
    }]
  }];


  $scope.getTime = function() {
    if ($scope.period == 'month') {
      return foods.map(function(day) {
        return day.date;
      });
    }
  };

  $scope.getNutrientType = function(type) {
    if ($scope.period == 'month') {
      return foods.map(function(day) {
        return day.meals.reduce(function(prevMeal, meal) {
          return prevMeal + meal.items.reduce(function(prev, curr) {
            return prev + curr[type];
          }, 0);
        }, 0)
      });
    }
  };

  $scope.zoomTo = function(period) {
    console.log(period);
  };

  $scope.periods = ['month', 'day'];
  $scope.period = 'month';
  $scope.time = $scope.getTime();
  $scope.nutrients = $scope.getNutrientType('calories');
}]);