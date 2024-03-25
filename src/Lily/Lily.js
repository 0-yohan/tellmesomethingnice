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
      <div className="page2" >
        <div className="letter2">
          <div className="heading2">Janam din Mubarak Likhitha! <div className="music" onClick={toggleAudio}>(toggle music)</div></div>
          <p className="text2">
            HBD pookie. Happiest birthday to one of the bestest person in this world, to ever exist. You have haved me in awe from ever since I met you for the 2nd time. You're wonderful and full of surprises. Honestly shawty, you're awesome. You're so badass and wonderful at the same time. The more I start to know about you, the more I  realise how extra-ordinary you are. You're so thoughful and non judgemental at the same time that I can just be so goofy and childish around you without anyy worries. You're adorable, you're fun, you're someone they'd call you a Golden Retriever (even tho idk much about dogs). You're specail to me and for maany others too, thanks for existing, I'm greatful that your dad didn't use condom on that fateful night. I'd definitely compete against other guys for you. 
           </p>
          <br />
          <p className="text2">
            Isn't it kinda cutely funny how just shuffling words can make them sound so much more special although being true at the same time? Like, look at this... <br />
            " I am so much mean to you " but " You mean so much to me "
            
          </p>
          <br />
          <p className="text2">
            There's a lot I want to confess to you about, starting from how precious your smile is, how much I admire your kindness to how witty and funny you are. I really like spending time with you. You really are like the beam of sunshine that lights up my dark corners.
            You make me feel safe. You also make me do wierd things (like writing a birthday letter).
          </p>
          <br />
          <p className="text2">
            Tbh, theres a lot I want to talk to you about, confess about and flood yur head with the boundless stuff I wanna thank you for. But no matter how much, its nothing infront of what all you did for me, from those lovely gifts to small acts of kindness. Even the small random stuff you did means a lot. Nobody understood me better than you did. Thanks for being there whenever I felt blue. Ykw, I can go on and on and on about this, I can make this page an infinite scroll by writing about you but that would be a drag to read wouldn't it? I always used to think, if I wrote a book about someone someday, will they read it? Tbh, idk. Lets find that out some other day. Oh btw, I hope you didn't miss the music toggle above (under the heading, click on it and it plays/pauses music), figured out which song it is? Uh.. there wasn't a specific reason to pick that song but during the time of writing this letter, you were talking about this song and I thought, why not. And also, I often used to ask about your favouraite colours and all just to use them in this thing. I'm so lame, sowwy.  And I picked brown because your eyes are brown, but just got to use it once.
          </p>
          <br />
          <p className="text2">
            So...I was thinkking on what to gift you on this special day. You really showered me with those unexpected presents out of the blue. That was so cuteee, I always needed a cropped tee, I wanted a fountain pen for calligraphy and I love rings. It was as if you read my mind. But, what can I gift you, I'm not that capable or creative but for sure one day I'll make it up for it. But for now...behold my today's gift. Lily. I am gifting you the name LILY. Ik that I did call you Lily multiple times but from now on, you are oficially named Lily and thus by naming you, I shall become your Godfather. Do you know why 'Lily'? It's not about Lily from the book It Ends With US, or because Likhitha can be nicknamed Lily, it sounds cute and tbh it started from there but then as time went by your qualities really resembled that of the flower lily. <br />
            You are like a lily to me, 
          </p>
          <br />
          <p className="text2">
            Be cherished. Be treasured. Be adored and Once again,<br /> 
            Happy Birthday Beloved. 🤎
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
