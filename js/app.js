function Row() {
	this.length = 0;
	this.width  = 0;
	this.height = 0;
	this.volume = 0;
}
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
	rows: []
  },
  methods: {
	  addRow: function() {
		this.rows.push( new Row() );
	  }
  }
});
