import React from 'react';
import styles from "./Title.scss"


class Title extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div >
                <h2 className={styles.title}>{ this.props.title }</h2>
                <h3 className={styles.subtitle}>{ this.props.subTitle }</h3>
            </div>
        )
    }
}

export default Title;