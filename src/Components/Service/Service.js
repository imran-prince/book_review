import React from 'react';
import useDataLoad from '../../hooks/useDataLoad';
import SingleService from '../SignleService/SingleService';

const Service = () => {
    const [services] = useDataLoad()


    return (

        <div>
            <h1 className='text-center mt-4'>Our Services</h1>
            <div className='mx-5 row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-2'>

                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;