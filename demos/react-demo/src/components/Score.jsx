import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "@ivine/opensheetmusicdisplay";
import AudioPlayer from "@ivine/osmd-audio-player";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file
    };
    window.audioPlayer = new AudioPlayer();
    window.audioPlayer.on("reached_end", state => {
      console.log('audioPlayer, reached_end --> ', state);
      console.log('准备下一个循环播放');
      setTimeout(() => {
        this.play();
      }, 1000);
    });
    this.divRef = React.createRef();
  }

  play() { 
    let tmpOsmd: OpenSheetMusicDisplay = window.osmd;
    let tmpAudio: AudioPlayer = window.audioPlayer;
    tmpAudio.play();
    tmpOsmd.cursor.show();
  }

  pause() { 
    window.audioPlayer.pause(); 
  }
  
  stop() { 
    window.audioPlayer.stop(); 
  }

  async componentDidMount() {
    this.osmd = new OpenSheetMusicDisplay(this.divRef.current);
    window.osmd = this.osmd;
    await this.osmd.load(this.state.file);
    await this.osmd.render();
    await window.audioPlayer.loadScore(this.osmd);
  }

  render() {
    return (<div>
      <div class="controls">
        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
      </div>
      <div ref={this.divRef} />
    </div>
    );
  }
}

export default Score;