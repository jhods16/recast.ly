var searchYouTube = (options, callback) => {
  // TODO
  //use jquery to send a get request to the search endpoint (/youtube/v3/search)
  //callback --> invoked with the videos array returned from the get request
  //options --> object with: query, max, key
  $.ajax({
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    contentType: 'application/json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      callback(data.items);
    },
    error: function(err) {
      console.error("our error:", err);
    }
  });
};



export default searchYouTube;
