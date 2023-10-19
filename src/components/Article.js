import React from "react";

function Article({title, date ="January 1, 1970", preview, minutes}) {
    let emoji, roundedMinutes;

    if(minutes < 30){
        emoji = '☕️';
        roundedMinutes = Math.round(minutes /5)
    }
    else {
        emoji = '🍱'
        roundedMinutes = Math.round(minutes /10)
    }

    const timeToRead = emoji.repeat(roundedMinutes);
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}. {`${timeToRead} ${minutes} min read`}</small>
            
            <p>{preview}</p>
        </article>
    )
      
    
}

export default Article 