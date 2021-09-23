export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";



export const getCrypto = () => dispatch => {
    dispatch(fetchStart());
    // npm install bitcoinaverage
    const ba = require('bitcoinaverage');
    var publicKey = 'YzI3NzYxNTI3NTJhNGM1OWEyOWQwYTYzZGQ3YjI2M2Y';
    var restClient = ba.restfulClient(publicKey);
    const cyptoArr = ['BTCUSD','ETHUSD','LTCUSD'] ;
    const random = Math.floor(Math.random() * cyptoArr.length);

    restClient.getTickerDataPerSymbol('global', cyptoArr[random], function(response) {
        console.log(JSON.parse(response).ask);
        dispatch(fetchSuccess(JSON.parse(response)));
    }, function(error){
        console.log(error);
        dispatch(fetchFail(error));
    }) ;
}

export const fetchStart = ()=> ({type: FETCH_START});

export const fetchSuccess = (crypto)=> {
    return({type: FETCH_SUCCESS, payload:crypto});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload:error});
}