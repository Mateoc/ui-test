import React from 'react';

import './Home.scss';
import {PersonCard} from "./person-card/PersonCard";
import {Link} from "react-router-dom";
import {PeopleService} from "../../core/services/people.service";
import {PersonModel} from "../../core/models/person.model";
import cloneDeep from "lodash.clonedeep";

export class Home extends React.PureComponent <{}, { people: PersonModel[], displayMessage: boolean }> {

    componentDidMount(): void {
        PeopleService.getPeople().then(people => {
            this.setState({people: people})
        })
    }

    vote(vote: 'up' | 'down', personId: string) {
        const people = cloneDeep(this.state.people);
        people.map(person => {
            if (person.id === personId) {
                person.voted = true;
                if (vote === 'up') {
                    person.votesUpCount++;
                } else {
                    person.votesDownCount++;
                }
                person.votesUp = ((person.votesUpCount + person.votesDownCount) * person.votesUpCount) / 100;
                person.votesDown = ((person.votesUpCount + person.votesDownCount) * person.votesDown) / 100;

            }
            return person;
        });
        this.setState({people, displayMessage: true});

        setTimeout(()=> {this.setState({displayMessage: false})}, 1000);
    }

    voteAgain(personId: string) {
        const people = cloneDeep(this.state.people);
        people.map(person => {
            if(person.id === personId){
                person.voted = false
            }
            return person;
        });
        this.setState({people});
    }


    render() {
        if (!this.state || !this.state.people) {
            return <div> Loading... </div>
        }
        console.log(this.state.displayMessage)
        return (
            <div className="Home">
                {
                    this.state.displayMessage && <div className="voted-message">
                        Thank you for voting!
                    </div>
                }

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
                            Thumbs Up is a crowed sourced court of public opinion where any one and every one can speak
                            out
                            and
                            speak freely. It's easy: You share your opinion, we analyze and put the data in a public
                            report
                        </div>
                        <div className="close-wp">
                            <i className="fas fa-times"/>
                        </div>
                    </div>

                    <h2 className="votes">Votes</h2>
                    <div className="cards-container">
                        {this.state.people.map(person => (
                            <div className="card-wp" key={person.id}>
                                <PersonCard
                                    name={person.name}
                                    monthsInIndustry={person.monthsInIndustry}
                                    industry={person.industry}
                                    description={person.description}
                                    votesUp={person.votesUp}
                                    votesDown={person.votesDown}
                                    image={person.image}
                                    voted={person.voted}
                                    vote={(vote: 'up' | 'down') => {
                                        this.vote(vote, person.id)
                                    }}
                                    voteAgain={() => {
                                        this.voteAgain(person.id)
                                    }}
                                />
                            </div>
                        ))}
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

}
