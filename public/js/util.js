
var Util = {
	refreshData: function(_el){
		var self = this;
	    x = 1;  // x = seconds
	 	var d = new Date()
	 	var h = d.getHours();
	 	var m = d.getMinutes();
	 	var s = d.getSeconds();
	 	
	 	if (h<=9) {h = '0'+h};
	 	if (m<=9) {m = '0'+m};
		if (s<=9) {s = '0'+s};
		
	 	var	color = '#'+ h + m + s;
	 	var time = h + ":" + m + ":" + s;
	 	time = color;
	    $("body").css("background-color", color );
	    _el.text(time);
	     
	    setTimeout(function(){
	    	self.refreshData(_el);
	    }, x*1000);
	},
}
