import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { Search, Container } from './travel-restrictions-styled';
import { TravelInfo } from '../travel-info/travel-info';
import { Map } from '../map/map';
import data from '../../data.json'

export default function TravelRestrictions(){
    const countries = data.countries
    const [fromLocation , setFromLocation ] = useState({"value": "", "label": ""})
    const [toLocation , setToLocation ] = useState({"value": "", "label": ""})
    const [showTravelInfo,setShowTravelInfo] = useState(false)
    const [fromCountries,setFromCountries] = useState(countries)
    const [toCountries,setToCountries] = useState(countries)

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
        setFromLocation({ value:event.value, label:event.label })
        var filteredCountries = countries.filter(country => country.label !== event.label);
        setToCountries(filteredCountries)
    }
    
    function handleToChange(event){
        setToLocation({ value:event.value, label:event.label })
        var filteredCountries = countries.filter(country => country.label !== event.label);
        setFromCountries(filteredCountries);
    }

    return(
        <Container>
            <Search>
                <span>
                    <label>From</label>
                    <Select 
                        options={fromCountries} 
                        value={fromLocation}
                        onChange={handleFromChange}
                        styles={customStyles}
                    />
                </span>
                <span>
                    <label>To</label>
                    <Select 
                        options={toCountries} 
                        value={toLocation}
                        onChange={handleToChange}
                        styles={customStyles}
                    />  
                </span>   
            </Search>   
            {showTravelInfo && <TravelInfo from={fromLocation.value} to={toLocation.value}/>}
            {showTravelInfo && <Map from={fromLocation.value} to={toLocation.value}/>}
        </Container>
    )
}


