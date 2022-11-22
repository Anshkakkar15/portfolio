import React, { useState } from 'react'
import { images } from '../../appMock/Projects/Projects'
import Loader from '../Loader/Loader'

export default function Projects() {
    const [loader, setLoader] = useState(true)
    setTimeout(() => {
        setLoader(false)
    }, 3000);
    return (
        <div className='container w-50'>
            {loader ? <div className='d-flex justify-content-center align-item-center'>
                <Loader loading={loader} />
            </div> :
                <div className='row'>
                    <span className='fs-6 text-center'>Projects</span>
                    <h4 className='fs-2 text-center text-muted'>Some Previous Projects</h4>
                    {images.map((data) =>
                        <div key={data.id} className='col-md-6 px-3 py-3'>
                            <div className=" card cardHover">
                                <div className="card-body">
                                    <p className="card-text text-center py-5">{data.image}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>}
        </div>
    )
}
