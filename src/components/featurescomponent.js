import React from 'react';
// Not sure where to pass in feature state data... this is just a place holder
//import {FEATURES} from './features';

function Features({FEATURES}) {
    return(
        <>
            <div class="intro">
                <h2 class="text-center">Features </h2>
                <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            {/* dynamic rendering of feature cards as displayed on JOEPRO starter site */}
            <div class="row justify-content-center features">
                {FEATURES.map(feature => {
                    return (
                        <div key={feature.id} class="col-sm-6 col-md-5 col-lg-4 item">
                            <div className="box"><i class="fa fa-map-marker icon"></i>
                                <h3 className="name">{feature.name}</h3>
                                <p className="description">{feature.description}</p>
                                <a className="learn-more" href={feature.externalLink}>Learn more »</a>
                            </div>
                        </div>
                    )
                })}
            </div>    
        </>
    )
}

export default Features;