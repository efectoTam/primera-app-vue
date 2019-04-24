var app =  new Vue({
  el: '.vue',
  data: {
    mensaje: 'Aprende Vue.js fácilmente',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
  },
  methods: {
    mostrarMensaje: function() {
      return this.mensaje;
    }
  }
})