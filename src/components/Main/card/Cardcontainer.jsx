import React from 'react'
import Cards from './Cards'

function Cardcontainer(props) {
    const { alumnis,stream } = props
    console.log(alumnis.data);
    if(alumnis.length==0){
        return <h4>Loading.....</h4  >
    }else{
        return (
        <div className="card-design">
            {alumnis.data.map((i, index) => {
                return <Cards key={index} data={i} stream={stream}  />
            })}

        </div>

        )
    }
  
}


export default Cardcontainer
