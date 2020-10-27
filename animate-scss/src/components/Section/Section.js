import React from 'react';

// STYLE
import './Section.scss';

const Section = (props) => {
    const {title, children} = props;

    return (
        <section className="Section">
            <h2 className="Section__title">{title}</h2>
            {children}
        </section>
    )
}

export {
    Section
}