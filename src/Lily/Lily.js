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
            HBD pookie. Happiest birthday to one of the bestest person in this world, to ever exist. You have had me in awe ever since I met you for the 2nd time. You're wonderful and full of surprises. Honestly shawty, you're awesome. You're so badass and wonderful at the same time. The more I start to know about you, the more I  realise how extraordinary you are. You're so thoughtful and non-judgemental at the same time that I can just be so goofy and childish around you without any worries. You're adorable, you're fun, you're someone they'd call a Golden Retriever (even tho idk much about dogs). You're special to me and for many others too, thanks for existing. I'm grateful that your dad didn't use condom on that fateful night. You're someone I'd definitely compete against other guys for. 
           </p>
          <br />
          <p className="text2">
            Isn't it kinda cutely funny how just shuffling words can make them sound so much more special although being true at the same time? Like, look at this... <br />
            " I am so much mean to you. " but " You mean so much to me. "
            
          </p>
          <br />
          <p className="text2">
            There's a lot I want to confess to you about, starting from how precious your smile is, how much I admire your kindness to how witty and funny you are. I really like spending time with you. You are like the beam of sunshine that lights up my dark corners.
            You make me feel safe. You also make me do wierd(weird) things (like writing a birthday letter).<br />
            My mind is overflowing! There's so much I want to tell you. Like you mentioned we were on call at this time a year ago and how oblivious I was that it was your birthday, Gosh I feel so embarrassed about it even after forgetting it. I'm still kicking myself for that one. I have this urge to talk about everything – my feelings, thoughts, the world around me, like I'm writing a giant diary review. I wish I could freeze time and just chat with you endlessly about anything and everything, without a single care.
          </p>
          <br />
          <p className="text2">
            Tbh, there's a lot I want to talk to you about, confess about and flood your head with the boundless stuff I wanna thank you for. But no matter how much, it's nothing in front of what all you did for me, from those lovely gifts to small acts of kindness. Even the small random stuff you did means a lot. Nobody understood me better than you did. Thanks for being there whenever I felt blue. Ykw, I can go on and on about this, I can make this page an infinite scroll by writing about you but that would be a drag to read wouldn't it? Oh btw, I hope you didn't miss the music toggle above (under the heading, click on it and it plays/pauses music), figured out which song it is? Uh... there wasn't a specific reason to pick that song but during the time of writing this letter, you were talking about this song and I thought, why not? And also, I often used to ask about your favouraite colours and all just to use them in this thing. I'm so lame, sowwy (T_T).  And I picked brown because your eyes are brown, but just got to use it once.
          </p>
          <br />
          <p className="text2">
            So... I was thinking about what to gift you on this special day. You really showered me with those unexpected presents out of the blue. That was so cuteee, I always needed a box-fit tee, I wanted a fountain pen for calligraphy and I love rings. It was as if you read my mind. But, what can I gift you, I'm not that capable or creative but for sure one day I'll make up for it. But for now...behold my today's gift. Lily. I am gifting you the name LILY. Ik that I did call you Lily multiple times but from now on, you are officially named Lily and thus by naming you, I shall become your Godfather. Do you know why 'Lily'? It's not about Lily from the book It Ends With US, or because Likhitha can be nicknamed Lily. It sounds cute and tbh it started from there but then as time went by your qualities really resembled that of the flower lily.
          </p>
          <br />
          <p className="text2">
            You are so just like a lily, with a mesmerizing fragrance and a positive effect on mind. Did you know that lilies are quite extroverted and social. They bloom without much human intervention. They flower during the spring and summer and go dormant during the winter, just like someone I know who blooms during summers too. Apparently, lilies symbolize ambition and encouragement, innocence and purity, passion and healing. <br />
            You're like a lily, you have such a pure heart and always see the best in people. you're strong and beautiful, even when things get tough.
          </p>
          <br />
          <p className="text2"> 
            There's this beautiful poem I found about lilies, here, I'm going to read it for you...<br />
            Head Held High With Pride <br />
            & Elegance Spread In Every Petal <br />
            When She Blooms With Royal Attitude <br />
            It Exudes Only Passion, Purity, & Renewal
          </p>
            <br />
          <p className="text2">            
            Ugh, I wish there was telepathy and we could share thoughts and you would know what all that goes in my head when I think about you. Fr, cause I'm so bad at explaining things. <br />Anyways,
          </p>
          <br />
          <p className="text2">
            Be cherished. Be treasured. Be adored and Once again,<br /> 
            Happy Birthday Beloved. 🤎
          </p>
          <br />
          <h4>
            <div className="sign2">
              Your Godfather lol,
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
