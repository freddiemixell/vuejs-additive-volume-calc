function Row() {
	this.length = '';
	this.width  = '';
	this.height = '';
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
