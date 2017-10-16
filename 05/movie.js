function done(data){
  console.log('done:', data)
}


var getJSON = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };

    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();

function load(){
  getJSON('http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170801&endDate=20171013&pageSize=10&callback=done&pageNo=', done) //*
}