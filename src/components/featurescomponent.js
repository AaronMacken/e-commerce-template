import React from 'react';
// Not sure where to pass in feature state data... this is just a place holder
// Until i understand Mobx or redux not sure where to store and grab the state for FEATURES to make this component work 
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
                            <div class="box"><i class="fa fa-map-marker icon"></i>
                                <h3 class="name">{feature.name}</h3>
                                <p class="description">{feature.description}</p>
                                <a class="learn-more" href={feature.externalLink}>Learn more »</a>
                            </div>
                        </div>
                    )
                })}
            </div>    
        </>
    )
}