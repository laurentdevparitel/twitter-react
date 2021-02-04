import {

    SET_TWEETS,
    SET_FILTERED_TWEETS,
    SET_KEYWORD_SEARCH,
    SET_APP_MESSAGE,
    SET_IS_XHR_RUNNING,

} from "../constants/action-types.js";

export const setTweets = tweets => ({ type: SET_TWEETS, payload: tweets });
export const setFilteredTweets = filteredTweets => ({ type: SET_FILTERED_TWEETS, payload: filteredTweets });
export const setKeywordSearch = keywordSearch => ({ type: SET_KEYWORD_SEARCH, payload: keywordSearch});

export const setAppMessage = appMessage => ({ type: SET_APP_MESSAGE, payload: appMessage });
export const setIsXHRRunning = isXHRRunning => ({ type: SET_IS_XHR_RUNNING, payload: isXHRRunning });

