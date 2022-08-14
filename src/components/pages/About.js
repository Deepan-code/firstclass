import React from 'react'
import { OverviewContent } from '../siteContent/overviewContent'

function About() {

    const {ABOUT:{headerText, subText}} = OverviewContent


    return (
        <div>
            <div className='container'>
                <div className="p-5 bg-secondary mt-3 text-white text-center">
                    <h1> {headerText} </h1>
                    <p>  {subText} </p>
                </div>
            </div>
        </div>
    )
}

export default About
