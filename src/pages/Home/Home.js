import React, { Component } from 'react';

import Title from 'components/Title';

const subTitleText = "This is just a test subtitle. Im here to annoy and destroy!";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Title title="Test Title" subTitle={subTitleText} />
            </div>
        )
    }
}
