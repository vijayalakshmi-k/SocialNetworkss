/**
 * 
 */
app.factory('NotificationService',function($http)
		
{
var notificationService={}
notificationService .getNotificationsNotViewed=function()
{
	
	return $http.get("http://localhost:9080/ScocialNetworksMiddle/getnotifications")

}

notificationService .getNotifications=function(id)
{
	
	return $http.get("http://localhost:9080/ScocialNetworksMiddle/getnotifications/"+id)

}

notificationService .getNotificationsNotViewed=function()
{
	
	return $http.get("http://localhost:9080/ScocialNetworksMiddle/updatenotifications/"+id)

}

return notificationService;
})