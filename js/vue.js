var app =  new Vue({
  el: '.vue',
  data: {
    mensaje: 'Aprende Vue.js fácilmente'
  },
  methods: {
    mostrarMensaje: function() {
      return this.mensaje;
    }
  }
})