
import React from "react";
import {
    Row,
    Col
} from '@bootstrap-styled/v4';

// -- Redux
import {useDispatch, useSelector} from "react-redux";

import SearchBar  from "./SearchBar";

// -- API
import API from '../../api/API.js';

const api = new API();

const COMPONENT_NAME = "Search";

const Search = () => {

    const [loading, setLoading] = React.useState(true);

    // Redux
    const {searchQuery} = useSelector(state => ({
        searchQuery: state.searchQuery,
    }));

    const dispatch = useDispatch();

    /**
     * Fetch data from API
     * @returns void
     */
    const fetchData = () => {
        console.info(`[${COMPONENT_NAME}.fetchData]`);

        if (!searchQuery) return;

        setLoading(true);
        dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

        try {
            const data = api.getTweetsSearch(searchQuery);
            console.info(`[${COMPONENT_NAME}.fetchData] >>>> data loaded: `, data);

            if (typeof data !== "undefined") {
                console.debug(`[${COMPONENT_NAME}.fetchData]: `, data);

                // hide loader
                setLoading(false);
                dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});
            }
        }
        catch(error){
            console.error(`[${COMPONENT_NAME}.fetchData] error`, error);
            setLoading(true);
            dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

            dispatch({
                type: "SET_APP_MESSAGE",
                payload: {
                    text: API.handleAPIErrorMessages(error).title,
                    severity: "error"
                }
            });
        }
    }

    return (
        <Row>
            <Col lg="12">
                <SearchBar onFormSubmit={fetchData} />
            </Col>
        </Row>
    )
}

export default Search;