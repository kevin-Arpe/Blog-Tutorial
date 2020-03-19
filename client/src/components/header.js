import React from 'react';
import background from './1.jpg';

class Header extends React.Component {
    render() {
        return (
            <div className="header" style={ {backgroundImage: `url(${background})`} }>
                <h1>Welcome to Kevin's blog!</h1>
            </div>
        );
    }
}

export default Header;
