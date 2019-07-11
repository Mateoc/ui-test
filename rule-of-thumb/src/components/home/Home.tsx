import React from 'react';


import kanyeImg from '../../assets/kanye-west.jpg';
import markImg from '../../assets/mark.jpeg';
import cristinaImg from '../../assets/cristina.jpg';
import malalaImg from '../../assets/malala.jpg';

import './Home.scss';
import {PersonCard} from "./person-card/PersonCard";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div className="Home">
            <div className="main">
                <header className="header">
                    <h1 className="page-title">Rule of Thumb</h1>
                    <nav className="nav">
                        <i className="fas fa-bars"/>
                        <div className="links">
                            <Link className="link" to="/past-trials">Past Trials</Link>
                            <Link className="link" to="/how-it-works"> How it works </Link>
                            <Link className="link" to="/login">Log in/ Sign up</Link>
                            <i className="fas fa-search"/>
                        </div>
                    </nav>
                </header>

                <div className="cover-person-info">
                    <div className="back">
                        <span className="opinion">What's your opinion on</span>
                        <h1 className="name">Pope Francis</h1>
                        <p className="cover-description ">He's talking tough on clergy sexual abuse, but is he just
                            another
                            papal pervert protector?
                            (thumbs down) or a true pedophile punishing pontiff (thumbs up)</p>
                        <div className="wiki">
                            <i className="fab fa-wikipedia-w"/> More information
                        </div>
                        <div className="verdict">Whats Your Verdict?</div>
                    </div>
                    <div className="vote-wp">
                        <button className="thumbs-up">
                            <i className="fas fa-thumbs-up"/>
                        </button>
                        <button className="thumbs-down">
                            <i className="fas fa-thumbs-down"/>
                        </button>
                    </div>
                </div>

                <div className="close-wp">
                    <div className="close">Closing in</div>
                    <div className="close-count"><span className="count">22</span> days</div>
                </div>
            </div>

            <div className="container">
                <div className="description">
                    <div className="what">
                        <span>Speak out. Be heard.</span>
                        <span>Be counted</span>
                    </div>
                    <div className="how">
                        Thumbs Up is a crowed sourced court of public opinion where any one and every one can speak out
                        and
                        speak freely. It's easy: You share your opinion, we analyze and put the data in a public report
                    </div>
                    <div className="close-wp">
                        <i className="fas fa-times"/>
                    </div>
                </div>

                <h2 className="votes">Votes</h2>

                <div className="cards-container">
                    <div className="card-wp">
                        <PersonCard
                            vote={undefined}
                            name="Kanye West"
                            monthsInIndustry={1}
                            industry="Entertainment"
                            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                            votesUp={64}
                            votesDown={36}
                            image={kanyeImg}
                        />
                    </div>
                    <div className="card-wp">
                        <PersonCard
                            vote={undefined}
                            name="Mark Zuckerberg"
                            monthsInIndustry={1}
                            industry="Business"
                            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                            votesUp={36}
                            votesDown={64}
                            image={markImg}
                        />
                    </div>
                    <div className="card-wp">
                        <PersonCard
                            vote={undefined}
                            name="Cristina Fernandez de Kirchner"
                            monthsInIndustry={1}
                            industry="Politics"
                            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                            votesUp={36}
                            votesDown={64}
                            image={cristinaImg}
                        />
                    </div>
                    <div className="card-wp">
                        <PersonCard
                            vote={undefined}
                            name="Malala Yousafzai"
                            monthsInIndustry={1}
                            industry="Entertainment"
                            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                            votesUp={64}
                            votesDown={36}
                            image={malalaImg}
                        />
                    </div>
                </div>

                <div className="submit-container">
                    <div>Is there anyone else you want us to add?</div>
                    <div>
                        <button className="submit-button">Submit a name</button>
                    </div>
                </div>

                <footer className="footer">
                    <div className="links">
                        <Link className="link" to="/tac">Terms and conditions</Link>
                        <Link className="link" to="/pp">Privacy Policy</Link>
                        <Link className="link" to="/cu">Contact Us</Link>
                    </div>
                    <div className="social">
                        <div>Follow Us</div>
                        <a href="https://www.facebook.com/Zemoga/">
                            <i className="fab fa-facebook-square"/>
                        </a>
                        <a href="https://twitter.com/zemoga">
                            <i className="fab fa-twitter"/>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );

}
