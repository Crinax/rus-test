import React from 'react';

class ALink extends React.Component {
    render() {
        console.log(this.props);
        var href = this.props.href || '#';
        var alinks = [];
        var count = this.props.count || '1';
        for (let i = 0; i < Number(count); i++) {
            alinks.push(<a href={href} className={this.props.className} key={Math.random()}>{this.props.children.split(', ')[i]}</a>);
        }
        return (
            <div className="alinks-group">{alinks}</div>
        )
    }
}
class HeaderNavBar extends React.Component {
    render() {
        return (
            <nav className="header-navbar header__navbar">
                <ALink className="navbar-link header-navbar__link" count='5'>
                    Проверка ударения,
                    Lorem,
                    ipsum,
                    dolar,
                    sit 
                </ALink>
            </nav>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeaderNavBar />
            </header>
        );
    }
}
export default Header;