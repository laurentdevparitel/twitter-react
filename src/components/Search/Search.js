
import React from "react";
import {
    Row,
    Col,
    P
} from '@bootstrap-styled/v4';

// -- Redux
import {useDispatch, useSelector} from "react-redux";

import SearchBar  from "./SearchBar";
import Loader  from "../Loader/Loader";
import TweetCard  from "../TweetCard/TweetCard";

// -- API
import API from '../../api/API.js';

const api = new API();

const COMPONENT_NAME = "Search";

const Search = () => {

    const [loading, setLoading] = React.useState(false);

    // Redux
    const {searchQuery, filteredTweets} = useSelector(state => ({
        searchQuery: state.searchQuery,
        filteredTweets: state.filteredTweets,
    }));

    const dispatch = useDispatch();

    /**
     * Fetch data from API
     * @returns void
     */
    const fetchData = async () => {
        console.info(`[${COMPONENT_NAME}.fetchData]`);

        if (!searchQuery) return;

        setLoading(true);
        dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

        try {
            const data = await api.getTwitterSearch(searchQuery);
            console.info(`[${COMPONENT_NAME}.fetchData] >>>> data loaded: `, data);

            if (typeof data !== "undefined") {
                console.debug(`[${COMPONENT_NAME}.fetchData]: `, data);

                dispatch({type: "SET_FILTERED_TWEETS", payload: data});

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

    console.info(`[${COMPONENT_NAME}] loading`, loading);
    console.info(`[${COMPONENT_NAME}] searchQuery`, searchQuery);
    console.info(`[${COMPONENT_NAME}] filteredTweets`, filteredTweets);

    const noFilteredTweetsFound = () => {

        if (!searchQuery || searchQuery === ''){
            return;
        }
        return (
            <P>
                `Oups ... No reference was found with the keyword search <b>{searchQuery}</b> ...`
            </P>
        )
    }

    return (
        <Row>
            <Col lg="12">
                <SearchBar onFormSubmit={fetchData} />

                {
                    loading && <Loader />
                }

                {(
                    filteredTweets.length ?

                        filteredTweets.map((tweet, index) => (

                            <TweetCard key={tweet.id} data={tweet} />
                        )) :

                        noFilteredTweetsFound()
                )}
            </Col>
        </Row>
    )
}

export default Search;