import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState ={
 cryptoName : {
    "ask": "",
    "bid":"" ,
    "last": "",
    "high":"" ,
    "low":"" ,
    "volume": "",
    "open": {
        "hour": "",
        "day": "",
        "week":"" ,
        "month": "",
        "month_3": "",
        "month_6": "",
        "year": "",
    },
    "averages": {
        "day": "",
        "week": "",
        "month": "",
    },
    "changes": {
        "price": {
            "hour": "",
            "day": "",
            "week": "",
            "month": "",
            "month_3": "",
            "month_6":"" ,
            "year": ""
        },
        "percent": {
            "hour": "",
            "day": "",
            "week": "",
            "month": "" ,
            "month_3":"",
            "month_6":"" ,
            "year": ""
        }
    },
    "volume_percent": "",
    "timestamp":"" ,
    "display_timestamp": "",
    "display_symbol": ""
},
 isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        cryptoName: {},
        isFetching: true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        cryptoName: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_FAIL):
      return({
        ...state,
        cryptoName: {},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};

