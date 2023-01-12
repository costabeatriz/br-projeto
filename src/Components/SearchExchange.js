import {Divider, Input} from 'antd';
import React, { useState } from 'react';
const SearchExchange = (props) => {
    const {searchAgency} = props;
    const searchHandle = (e) => {
        searchAgency(e.target.value);
    }
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Search your Adventure</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Agency"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                id="Agency"
                                onChange={searchHandle}
                            />
</div>
    )
}
export default SearchExchange