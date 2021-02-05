
// -- axios
import axios from 'axios';

import MOCK_API from './MOCK_API';

/**
 * API
 * @returns void
 */

export default class API {

    constructor(env = null) {
        console.info(`[${this.constructor.name}]`, env);

        // if (env) {
        //     this.BASE_URL = env.ENV.API_BASE_URL;
        //     this.APP_BASE_URL = env.ENV.APP_BASE_URL;
        // }
        this.BASE_URL = process.env.REACT_APP_API_BASE_URL;
        this.ACESS_TOKEN = process.env.REACT_APP_API_ACESS_TOKEN;

        this.USE_MOCK_DATA = true;
    }

    /**
     * Handle form error messages from Ajax API call
     * TODO : use axios interceptors ?
     cf: https://stackoverflow.com/questions/47005457/handling-axios-error-in-react
     * https://getbootstrap.com/docs/4.0/components/forms/
     * @param {JSON} error
     * @return Object
     */
    static handleAPIErrorMessages(error) {
        //console.info(`[API.handleAPIErrorMessages] error:`, error);

        const errorMessage = {
            title: "",
            body: ""
        };

        if (typeof(error) !== "undefined"){

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                /*console.error(`[API.handleAPIErrorMessages] [response error]`,
                    `data: ${error.response.data}\n`,
                    `status: ${error.response.status}\n`,
                    `statusText: ${error.response.statusText}\n`,
                    `headers: ${error.response.headers}\n`
                );*/

                // Status
                if (typeof(error.response.status) !== "undefined"){
                    errorMessage.title += `Error ${error.response.status}`;
                }
                if (typeof(error.response.statusText) !== "undefined"){
                    errorMessage.title += ` : ${error.response.statusText}`;
                }

                // Body
                if (typeof(error.response.data) !== "undefined"){

                    if (typeof(error.response.data.errors) !== "undefined") {

                        for (let key in error.response.data.errors) {
                            errorMessage.body += `${error.response.data.errors[key]}\n`;
                        }
                    }
                    else if (typeof(error.response.data.message) !== "undefined" ){
                        errorMessage.body += `${error.response.data.message}`;
                    }
                    else {
                        errorMessage.body += `${error.response.data}`;
                    }
                }

                // 403 ..
                //let errorMessage = error.responseJSON.message; // global error message
            }
            else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the
                // browser and an instance of
                // http.ClientRequest in node.js
                console.error(`[API.handleAPIErrorMessages] [request error]`, error.request);
            }
            else {
                // Something happened in setting up the request that triggered an Error
                console.error(`[API.handleAPIErrorMessages] [error]`, error.message);
            }
            //console.error(`[${this.constructor.name}.getBooks] [config error]`, error.config);
        }
        else {
            if (error instanceof Error){
                errorMessage.title = error.toString();
            }
            else {
                errorMessage.title = errorMessage.body = "Internal server error";
            }
        }

        return errorMessage;
    }

    /**
     * Get Authorization headers
     * @returns Object
     */
    getAuthHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${this.ACESS_TOKEN}`
        }
    }


    //-------------------------------------------------------------------------
    //                            Twitter search
    //----------------------------d---------------------------------------------

    /**
     * Get recent tweets related to a search query
     ex : https://api.twitter.com/2/tweets/search/recent?query=react&max_results=20
     * @param {String} searchQuery
     * @param {Number} maxResults
     * @returns Promise
     */
    getTwitterSearch = async (searchQuery, maxResults= 20) => {
        console.info(`[${this.constructor.name}.getTwitterSearch]`, searchQuery, maxResults);

        const APIRoute = `${this.BASE_URL}/tweets/search/recent?query=${searchQuery}&max_results=${maxResults}`;

        if (this.USE_MOCK_DATA){
            const json = MOCK_API.getTwitterSearch;

            return Promise.resolve(json).then(json => {
                return json.data;
            });
        }

        const response = axios.get(APIRoute, {
            headers: this.getAuthHeaders()
        })
            .then(json => {
                console.log(`[${this.constructor.name}.getTwitterSearch] json`, json);
                return json.data;
            })
        /*.catch( error => {
            console.error(`[${this.constructor.name}.getTwitterSearchgetTwitterSearch] [error]`, API.handleAPIErrorMessages(error));
        });*/
            .finally(error => {
                console.error(`[${this.constructor.name}.getTwitterSearch] [error]`, API.handleAPIErrorMessages(error));
            });

        return response;
    }

}
