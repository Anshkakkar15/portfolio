import React from 'react'
import '../../Styles/progressBar.css'
import { skills } from '../../appMock/progerssbar/progressbar'

export default function ProgressBar() {
    return (
        <div className='container progres'>
            <div className='row d-flex justify-content-center flex-wrap'>
                {skills.map((data) => {
                    return (
                        <div key={data.id} className='col-sm-6 px-3 py-3 '>
                            <div className='d-flex justify-content-between  align-item-center '>
                                <h3 className='fs-5 fw-semibold'>{data.lang}</h3>
                                <h3 className='fs-5'>{data.perc}</h3>
                            </div>
                            <div className='progressBar'></div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
