import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCrypto, fetchFail } from './../actions';

const Crypto = (props) => {
  console.log('props',props)
  const { crypto, isFetching, error } = props;
  
  useEffect(() => {
    props.getCrypto();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching crypto for ya!</h2>;
  }

  const handleClick = ()=> {
    props.getCrypto();
  }

  const handleError = () => {
    props.fetchFail("YOU HIT THE ERROR BUTTON!!!");
  }

  return (
    <>

      <div>
        <h1> The rando crypto being showed is: {crypto.display_symbol} </h1>
        <h4> Data is as of: {crypto.display_timestamp} </h4>
        <h4> Data is as of: {crypto.display_timestamp} </h4>
        <h4> Last price: {crypto.last} </h4>
        <div>
             <button onClick={handleClick}>Get new crypto</button>
            <button onClick={handleError}>ERROR BUTTON</button>
        </div>
        <br></br>
        <img src={"https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}/>
      </div>

 
    </>
  );
};

const mapStateToProps = state => {
  return {
    crypto: state.cryptoName,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCrypto, fetchFail })(Crypto);
