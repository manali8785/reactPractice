import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import Search from './travel-restrictions-styled';
import { TravelInfo } from '../travel-info/travel-info';
import { Map } from '../map/map';
import data from '../../data.json'

export default function SearchBar(){
    const [fromLocation , setFromLocation ] = useState({"value": "", "label": ""})
    const [toLocation , setToLocation ] = useState({"value": "", "label": ""})
    const [showTravelInfo,setShowTravelInfo] = useState(false)

    useEffect(() => {       
        if(fromLocation.value !=="" && toLocation.value !=="") {
            setShowTravelInfo(true);            
        }
    },[fromLocation,toLocation]);

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
                <span>
                    <label>From</label>
                    <Select 
                        options={data.countries} 
                        value={fromLocation}
                        onChange={handleFromChange}
                        styles={customStyles}
                    />
                </span>
                <span>
                    <label>To</label>
                    <Select 
                        options={data.countries} 
                        value={toLocation}
                        onChange={handleToChange}
                        styles={customStyles}
                    />  
                </span>   
            </Search>   
            {showTravelInfo &&<TravelInfo from={fromLocation.value} to={toLocation.value}/>}
            {showTravelInfo &&<Map from={fromLocation.value} to={toLocation.value}/>}
        </div>
    )
}


