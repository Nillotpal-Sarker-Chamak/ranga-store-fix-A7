import React, { useEffect, useState } from 'react';
import Speaker from '../Speaker/Speaker';
import './Speakers.css';
import Cart from '../Cart/Cart';

const Speakers = () => {
    const [speakers, setSpeaker] = useState([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState([]);
    useEffect(() => {
        fetch('./speakers.JSON')
            .then(res => res.json())
            .then(data => setSpeaker(data));
    }, [])
    const addToCart = (speaker) => {
        let newCart = [...selectedSpeaker, speaker]
        setSelectedSpeaker(newCart);
    }

    return (
        <div className="body">
            <div className="speakers">
                {
                    speakers.map(speaker => <Speaker
                        key={speaker.key}
                        speaker={speaker}
                        addToCart={addToCart}
                    >
                    </Speaker>)
                }
            </div>
            <div className="cart">
                <Cart personSelected={selectedSpeaker}></Cart>
            </div>

        </div>
    );
};

export default Speakers;