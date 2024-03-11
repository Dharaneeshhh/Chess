import React, { useState, useEffect } from 'react';
import instance from '../sevices/axios';
import { Panel } from 'rsuite';
import CustomNavbar from '../components/custom_navbar';
import '../assets/css/home.css';
import chess_img from '../assets/images/chess3.jpg';
import magnus_img from '../assets/images/magnus.jpeg';
import garry_img from '../assets/images/garry.jpg';
import vishwa_img from '../assets/images/Viswanathan.jpeg';
import prag_img from '../assets/images/praggnanandhaa.jpeg';
import axios from 'axios';

const Home = () => {
    // 1. State Declaration
    const [institutes, setInstitutes] = useState([]);

    // 2. Fetch Institutes Function
    const fetchInstitutes = async () => {
        try {
            const response = await instance.get('/institute'); // use the axios instance
            setInstitutes(response.data);
        } catch (error) {
            console.error('Error fetching institutes:', error);
        }
    };

    useEffect(() => {
        const authToken = localStorage.getItem("token");
        console.log("hhhhhhhh"+authToken)
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.get('http://localhost:8181/institute/institutelist', {headers})
            .then(response => {
                setInstitutes(response.data);
            })
            .catch(error => {
                console.error('Error fetching institutes:', error);
            });
    }, []);

    return (
        <div className='home__body'>
            <CustomNavbar/>
            <main>
                <div className='slider'>
                    <h1 style={{ marginLeft: 350, color: 'black' }}>Welcome User!</h1>
                    <img src={chess_img} style={{ height: '500px', width: '1000px', objectFit: 'cover' }} />
                </div>
                <br />
                <h1 style={{ textAlign: 'center', color: 'black' }}>Popular Academies</h1>

                <div style={{display:'flex', gap:30, marginTop: 40, marginLeft: 40}}>
                {institutes.map((institute, index) => (
                    <Panel key={index} header={institute.name} collapsible bordered>
                        <p style={{fontSize: '20px'}}>
                            Address: {institute.address}<br/>
                            Contact Number: {institute.contactNumber}
                        </p>
                    </Panel>
                ))}
            </div>

                {/* <div className='play'>
                    <h3 style={{ marginLeft: 550, marginTop: 50 }}>
                        Wanna play a match?{' '}
                        <a href='https://www.chess.com/play'>
                            {' '}
                            <span>Click Here!</span>
                        </a>
                    </h3>
                </div> */}

                <h3 style={{ marginLeft: 510, marginTop: 30 }}>
                    Wanna know about famous chess players?
                </h3>
            </main>

            <div className='facts' style={{ marginLeft: 100, display: 'flex' }}>
                <div className='fact1'>
                    <h4 style={{ color: 'black' }}>Magnus Carlsen</h4>
                    <br />
                    <img src={magnus_img} style={{ height: 300, width: 250 }} />
                    <p style={{ fontSize: 20 }}>
                        Sven Magnus Øen Carlsen is a Norwegian chess grandmaster. He is a
                        five-time World Chess Champion, the reigning five-time World Rapid
                        Chess Champion, the reigning seven-time World Blitz Chess Champion,
                        and the reigning Chess World Cup Champion. A chess prodigy, Carlsen
                        finished first in the C group of the Corus chess tournament shortly
                        after he turned 13 and earned the title of grandmaster a few months
                        later. At 15, he won the Norwegian Chess Championship, and at 17 he
                        finished joint first in the top group of Corus. He surpassed a
                        rating of 2800 at 18, the youngest at the time to do so. In 2010,
                        at 19, he reached No. 1 in the FIDE world rankings, the youngest
                        person ever to do so.
                    </p>
                    <br />

                    <h4 style={{ color: 'black' }}>Garry Kimovich Kasparov </h4>
                    <br />
                    <img src={garry_img} style={{ height: 300, width: 250 }} />
                    <p style={{ fontSize: 20 }}>
                        Garry Kimovich Kasparov is a Russian chess grandmaster, former World
                        Chess Champion, political activist and writer. His peak FIDE chess
                        rating of 2851, achieved in 1999, was the highest recorded until
                        being surpassed by Magnus Carlsen in 2013. Kasparov became the
                        youngest-ever undisputed world champion in 1985 at age 22 by
                        defeating then-champion Anatoly Karpov. He defended the title
                        against Karpov three times, in 1986, 1987 and 1990. Kasparov held
                        the official FIDE world title until 1993, when a dispute with FIDE
                        led him to set up a rival organisation, the Professional Chess
                        Association. In 1997, he became the first world champion to lose a
                        match to a computer under standard time controls when he was
                        defeated by the IBM supercomputer Deep Blue in a highly publicised
                        match.
                    </p>

                    <h4 style={{ color: 'black' }}>Viswanathan Anand</h4>
                    <br />
                    <img src={vishwa_img} style={{ height: 300, width: 250 }} />
                    <p style={{ fontSize: 20 }}>
                        Viswanathan "Vishy" Anand (born 11 December 1969) is an Indian
                        chess grandmaster and a former five-time World Chess Champion. He
                        became the first grandmaster from India in 1988, and has the eighth
                        highest peak FIDE rating of all-time. In 2022, he was elected the
                        deputy president of FIDE.
                        <br />
                        Anand defeated Alexei Shirov in a six-game match to win the 2000
                        FIDE World Chess Championship, a title he held until 2002. He became
                        the undisputed world champion in 2007 and defended his title against
                        Vladimir Kramnik in 2008, Veselin Topalov in 2010, and Boris Gelfand
                        in 2012. In 2013, he lost the title to challenger Magnus Carlsen,
                        and he lost a rematch to Carlsen in 2014 after winning the 2014
                        Candidates Tournament.
                    </p>
                    <br />

                    <h4 style={{ color: 'black' }}>Rameshbabu Praggnanandhaa</h4>
                    <br />
                    <img src={prag_img} style={{ height: 300, width: 250 }} />
                    <p style={{ fontSize: 20 }}>
                        Rameshbabu Praggnanandhaa (born 10 August 2005) is an Indian chess
                        grandmaster. A chess prodigy, he became an international master at
                        the age of 10, the youngest at the time to do so, and a grandmaster
                        at the age of 12, the second-youngest at the time to do so.
                        Praggnanandhaa, alongside his elder sister R Vaishali, became the
                        first brother and sister to hold the Grandmaster title.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
