import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

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
  constructor(props){
    super(props);

    this.state = {
      currentPlayerVid: exampleVideoData[1],
      videoList: exampleVideoData
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(video) {
    this.setState(state => ({
      currentPlayerVid: video
    }));
    console.log(this.state.currentPlayerVid);
  }

  render() {
    return (
      <div>
        <nav onClick={this.handleClick.bind(this, exampleVideoData[0])} className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here </h5></div>
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