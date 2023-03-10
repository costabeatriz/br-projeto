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
        <div className='search-area'>
        <div className='input1'>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Search Agency</span>
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
                <div className='input2'>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Search Destiny</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Choose your Destiny!"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                id="Destiny"
                                onChange={searchD}
                            />

                </div>

                </div>

        
        </div>

    )
}
export default SearchExchange