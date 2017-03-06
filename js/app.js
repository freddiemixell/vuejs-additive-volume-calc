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
	rows: [],
	totalVolume: 0
  },
  methods: {
	  addRow: function() {
		this.rows.push( new Row() );
	  },
	  removeRow: function( row ) {
		this.rows.splice(this.rows.indexOf(row), 1)
		this.updateTotalVol();
	  },
	  calcVol: function( row ) {
		  row.volume = row.length * row.width * row.height;
		  this.updateTotalVol();
	  },
	  updateTotalVol: function() {
		  this.totalVolume = this.calcTotalVol();
	  },
	  calcTotalVol: function() {
		  var totalVolume = 0;
		  this.rows.forEach(function (row) {
			  totalVolume += row.volume;
		  });
		  return totalVolume;
	  }
  }
});
