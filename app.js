Vue.component('chart-item', {
  props: ['height','title'],
  template: '<li  style="height: {height} ;" title='+ {{title}} + '><div class="percent">{{height}}<span>%</span></div><div class="skill">Karate</div></li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    groceryList: [
      { text: 'Vegetables' }
    ]
  },
  methods: {

    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }

  }
})





