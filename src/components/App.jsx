import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here </h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video = {exampleVideoData[0]} />
      </div>
      <div className="col-md-5">
        <VideoList videos= {exampleVideoData} />
      </div>
    </div>
  </div>
);*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerVid: exampleVideoData[1],
      videoList: exampleVideoData,
      input: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateVideoList = this.updateVideoList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleClick(video) {
    this.setState(state => ({
      currentPlayerVid: video
    }));
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  handleSearch() {
    var options = {
      'key': YOUTUBE_API_KEY,
      'q': this.state.input,
      'part': 'snippet',
      'maxResults': '5',
      'type': 'video',
      'videoEmbeddable': 'true'
    };
    // searchYouTube(options q set to input from search box, this.updateVideoList?)
    searchYouTube(options, this.updateVideoList);
  }

  updateVideoList(data) {
    this.setState(state => ({
      videoList: data
    }));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value = {this.state.input} handleChange = {this.handleChange} handleSearch = {this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentPlayerVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videoList} handleClick = {this.handleClick}/>
          </div>
        </div>
      </div>   
    );
  }
}

export default App;