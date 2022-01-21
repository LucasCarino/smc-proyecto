import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialItems } from './SocialItems';

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="SocialItems">
                    <ul className={this.state.clicked ? 'social-bar active' : 'social-bar'}>
                        <div className='social-icons' >
                            {SocialItems.map((item, index) => {
                                return (
                                    <li>
                                        <NavLink className={item.cName} to={item.url}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;