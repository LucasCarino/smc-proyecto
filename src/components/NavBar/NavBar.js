import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems';

import logo from '../../assets/img/logo.png'


class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <nav className="NavBarItems">
                        <div className='w-25 d-flex align-items-center'>
                            <NavLink to="/"><img src={logo} alt="Logo" className='img-fluid navbar-logo' /></NavLink>
                        </div>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className={item.cName} to={item.url} 
                                            style={({ isActive }) => ({
                                                color: isActive ? 'rgb(100, 100, 100)' : 'red',
                                            })} >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar;