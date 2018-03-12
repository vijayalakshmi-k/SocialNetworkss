/**
 *    BlogService
 */
app.factory('BlogService',function($http)
		
{
var blogService={}	
blogService.addBlog=function(blog)
{
return $http.get("http://localhost:9080/ScocialNetworksMiddle/addblogpost",blog)
}


blogService.getBlogsWaitingForApproval=function()
{
return $http.get("http://localhost:9080/ScocialNetworksMiddle/getblogs/"+0)
}

blogService.getBlogsApproved=function()
{
return $http.get("http://localhost:9080/ScocialNetworksMiddle/getblogs/"+1)
}

blogService.getBlog=function()
{
return $http.get("http://localhost:9080/ScocialNetworksMiddle/getblog/"+id)
}


blogService.getBlog=function()
{
return $http.get("http://localhost:9080/ScocialNetworksMiddle/hasuserLikesblog/"+id)
}




blogService.approve=function(blog)
{
	//blog.approved=0
return $http.put("http://localhost:9080/ScocialNetworksMiddle/approve",blog)
//blog.approved=1
}
blogService.reject=function(blog,rejectionReason)
{
	//blog.approved=0
return $http.put("http://localhost:9080/ScocialNetworksMiddle/reject/"+rejectionReason,blog)
//blog recored will get deleted
}

blogService.updateLikes=function(id)
{
	//blog.approved=0
return $http.put("http://localhost:9080/ScocialNetworksMiddle/updatelikes/"+id);
//blog recored will get deleted
}


blogService.addComment=function(blogComment)
{
return $http.post("http://localhost:9080/ScocialNetworksMiddle/addComments",blogComment);
}




return blogService;

})