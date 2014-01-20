var zFetch = (function() {
	var  api;
	api = {
		fetch: function(url, options,callback) {
			callback(null,'halou,api');
            return this;
        },
	};
	 return api;
}());
module.exports = zFetch;