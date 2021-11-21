import React from 'react';
import Title from './TitleComponent';
import { TITLES } from '../shared/titles';
import { FEATURES } from '../shared/features';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: TITLES,
            features: FEATURES
        }
    }
    render() {
        return (
            <div>
                <Title title={this.state.title} />
            </div>


        )
    }
}

export default Main;