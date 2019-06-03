var app = new Vue({
  el: "#app",
  data: {
    hours: "",
    minutes: "",
    result: ""
  },
  methods: {
    update: function() {
      var h = parseFloat(this.hours || 0);
      var m = parseFloat(this.minutes || 0);
      this.result = (h + m / 60).toFixed(2);
    }
  }
});
