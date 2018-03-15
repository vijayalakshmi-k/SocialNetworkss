/**
 * 
 */
app.factory('FriendService',function($http) {
					var friendService = {}

					friendService.getAllSuggestedUsers = function() {
						
						return $http.get("http://localhost:9080/ScocialNetworksMiddle/suggestedusers")

					}
					return friendService;
				}

		)