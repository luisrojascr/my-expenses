angular.module('starter.services', [])
/**
 * A simple example service that returns some data.
 */
.factory('fireBaseData', function($firebase) {
  var ref = new Firebase("https://blistering-heat-6651.firebaseio.com/"),
      refExpenses = new Firebase("https://blistering-heat-6651.firebaseio.com/expenses"),
      refRoomMates = new Firebase("https://blistering-heat-6651.firebaseio.com/room-mates");
  return {
    ref: function () {
      return ref;
    },
    refExpenses: function () {
      return refExpenses;
    },
    refRoomMates: function () {
      return refRoomMates;
    }
  }
});