// register modal component
Vue.component('modal', {
  props: ['name', 'points'],
  template: '#modal-template',
  data: {
    message: 'hello'
  }
})

var app = new Vue({
  el: '#app',
  data: {
    data: {},
    settings: {},
    maxHeight: 1000,
    showModal: false

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





