import React from "react";
import './Jhnvi.css';
import { Helmet } from "react-helmet";


const Jhnvi = () => {
    return(
        <div className="page">
        <Helmet>
            <title>Happy Birthday, UwU</title>
        </Helmet>
            <div className="letter-container">
                <div className="letter-heading">
                    HAPP BIRTHDAY
                </div>

                <div className="letter-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                <div className="letter-quote">
                    Have a great one,
                    Ameen.
                </div>

            </div>
        </div>
    )
}

export default Jhnvi;