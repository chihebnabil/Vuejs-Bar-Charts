Vue.component('chart-item', {
  props: ['height', 'title'],
  template: `<li  style='height: {height} ;' title=' { title } '>
 <div class="skill"> {{ title }} </div></li>`
})

var app = new Vue({
  el: '#app',
  data: {
    data: {},
    settings: {},
    maxHeight: 0,
    colors: []

  },
  methods: {
    getColor: function (type) {
      return this.colors[type];
    },
    getPercent: function (height) {
      // console.log('getPercent(%o)', height);
      return this.maxHeight > 0 ? Math.ceil(height * 100 / this.maxHeight) : 0;
    },
    getHeight: function (bar) {
      // console.log('getHeight(%o)', bar.value);
      var height = this.getPercent(bar.value);

      return (height > 0 && height < 4 ? '4px' : height + '%');
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





