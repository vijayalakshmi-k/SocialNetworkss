/**
 * JobController
 */

    app.controller('JobCtrl', function($scope, $rootScope, $location, JobServices) {
	var id=$routeParams.id
	//call this function from jobform.html
	$Scope.addJob = function(job) {
		JobService.addJob(job).then(function(response) {
			alert('Job details posted successfully..')
			
			$location.path('/alljobs')
		}, function(response) {
			// 3 return statement for error
			// 1.not authenticated..not authorized--401
			$rootScope.error = response.data
			if (response.status == 401)
				$location.path('/login')
		})

		JobService.getAllJobs().then(function(response) {
			$scope.jobss = response.data
		}, function(response) {
			$rootScope.error = response.data
			if (response.status == 401) // not logged in
				$location.path('/login')
		})
		
		
		JobService.getJob().then(function(response) {
			$scope.jobss = response.data
		}, function(response) {
			$rootScope.error = response.data
			if (response.status == 401) // not logged in
				$location.path('/login')
		})
		
		if (id != undefined) {
			jobService.getJob(id).then(function(response) {
				$scope.job = response.data
			}, function(response) {

				$rootScope.error = response.data
				if (response.status == 401) // not logged in
					$location.path('/login')
			})
		}

	}
})
