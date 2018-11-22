'use strict';
 
App.controller('AppController', ['$scope', 'CustomerService', function($scope, CustomerService) {
          var self = this;
          self.customer={Id:null,Name:'',Address:''};
          self.customers=[];
               
          self.fetchAllUsers = function(){
              CustomerService.fetchAllUsers()
                  .then(
                               function(d) {
                                    self.customers = d;
                               },
                                function(errResponse){
                                    console.error('Error while fetching Currencies');
                                }
                       );
          };
            
          self.createUser = function(customer){
              CustomerService.createUser(customer)
                      .then(
                      self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while creating User.');
                              } 
                  );
          };
 
         self.updateUser = function(customer, Id){
              CustomerService.updateUser(customer, Id)
                      .then(
                              self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while updating User.');
                              } 
                  );
          };
 
         self.deleteUser = function(Id){
              CustomerService.deleteUser(Id)
                      .then(
                              self.fetchAllUsers, 
                              function(errResponse){
                                   console.error('Error while deleting User.');
                              } 
                  );
          };
 
          self.fetchAllUsers();
 
          self.submit = function() {
              if(self.customer.Id===null){
                  console.log('Saving New User', self.customer);    
                  self.createUser(self.customer);
              }else{
                  self.updateUser(self.customer, self.customer.Id);
                  console.log('User updated with id ', self.customer.Id);
              }
              self.reset();
          };
               
          self.edit = function(Id){
              console.log('id to be edited', Id);
              for(var i = 0; i < self.customers.length; i++){
                  if(self.customers[i].Id === Id) {
                     self.customer = angular.copy(self.customers[i]);
                     break;
                  }
              }
          }
               
          self.remove = function(Id){
              console.log('id to be deleted', Id);
              if(self.customer.Id === Id) {//clean the form if the user to be deleted is shown there.
                  self.reset();
              }
              self.deleteUser(Id);
          }
 
          self.reset = function(){
              self.customer={Id:null,Name:'',Address:''};
              $scope.myForm.$setPristine(); //reset Form
          }
 
      }]);