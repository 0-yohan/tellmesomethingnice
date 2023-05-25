import React, { useState } from 'react';
import promptsData from './prompts.json';
import ReactHtmlParser from 'html-react-parser';

function MainContent() {
    const [prompt, setPrompt] = useState('');
  
    const generatePrompt = () => {

        const randomIndex = Math.floor(Math.random() * promptsData.length);
        const randomPrompt = promptsData[randomIndex];
        console.log(randomPrompt); // Log the prompt to the console
        setPrompt(randomPrompt);
      // Your code to generate a random prompt goes here

    };

    
    return (
        <div className="container main-page">
          <h1>Tell Me Something Nice</h1>
          {/* {prompt ? ( <div className="prompt">{prompt}</div> ) : ( <p>Click the button to generate a random prompt</p> )} */}
          {prompt && (
        <div className="prompt">
          <p>{ReactHtmlParser(prompt.text)}</p>
          {prompt.author ? (<div className="author">~{prompt.author}</div>): (<p> </p>) }
        </div>
      )}
      {!prompt && <p>Let me tell you how special you are</p>}
          <button className='generate' onClick={generatePrompt}>
            {prompt ? 'New' : 'Click this'}
          </button>
        </div>
      );
    }
  
  
  export default MainContent;