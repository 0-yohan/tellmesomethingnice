import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet'

const Lily = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); 

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause(); // Pause audio if it's currently playing
      } else {
        audio.play().catch(error => {
          console.error('Autoplay error:', error);
        }); // Play audio if it's currently paused
      }
      setIsPlaying(!isPlaying); // Toggle the state
    }
  };
  return (
    <div>
      <Helmet>
        <title>HBD Lily!</title>
      </Helmet>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/yellow.mp3`} autoPlay /> {/* Hidden audio element */}
      <div className="page2" onClick={toggleAudio}>
        <div className="letter2">
          <div className="heading2">Lorem Ipsum <div className="music">(toggle music)</div></div>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida arcu ac tortor dignissim convallis aenean et tortor. Accumsan tortor posuere ac ut consequat semper viverra nam. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Eleifend donec pretium vulputate sapien. Duis ut diam quam nulla porttitor massa. Amet mattis vulputate enim nulla. Venenatis cras sed felis eget velit aliquet. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Blandit libero volutpat sed cras ornare arcu dui vivamus. Non tellus orci ac auctor augue mauris augue neque. Lorem ipsum dolor sit amet consectetur adipiscing.
          </p>
          <br />
          <p className="text2">
            Magna eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo urna molestie at. Vulputate ut pharetra sit amet aliquam id. Auctor eu augue ut lectus arcu. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
          </p>
          <br />
          <h4>
            <div className="sign2">
              Hentai with,
              <br />
              Senpai
            </div>
          </h4>
        </div>
        <a href="/">
          <button className="corner-button">
            <b>Back to TMSN</b>
          </button>
        </a>
      </div> 
    </div>
  );
};

export default Lily;
