import React from 'react'
import { Bars } from 'react-loader-spinner'
export default function Loader({ loading }) {
    return (
        <Bars
            height="40"
            width="40"
            color="pink"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
        />
    )
}
