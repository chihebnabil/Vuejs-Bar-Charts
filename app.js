// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

var app = new Vue({
  el: '#app',
  data: {
    data: {},
    settings: {},
    maxHeight: 1000,
    showModal: false,
    cBar : {}

  },
  filters: {
    moment: function (date) {
      return moment(date).format('MM/DD/YYYY');
    }
  }
  ,
  methods: {
    moment: function () {
      return moment();
    },
    getFullName: function (index) {
      if(index == 0 ){
      return this.settings.dictionary.john.firstname +"  "+ this.settings.dictionary.john.lastname;

      }else{
              return this.settings.dictionary.larry.firstname +"  "+ this.settings.dictionary.larry.lastname;

      }
    },
    setModal: function (player,date,points) {
      this.cBar.player = this.getFullName(player)
      this.cBar.points = points
      this.cBar.date = date
    },

    getPercent: function (height) {
      // console.log('getPercent(%o)', height);
      return this.maxHeight > 0 ? Math.ceil(height * 100 / this.maxHeight) : 0;
    },
    loadData: function () {
      var url = "data.json"
      this.$http.get(url).then(function (response) {

        this.data = response.body.data;
        this.settings = response.body.settings;

      }, function (error) {
        console.log(error.statusText);
      });
    }

  }
  ,
  created: function () {
    this.loadData();

  },
  mounted: function () {

  }
})





