import {Divider, Input} from 'antd';
import React, { useState } from 'react';
import CSS from './SearchExchange.css'
const SearchExchange = (props) => {
    const {searchAgency} = props;
    const searchHandle = (e) => {
        searchAgency(e.target.value);
    }

        const {searchPlace} = props;
        const searchD = (e) => {
            searchPlace(e.target.value);
        }

    return (
        <div className='search-comp'>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Search by agency</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Choose your favorite Agency!"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                id="Agency"
                                onChange={searchHandle}
                            />

                            

                            
                </div>
        
        </div>

    )
}
export default SearchExchange