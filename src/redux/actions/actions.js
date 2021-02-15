import {

    SET_TWEETS,
    SET_FILTERED_TWEETS,
    SET_SEARCH_QUERY,
    SET_APP_MESSAGE,
    SET_IS_XHR_RUNNING,
    SET_IS_NEW_SEARCH,

} from "../constants/action-types.js";

export const setTweets = tweets => ({ type: SET_TWEETS, payload: tweets });
export const setFilteredTweets = filteredTweets => ({ type: SET_FILTERED_TWEETS, payload: filteredTweets });
export const setSearchQuery = searchQuery => ({ type: SET_SEARCH_QUERY, payload: searchQuery});

export const setAppMessage = appMessage => ({ type: SET_APP_MESSAGE, payload: appMessage });
export const setIsXHRRunning = isXHRRunning => ({ type: SET_IS_XHR_RUNNING, payload: isXHRRunning });
export const setIsNewSearch = isNewSearch => ({ type: SET_IS_NEW_SEARCH, payload: isNewSearch });

