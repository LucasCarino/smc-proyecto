import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems';
// import {Button} from '../Button'

import logo from '../../assets/img/logo.png'


class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="NavBarItems mt-4 mb-4">
                    {/* <h1 className="navbar-logo">Logo<i className="fab fa-react"></i></h1> */}
                    <NavLink to="/"><img src={logo} alt="Logo" className='navbar-logo' /></NavLink>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li>
                                    <NavLink className={item.cName} to={item.url}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    {/* <Button>Hola</Button> */}
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;