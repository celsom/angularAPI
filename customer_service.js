'use strict';
 
App.factory('CustomerService', ['$http', '$q', function($http, $q){
 
    return {
         
    fetchAllUsers: function() {
            return $http.get('http://127.0.0.1:3000/customer/')
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while fetching users');
                        return $q.reject(errResponse);
                    }
            );
        },
     
    createUser: function(customer){
            return $http.post('http://127.0.0.1:3000/customer/', customer)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while creating user');
                        return $q.reject(errResponse);
                    }
            );
        },
     
    updateUser: function(customer, Id){
            return $http.put('http://127.0.0.1:3000/customer/'+Id, customer)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while updating user');
                        return $q.reject(errResponse);
                    }
            );
        },
     
   deleteUser: function(Id){
            return $http.delete('http://127.0.0.1:3000/customer/'+Id)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while deleting user');
                        return $q.reject(errResponse);
                    }
            );
        }
         
    };
 
}]);