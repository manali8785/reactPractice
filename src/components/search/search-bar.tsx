import React, { useState } from 'react';
import Select from 'react-select'
import Search from './search-bar-styled';
import { TravelInfo } from '../travel-info/travel-info';

export default function SearchBar(){

    const countries=[
        { value: 'US', label: 'US' },
        { value: 'UK', label: 'UK' },
        { value: 'Canada', label: 'Canada' }
    ]
    const [fromLocation , setFromLocation ] = useState(countries[0])
    const [toLocation , setToLocation ] = useState(countries[1])

    const customStyles = {
        container: provided => ({
          ...provided,
          width: 150
        })
      };

    function handleFromChange(event){
        setFromLocation({value:event.value, label:event.label})
    }
    
    function handleToChange(event){
        setToLocation({value:event.value, label:event.label})
    }

    return(
        <div>
            <Search>
                <label>From</label>
                <Select 
                    options={countries} 
                    value={fromLocation}
                    onChange={handleFromChange}
                    styles={customStyles}
                />
                <label>To</label>
                <Select 
                    options={countries} 
                    value={toLocation}
                    onChange={handleToChange}
                    styles={customStyles}
                />     
            </Search>     
            <TravelInfo from={fromLocation.value} to={toLocation.value}/> 
        </div>
    )
}


