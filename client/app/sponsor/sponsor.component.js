'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './sponsor.routes';

export class sponsorController {
  /*@ngInject*/

  constructor($scope,$http) {
    this.$http = $http;
    this.$scope = $scope;
    this.addform = true;
    this.editform = false;
    $scope.addTab= 'active';
    $scope.editTab= 'default';
    this.gettypes();
  }

  $onInit() {
  }

  gettypes() {
    this.$http.get('/api/sponsorTypes/').then(res => {
       var types = [];
       for(var i=0;i<res.data.length;i++)
       {
         types.push(res.data[i].sponsor_type);
       }
       this.$scope.types = types;
    });
  }

  beginstep2(){
    this.step2 = true;
    this.$http.get('/api/sponsors/').then(res => {
       var types = [];
       for(var i=0;i<res.data.length;i++)
       {
         if(res.data[i].type === this.newsponsor.type)
         types.push(res.data[i].name);
       }
       this.$scope.sponsors = types;
    });
  }

  beginstep3(){
    this.step3 = true;
    this.$http.get('/api/sponsors/' + this.newsponsor.name).then(res => {
           this.newsponsor = res.data;
    });
  }

  beginstep2type(){
    this.step2 = true;
    this.$http.get('/api/sponsorTypes/' + this.newtype.sponsor_type).then(res => {
           this.newtype = res.data;
    });
  }

  add() {
    this.addform = true;
    this.editform = false;
    this.deleteform = false;
    this.newsponsor = null;
    this.newtype = null;
    this.$scope.addTab='active';
    this.$scope.editTab='default';
    this.$scope.deleteTab='default';
    this.success = null;
    this.error = null;
  }

  edit() {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.newsponsor = null;
    this.newtype = null;
    this.addform = false;
    this.editform = true;
    this.deleteform = false;
    this.$scope.addTab='default';
    this.$scope.editTab='active';
    this.$scope.deleteTab='default';
    this.success = null;
    this.error = null;
  }

  delet() {
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.newsponsor = null;
    this.newtype = null;
    this.$scope.addTab='default';
    this.$scope.editTab='default';
    this.$scope.deleteTab='active';
    this.success = null;
    this.error = null;
    this.addform = false;
    this.editform = false;
    this.deleteform = true;
  }

  update() {
    this.$http.put('/api/sponsors/' + this.newsponsor._id,this.newsponsor).then(res => {
      if(res.status === 200)
       {
          this.newsponsor = null;
          this.step1 = true;
          this.step2 = false;
          this.step3 = false;
          this.success = 'Successfully Updated Sponsor';
       }
       else {
         this.error = 'Error Updating Sponsor';
       }
    });
  }

  updatetype() {
    this.$http.put('/api/sponsorTypes/' + this.newtype._id,this.newtype).then(res => {
      if(res.status === 200)
       {
          this.newtype = null;
          this.step1 = true;
          this.step2 = false;
          this.step3 = false;
          this.success = 'Successfully Updated Sponsor Type';
          this.gettypes();
       }
       else {
         this.error = 'Error Updating Sponsor Type';
       }
    });
  }

  addsponsor() {
    this.$http.post('/api/sponsors/',this.newsponsor).then(res => {
      if(res.status === 201)
      {
        this.$http.put('/api/sponsorTypes/sponsors/' + this.newsponsor.type, {id: res.data._id}).then(res => {
          if(res.data.success === true)
          {
            var formData = new FormData;
            var file = $('#file')[0].files[0];
            formData.append('uploadedFile', file);
            this.$http.post('/api/uploads/sponslogo/'+this.newsponsor.name, formData, {

              transformRequest: angular.identity,
              headers: {
                'Content-Type': undefined
              }
            }).then(response => {
              console.log(response)
              if(response.data.success === false)
              {
                this.error = response.data.msg;
                this.success = false;
              }
              else {
                this.success = 'Sponsor Added';
                  this.newsponsor = null;
                this.error = false;
                angular.element("input[name='file']").val(null);
                angular.element("input[name='file_name']").val(null);
              }
            });
          }
        });
     }
     else {
       this.error = 'Error Creating Sponsor';
     }
    });
  }

  addsponsortype() {
    this.$http.post('/api/sponsorTypes/',this.newtype).then(res => {
      if(res.status === 201)
      {
        this.newtype = null;
        this.success = 'Successfully Created Sponsor Type';
        this.gettypes();
     }
     else {
       this.error = 'Error Creating Sponsor Type';
     }
    });
  }

  deletesponsor() {
    this.$http.delete('/api/sponsors/'+this.newsponsor.name).then(res => {
      if(res.status === 204)
      {
        this.newsponsor = null;
        this.success = "Successfully deleted";
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
      }
      else {
        this.error = "Error in deletion";
      }
    });
  }

  deletesponsortype() {
    this.$http.delete('/api/sponsortypes/'+this.newtype.sponsor_type).then(res => {
      if(res.status === 204)
      {
        this.newtype = null;
        this.success = "Successfully deleted";
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.gettypes();
      }
      else {
        this.error = "Error in deletion";
      }
    });
  }

}

export default angular.module('eventsPortalApp.sponsor', [uiRouter])
  .config(routing)
  .component('sponsor', {
    template: require('./sponsor.html'),
    controller: sponsorController,
    controllerAs: 'sponsor'
  })
  .name;
