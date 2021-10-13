import React from 'react';
import Card from './Cards'
import Sdata from './Sdata';

var App = () => (
    <>
        {Sdata.map((val, index) => {
            return (
                <Card imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            )
        })}
    </>
)
export default App;
