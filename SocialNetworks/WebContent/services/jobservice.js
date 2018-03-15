/**
 * 
 */
app.factory('JobService', function($http) {
	var jobServices = {}

	jobService.addJob = function(job) {

		return $http.post("http://localhost:8091/ScocialNetworksMiddle/addjob",job)
	}

	jobService.getAllJobs = function() {

		return $http.post("http://localhost:8091/ScocialNetworksMiddle/alljobs")
	}
	
	
	jobService.getJob = function() {

		return $http
				.get("http://localhost:8091/ScocialNetworksMiddle/getjobs/" +id)
	}



	return jobServices;
})
