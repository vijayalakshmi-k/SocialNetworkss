/**
 * 
 */
app.factory('UserService',function($http)
		
{
var userService={}	
userService.registerUser=function(user) // get user all the details from the
										// controller frontend
{
	alert('Entering userservice registeruserfunction user')
	// format of users -JSON
	console.log('in userservice')
	console.log(user)
	return $http.post("http://localhost:9080/ScocialNetworksMiddle/registeruser",user)    //http://localhost:9080/ScocialNetworksMiddle/
	}

  userService.login=function(user)
 {
	alert('entering userservice loggeinfunction user')
	console.log('in userservice')
	console.log(user)
	return $http.post("http://localhost:9080/ScocialNetworksMiddle/login",user)

}
userService.logout=function()
{
	
return $http.put("http://localhost:9080/ScocialNetworksMiddle/logout")
}
  userService.getUser=function()
 {
	return $http.get("http://localhost:9080/ScocialNetworksMiddle/getUser")
	
 }

 userService.updateUser=function(user)
 {
	return $http.put("http://localhost:9080/ScocialNetworksMiddle/updateUser",user)
	
 }

 return userService;
})

