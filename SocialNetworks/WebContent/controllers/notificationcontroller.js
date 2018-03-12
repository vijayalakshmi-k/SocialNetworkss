/**
 * 
 */
       app.controller('NotificationsCtrl', function($scope, $rootScope, $location,NotificationService){
       function getNotificationsNotViewed(){
       NotificationService.getNotificationNotViewed().then(
		function(response)
        {
		$rootScope.notification=response.data
		$rootScope.notificationCount=$rootScope.notifications.length
},
                   function(response)
                   {
					$rootScope.error=response.data  //ErrorClazzObject
					if(response.status==401)
						$location.path('/login')
				})
             }


      if (id != undefined) {
	//two statements
	//select * from notification where id=?
	//update notification set viewed=1 where id=?


	NotificationService.getNotification(id).then
	(function(response) {
		$scope.notification = response.data
	}, function(response) {

		$rootScope.error = response.data  //ErrorClazz object
		if (response.status == 401) // not logged in
			$location.path('/login')
	})

    NotificationService.updateNotification(id).then(function(response){
		getNotificationsNotViewed()
	},function(response){
		
		$rootScope.error = response.data  //ErrorClazz object
		if (response.status == 401) // not logged in
			$location.path('/login')

	})

    }
getNotificationNotViewed()

       })