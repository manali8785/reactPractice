import React, { useState } from 'react';
import Select from 'react-select'
import Form from './search-bar-styled';
import Button from 'react-bootstrap/Button';
export default function SearchBar(){

    const countries=[
        { value: 'us', label: 'US' },
        { value: 'uk', label: 'UK' },
        { value: 'canada', label: 'Canada' }
    ]
    const [fromLocation , setFromLocation ] = useState({ value: '', label: '' })
    const [toLocation , setToLocation ] = useState({ value: '', label: '' })

    const handleSubmit = (e) =>{
        console.log(fromLocation, toLocation)
        e.preventDefault()
    }

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
            <Form onSubmit={handleSubmit}>
                <label>From
                    <Select 
                        options={countries} 
                        value={fromLocation}
                        onChange={handleFromChange}
                        styles={customStyles}
                    />
                </label>
                <label>To
                    <Select 
                        options={countries} 
                        value={toLocation}
                        onChange={handleToChange}
                        styles={customStyles}
                    />
                </label>
                <input type="submit" value="Submit" />
            </Form>

    )
}


