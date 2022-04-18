import React from 'react';
import useDataLoad from '../../hooks/useDataLoad';

const CheckOut = () => {
    const[s]=useDataLoad()
    return (
        <div>
            chekout {s.length}
        </div>
    );
};

export default CheckOut;