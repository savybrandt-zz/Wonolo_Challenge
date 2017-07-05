export default function distributeRows(data, cols) {
	  var rows = (data.length + (cols - (data.length % cols)) ) / cols;
		var sets = [];

	  for(var i = 0; i < rows; i++) {
	  	var tiles = [];
	  	for(var j = (i * cols); j < (i * cols) + cols; j++) {
	  		tiles.push(data[j]);
	  	}
			sets.push(tiles)
		}
		return sets;
	}
