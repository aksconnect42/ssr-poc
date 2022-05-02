import React from 'react';

const Home = () => {
    return(
        <div>
        <div>This is the Home component</div>
        <button onClick={() => console.log('Event handlers work')}>Click to test event binding !</button>
        </div>);
}

export default Home;