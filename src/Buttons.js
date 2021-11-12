import React from 'react'

const Buttons = ({data,compare}) => {
    return (
        <div className="btn-container">
            {data.map((item)=>{
            const {id,font} = item
            return <button style={{fontFamily:font}}
            className='btn' key={id} onClick={()=>compare(id)}>{font}</button>
            })}
        </div>
    )
}
export default Buttons
