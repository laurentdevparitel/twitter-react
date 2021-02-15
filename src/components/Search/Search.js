
import React, { useEffect } from "react";
import {
    Row,
    Col,
    P,
    Ul,
    Li
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
    const SEARCH_REFRESH_INTERVAL = 20;  // seconds

    // Redux
    const {searchQuery, filteredTweets, isNewSearch} = useSelector(state => ({
        searchQuery: state.searchQuery,
        filteredTweets: state.filteredTweets,
        isNewSearch: state.isNewSearch,
    }));

    const dispatch = useDispatch();

    // Refresh search results every n seconds
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, SEARCH_REFRESH_INTERVAL * 1000);
        return () => clearInterval(interval);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            const data = await api.getTwitterSearch(searchQuery, 20, ["source"], ["username"]);
            //const data = await api.getTwitterSearch(searchQuery, 20, ["source"]);
            console.info(`[${COMPONENT_NAME}.fetchData] >>>> data loaded: `, data);

            if (typeof data !== "undefined") {
                console.debug(`[${COMPONENT_NAME}.fetchData]: `, data);

                dispatch({type: "SET_FILTERED_TWEETS", payload: data});

                // hide loader
                setLoading(false);
                dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

                dispatch({type: "SET_IS_NEW_SEARCH", payload: false});
            }
        }
        catch(error){
            console.error(`[${COMPONENT_NAME}.fetchData] error`, error);
            setLoading(true);
            dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});
            dispatch({type: "SET_IS_NEW_SEARCH", payload: false});

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

    const renderNoFilteredTweetsFound = () => {

        if (!searchQuery || searchQuery === '' || loading){
            return;
        }
        if (!isNewSearch && !filteredTweets.length){
            return (
                <P className="text-center mt-3">
                    `Oups ... No tweet found with the keyword search <b>{searchQuery}</b> ...`
                </P>
            )
        }
    }

    return (
        <Row>
            <Col lg="12">
                <SearchBar onFormSubmit={fetchData} />

                {
                    loading && <Loader />
                }

                { renderNoFilteredTweetsFound() }

                <Ul>
                    {
                        filteredTweets.map((tweet, index) => (
                            <Li key={tweet.id} >
                                <TweetCard data={tweet} />
                            </Li>
                        ))
                    }
                </Ul>
            </Col>
        </Row>
    )
}

export default Search;