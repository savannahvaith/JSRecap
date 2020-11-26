import React from 'react';
import ComponentWithProps from './ComponentWithProps';

const Info = () => {

    // declare JS variables here (outside of the return)
    const someValue = 10; 
    // unstructured, and dont follow a type
    const someDataObject = {
        key1: `value1`,
        key2: 2, 
        key3: [`array`,`of`,`strings`]
    };

    const someDataArray = [0,1,2,3,4,5];

    const someFunction = () => (`A string from a function`);

    // what you want to see on the screen
    return(
        <>
            <ComponentWithProps
                valueProp={someValue}
                objectProp={someDataObject}
                arrayProp={someDataArray}
                functionProp={someFunction}
                headerText="Heading text from headerText prop"
                numericProp={100}
            />
        </>

    );


}

export default Info; 