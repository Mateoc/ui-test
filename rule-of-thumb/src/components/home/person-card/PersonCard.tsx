import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PersonCard.scss';


export class PersonCard extends React.PureComponent<PersonCardPropsType, { selectedVote: 'up' | 'down' | '' }> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        monthsInIndustry: PropTypes.number.isRequired,
        industry: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        votesUp: PropTypes.number.isRequired,
        votesDown: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        voted: PropTypes.bool,
        vote: PropTypes.func,
        voteAgain: PropTypes.func
    };

    constructor(props: PersonCardPropsType) {
        super(props);
        this.state = {selectedVote: ''};
    }

    setSelectedVote(vote: 'up' | 'down') {
        this.setState({selectedVote: vote})
    }

    vote() {
        const {selectedVote} = this.state;
        if (selectedVote) {
            this.props.vote(selectedVote)
        }
    }


    render() {
        const {selectedVote} = this.state;
        return (
            <div className="PersonCard" style={{backgroundImage: 'url(\'' + this.props.image + '\')'}}>
                <div className="info-wp">
                    <div className="name-wp">
                        {this.props.votesDown > this.props.votesUp ?
                            <div className="thumbs-down">
                                <i className="fas fa-thumbs-down"/>
                            </div>
                            :
                            <div className="thumbs-up">
                                <i className="fas fa-thumbs-up"/>
                            </div>
                        }

                        <h3>{this.props.name}</h3>
                    </div>
                    <div className="months-wp">
                        <span className="months">{this.props.monthsInIndustry} month ago</span> in {this.props.industry}
                    </div>
                    <p className="person-description">
                        {this.props.description}
                    </p>

                    <div className="button-wp">
                        {this.props.voted ?
                            <button
                                className="text-button"
                                onClick={() => this.props.voteAgain()}>Vote again</button>
                            : <>
                                <button
                                    className={classNames({'thumbs-up': true, selected: selectedVote === 'up'})}
                                    onClick={() => this.setSelectedVote('up')}>
                                    <i className="fas fa-thumbs-up"/>
                                </button>
                                <button
                                    className={classNames({'thumbs-down': true, selected: selectedVote === 'down'})}
                                    onClick={() => this.setSelectedVote('down')}>
                                    <i className="fas fa-thumbs-down"/>
                                </button>
                                <button className="text-button" onClick={() => {
                                    this.vote()
                                }}>Vote now
                                </button>
                            </>
                        }
                    </div>
                </div>
                <div className="votes-count-wp">
                    <div className="up-votes" style={{width: this.props.votesUp + '%'}}>
                        <i className="fas fa-thumbs-up"/>
                        {this.props.votesUp.toFixed(2)} %
                    </div>
                    <div className="down-votes" style={{width: this.props.votesDown + '%'}}>
                        {this.props.votesDown.toFixed(2)} %
                        <i className="fas fa-thumbs-down"/>
                    </div>
                </div>
            </div>
        )
    }
}

export interface PersonCardPropsType {
    name: string;
    monthsInIndustry: number;
    industry: string;
    description: string;
    votesUp: number;
    votesDown: number;
    image: string;
    voted: boolean;
    vote: (vote: 'up' | 'down') => void
    voteAgain: () => void
}
