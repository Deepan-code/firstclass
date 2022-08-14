import React, { Component } from 'react'

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Deepan',
            email: 'deepancrescent91@gmail.com',
            mobile: '9843860321'
        }
    }

    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmail = event => {
        this.setState({
            email: event.target.value
        })
    }
    handleMobile = event => {
        this.setState({
            mobile: event.target.value
        })
    }

    handleGender = event => {
        alert(event.target.value)
    }

    handleLanguage = event => {
        alert(event.target.value)
    }
    handleSelectLang = event => {
        alert(event.target.value);
    }
    submitHandler = event => {
        alert(`${this.state.name} ${this.state.email} ${this.state.mobile}   `)
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className='container'>
                            <div className="p-5 bg-secondary mt-3 text-white text-center">
                                <h1>Contact Us</h1>
                                <p>Get in touch</p>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <form onSubmit={this.submitHandler}>
                                        <div className='mb-3 mt-3'>
                                            <label>Name</label>
                                            <input className='form-control' value={this.state.name} onChange={this.handleName} type="text" />
                                        </div>
                                        <div className='mb-3 mt-3'>
                                            <label>Email</label>
                                            <input className='form-control' value={this.state.email} onChange={this.handleEmail} type="email" />
                                        </div>
                                        <div className='mb-3 mt-3'>
                                            <label>Mobile Number</label>
                                            <input className='form-control' value={this.state.mobile} onChange={this.handleMobile} type="number" />
                                        </div>
                                        <div className='mb-3 mt-3' onChange={this.handleGender}>
                                            <label>Gender</label>
                                            <div className='form-check'>
                                                <input name='gender' id="g-male" value="male" type="radio" />
                                                <label className='form-check-label' for="g-male"> Male</label>
                                            </div>
                                            <div className='form-check'>
                                                <input name='gender' id="g-female" value="female" type="radio" />
                                                <label className='form-check-label' for="g-female"> Female</label>
                                            </div>
                                        </div>
                                        <div className='mb-3 mt-3' onChange={this.handleLanguage}>
                                            <label>Language</label>
                                            <div className='form-check'>
                                                <input type="checkbox" value="Tamil" id="lang-tamil" />
                                                <label className='form-check-label' for="lang-tamil"> Tamil </label>
                                            </div>
                                            <div className='form-check' >
                                                <input type="checkbox" value="English" id="lang-eng" />
                                                <label className='form-check-label' for="lang-eng"> English </label>
                                            </div>
                                        </div>
                                        <div className='mb-3 mt-3'>
                                            <label>State</label>
                                            <select className="form-select" onChange={this.handleSelectLang}>
                                                <option>Select</option>
                                                <option value="TamilNadu">Tamil Nadu</option>
                                                <option value="Kerala">Kerala</option>
                                            </select>
                                        </div>
                                        <button type="submit" className='btn btn-primary'>Submit</button>
                                    </form>
                                </div>
                                <div className='col'>
                                    <h2>Record</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact