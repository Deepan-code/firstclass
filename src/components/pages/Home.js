import React, { useState } from 'react'
import { OverviewContent } from '../siteContent/overviewContent';

function Home() {

    const addDays = (date, period) => {
        date.setDate(date.getDate() + period);
    }
    let options = { day: 'numeric', month: 'long', year: 'numeric' }
    let date = new Date();
    addDays(date, + 60);
    console.log(date.toLocaleDateString([], options));

    const {HOME:{headerText, subText, subTitle1, subTitle2, subTitle3, subTitle1_Description, subTitle2_Description, subTitle3_Description}} = OverviewContent

    return (
        <div>
            <div className='container'>
                <div className="p-5 bg-secondary mt-3 text-white text-center">
                <h1> {headerText} </h1> 
                  <p>  {subText} </p>
                </div>

                <div className='row'>
                    <div className="col-sm-4">
                        <h2>{subTitle1}</h2>
                        <p>{subTitle1_Description}</p>
                    </div>
                    <div className="col-sm-4">
                        <h2>{subTitle2}</h2>
                        <p>{subTitle2_Description}</p>
                    </div>
                    <div className="col-sm-4">
                        <h2>{subTitle3}</h2>
                        <p>{subTitle3_Description}</p>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home