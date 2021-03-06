import {

    SET_TWEETS,
    SET_FILTERED_TWEETS,
    SET_SEARCH_QUERY,
    SET_APP_MESSAGE,
    SET_IS_XHR_RUNNING,
    SET_IS_NEW_SEARCH,

} from "../constants/action-types.js";


const initialState = {

    tweets: [],  // fetched tweets from API
    filteredTweets: [],  // filtered tweets from search input
    searchQuery: null,    // search by keyword(s)
    appMessage: {   // app success / error messages (cf: MuiAlert)
        text: null,   // message
        severity: "success"    // success|warning|info|error
    },
    isXHRRunning: false,    // is XHR request running ?
    isNewSearch: true,  // new search with new searchQuery
};

/*
  Avoiding mutations in Redux :
  Using concat(), slice(), and …spread for arrays
  Using Object.assign() and …spread for objects
  https://medium.com/@nitish15p/immutable-object-and-array-operations-in-javascript-86047609532
*/

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TWEETS:
            return { ...state, tweets: action.payload };

        case SET_FILTERED_TWEETS:
            return { ...state, filteredTweets: action.payload };

        case SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload };

        case SET_APP_MESSAGE:
            return { ...state, appMessage: action.payload };

        case SET_IS_XHR_RUNNING:
            return { ...state, isXHRRunning: action.payload };

        case SET_IS_NEW_SEARCH:
            return { ...state, isNewSearch: action.payload };

        default:
            return state;
    }
};

// Remove an item inside items Array
/*const removeItem = (items, index) => {
    //items.slice(0, index-1).concat(items.slice(index, items.length))  // KO
    items.filter(function(value, i) {
        return i !== index;
    });
}*/

export default rootReducer;
