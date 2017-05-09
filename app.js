Vue.component('chart-item', {
  props: ['height', 'title'],
  template: `<li  style='height: {height} ;' title=' { title } '>
  <div class="percent">{{height}}<span>%</span></div><div class="skill">{{title}}</div></li>`
})

var app = new Vue({
  el: '#app',
  data: {
    data: {},
    settings: {},

  },
  methods: {

    loadData: function () {
      var myUrl = "data.json"
      this.$http.get(myUrl).then(function (response) {
        this.data = response.body.data;
        this.settings = response.body.settings;
        console.log(this.data)
      }, function (error) {
        console.log(error.statusText);
      });
    }

  }
  ,
  mounted: function () {
    this.loadData();
  }
})





