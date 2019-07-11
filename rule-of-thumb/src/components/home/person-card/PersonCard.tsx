import React from 'react';

import './PersonCard.scss';


export function PersonCard(props: PersonCardPropsType) {
    return (
        <div className="PersonCard" style={{backgroundImage: 'url(' + props.image + ')'}}>
            <div className="info-wp">
                <div className="name-wp">
                    <div className="thumbs-up">
                        <i className="fas fa-thumbs-up"/>
                    </div>
                    <h3>{props.name}</h3>
                </div>
                <div className="months-wp">
                    <span className="months">{props.monthsInIndustry} month ago</span> in {props.industry}
                </div>
                <p className="person-description">
                    {props.description}
                </p>

                <div className="button-wp">
                    <button className="thumbs-up">
                        <i className="fas fa-thumbs-up"/>
                    </button>
                    <button className="thumbs-down">
                        <i className="fas fa-thumbs-down"/>
                    </button>
                    <button className="text-button">Vote now</button>
                    <button className="text-button">Vote again</button>
                </div>
            </div>
            <div className="votes-count-wp">
                <div className="up-votes" style={{width: props.votesUp + '%'}}>
                    <i className="fas fa-thumbs-up"/>
                    {props.votesUp} %
                </div>
                <div className="down-votes" style={{width: props.votesDown + '%'}}>
                    {props.votesDown} %
                    <i className="fas fa-thumbs-down"/>
                </div>
            </div>
        </div>
    )
}

export interface PersonCardPropsType {
    vote: 'up' | 'down' | undefined;
    name: string;
    monthsInIndustry: number;
    industry: string;
    description: string;
    votesUp: number;
    votesDown: number;
    image: string
}
