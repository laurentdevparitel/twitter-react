import React from "react";

// -- Redux
import { useDispatch } from "react-redux";

import {
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupButton,
} from '@bootstrap-styled/v4';

const COMPONENT_NAME = "SearchBar";

const SearchBar = (props) => {

    const dispatch = useDispatch();

    /**
     * Update keywordSearch
     * @param {Event} e
     * @returns void
     */
    const handleSearchQueryChange = (e) => {
        //console.info(`[${COMPONENT_NAME}.handleSearchQueryChange] e`, e);

        // Redux storage
        dispatch({type: "SET_SEARCH_QUERY", payload: e.target.value});
        //dispatch({type: "SET_FILTERED_TWEETS", payload: filteredTweets});
    }

    /**
     * Submit search
     * @param {Event} e
     * @returns void
     */
    const handleFormSubmit = (e) => {
        console.info(`[${COMPONENT_NAME}.handleFormSubmit]`, e);

        e.preventDefault();

        // Passing data to parent component
        props.onFormSubmit();
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <FormGroup>
                <Label htmlFor="search-query"><b>Recherche Twitter</b></Label>
                <InputGroup>
                    <Input type="text" placeholder="#React" id="search-query" onChange={handleSearchQueryChange} />
                    <InputGroupButton onClick={handleFormSubmit}>
                        Rechercher
                    </InputGroupButton>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;