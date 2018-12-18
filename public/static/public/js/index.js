import '../styles/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import legislatorMap from './legislator-map'
import stateMap from './state-map'
import LegislatorList from './legislator-list'
import FindYourLegislator from './find-your-legislator'
import CommitteeList from './committee-list'


window.imgError = function(t) {
    // handle Event or Element
    if(t.target) {
        t = t.target;
    }
    var placeholder = document.createElement('div');
    placeholder.classList.add("thumbnail", "thumbnail--placeholder");
    t.parentNode.replaceChild(placeholder, t);
}


window.addEventListener('load', () => {
    if (document.querySelector('[data-hook="legislator-map"]')) {
        legislatorMap()
    }

    const sm = document.querySelector('[data-hook="state-map"]');
    if (sm) {
        stateMap(sm);
    }

    const ll = document.querySelector('[data-hook="legislator-list"]');
    if(ll) {
        ReactDOM.render(React.createElement(
            LegislatorList,
            {legislators: window.legislators, chambers: window.chambers}),
            ll
        );
    }

    const cl = document.querySelector('[data-hook="committee-list"]');
    if(cl) {
        ReactDOM.render(React.createElement(
            CommitteeList,
            {committees: window.committees, chambers: window.chambers}),
            cl
        );
    }

    const fyl = document.querySelector('[data-hook="find-your-legislator"]');
    if (fyl) {
        ReactDOM.render(React.createElement(FindYourLegislator, {}), fyl);
    }
})
