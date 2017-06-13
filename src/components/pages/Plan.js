import React from 'react';
import MediaCard from '../ui/MediaCard';

const Plan = ({plans = []}) => {
    // console.log(plans);
    const cards = plans.map((plan) => (
        <MediaCard key={plan.id}/>
    ));
    return <div className="cards-container">{cards}</div>
};

export default Plan;