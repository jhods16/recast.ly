import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayerVid: exampleVideoData[1],
      videoList: exampleVideoData,
      input: ''
    };
  }
  
  handleClick(video) {
    this.setState(state => ({
      currentPlayerVid: video
    }));
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSearch() {
    var options = {
      key: this.props.YOUTUBE_API_KEY,
      query: this.state.input,
      max: 5
    };
  
    this.props.searchYouTube(options, (data)=>
      this.setState({
        currentPlayerVid: data[0],
        videoList: data
      })
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value = {this.state.input} handleChange = {this.handleChange.bind(this)} handleSearch = {this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentPlayerVid}/>
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videoList} handleClick = {this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>   
    );
  }
}

export default App;