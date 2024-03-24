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
          <div className="heading2">Janam din Mubarak ho Likhitha! <div className="music">(toggle music)</div></div>
          <p className="text2">
            Happiest birthday to one of the bestest person in this world, to ever exist. You have haved me in awe from ever since I met you for the 2nd time. You're wonderful and full of surprises. Honestly Lily, youre awesome. You're so badass and wonderful. The more I start to know about you, the more I  realise how extra-ordinary you are. You're so thoughful and non judgemental at the same time that I can just be so goofy and childish around you without anyy worries. You're adorable, you're fun, you're someone they'd call you a Golden Retriever (even tho idk much about dogs). You're specail to me and for maany others too, thanks for existing, I'm greatful that your dad didn't use condom on that fateful night. I'd definitely compete against other guys for you. 
           </p>
          <br />
          <p className="text2">
            Isn't it kinda cutely funny how just shuffling words can make them sound so much more special although being true at the same time? Like, look at this... <br />
            "I am so much mean to you." but "You mean so much to me." <br />
            There's a lot I want to confess to you about, starting from how precious your smile is, how much I admire your kindness to how witty and funny you are. I really like spending time with you. You really are like the beam of sunshine that lights up my dark corners.
            You make me feel safe. You also make me do wierd things (like writing a birthday letter).
          </p>
          <br />
          <p className="text2">
            Magna eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo urna molestie at. Vulputate ut pharetra sit amet aliquam id. Auctor eu augue ut lectus arcu. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
          </p>
          <br />
          <p className="text2">
            Magna eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo urna molestie at. Vulputate ut pharetra sit amet aliquam id. Auctor eu augue ut lectus arcu. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.
          </p>
          <br />
          <p className="text2">
            Be cherished. Be treasured. Be adored and Once again,<br /> 
            Happy Birthday Beloved. 💛
          </p>
          <br />
          <h4>
            <div className="sign2">
              Your Godfather,
              <br />
              Ameen.
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
