import React from 'react'
import data from '../App/Data'
import City from './City'

export default function Cities() {
    return (
        <div>

          {data.map(city=>
              <City city={city}/>
          )}
            
        </div>
    )
}
