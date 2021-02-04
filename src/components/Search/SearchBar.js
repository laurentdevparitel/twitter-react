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

const SearchBar = () => {

    const dispatch = useDispatch();

    /**
     * Update keywordSearch
     * @param {Event} e
     * @returns void
     */
    const handleKeywordSearchChange = (e) => {
        //console.info(`[${COMPONENT_NAME}.handleKeywordSearchChange] e`, e);

        // Redux storage
        dispatch({type: "SET_KEYWORD_SEARCH", payload: e.target.value});
        //dispatch({type: "SET_FILTERED_TWEETS", payload: filteredTweets});
    }

    /**
     * Submit search
     * @returns void
     */
    const handleSubmit = () => {
        console.info(`[${COMPONENT_NAME}.handleSubmit]`);
    }

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="search"><b>Recherche Twitter</b></Label>
                <InputGroup>
                    <Input type="text" placeholder="#React" id="search" onChange={handleKeywordSearchChange} />
                    <InputGroupButton onClick={handleSubmit}>
                        Rechercher
                    </InputGroupButton>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;