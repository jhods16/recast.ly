var searchYouTube = (options, callback) => {
  // TODO
  //use jquery to send a get request to the search endpoint (/youtube/v3/search)
  //callback --> invoked with the videos array returned from the get request
  //options --> object with: query, max, key
  $.ajax({
    data: options,
    dataType: 'jsonp',
    contentType: 'application/json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
};




export default searchYouTube;
