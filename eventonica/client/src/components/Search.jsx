import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap'

const Search = ({ searchQuery, setSearchQuery }) => {
    
    return (
        <>
            <Form>
                <FormControl type="search" placeholder="Please enter title or category" value={searchQuery} onChange={ (e) => setSearchQuery(e.target.value) } />
            </Form>
        </>
    );
};

export default Search;
