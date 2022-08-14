import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FormInput, PrimaryButton } from '../form-fields'

export const Header = (props) => {

    const [state, setState] = useState({ email: '', password: '' });

    const updateEmail = (email) => setState({ ...state, email });

    const updatePassword = (password) => setState({ ...state, password });

    return (
        <nav className="navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid pt-2 pb-2">
                <div className='row'>
                    <div className='col-sm-6'>
                        <nav className="navbar-nav">
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </nav>
                    </div>
                    <div className='col-sm-6'>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <FormInput
                                        id={'email'}
                                        value={state.email}
                                        onChange={updateEmail}
                                        type="text"
                                        placeholder="Username"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <FormInput
                                        id={'password'}
                                        value={state.password}
                                        onChange={updatePassword}
                                        type="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col">
                                    <PrimaryButton className="btn btn-primary" id={'primary-btn'} btnName='Submit' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
