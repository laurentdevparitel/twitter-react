
// -- moment
import moment from 'moment';

moment.locale("fr"); // default locale

const FILE_NAME = 'helpers';

//-------------------------------------------------------------------------
//                            Search
//-------------------------------------------------------------------------

/**
 * Handle a value search on property field
 * @param {Date} created_at
 * cf: https://momentjs.com/docs/#/displaying/fromnow/
 * @returns String
 */
export const getTimeInterval = (created_at) => {
    //console.info(`[${FILE_NAME}.getTimeInterval]`, created_at);

    if (!created_at){
        return '';
    }
    return moment(created_at).fromNow(true);
};