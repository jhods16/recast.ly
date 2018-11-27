import YOUTUBE_API_KEY from './config/youtube.js';

var options = {
  'key': YOUTUBE_API_KEY,
  'q': '',
  'part': 'snippet',
  'maxResults': '5',
  'type': 'videos',
  'videoEmbeddable': 'true'
};

var searchYouTube = (options, callback) => {
  // TODO
  //use jquery to send a get request to the search endpoint (/youtube/v3/search)
  //callback --> invoked with the videos array returned from the get request
  //options --> object with: query, max, key
  $.ajax({
    data: options,
    dataType: 'application/json',
    type: 'GET',
    url: 'https://googleapis.com/youtube/v3/search',
    success: function(data) {
      console.log(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
};




export default searchYouTube;
