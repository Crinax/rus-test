import React from 'react';
import Header from './structure/Header';
import Body from './structure/Body';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Body />
            </div>
        );
    }
}
export default Main;