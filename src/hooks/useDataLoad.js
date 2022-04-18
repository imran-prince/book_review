import { useEffect, useState } from "react"

const useDataLoad=()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
        // fetch(`https://raw.githubusercontent.com/programming-hero-web-course-4/independent-service-provider-imran-prince/main/public/products.json?token=GHSAT0AAAAAABTDN56YU6FQOVCI3LSPMR6IYS45KYA`)
        fetch('products.json')
        .then(rs=>rs.json())
        .then(data=>setServices(data))


    },[])
    return [services]
}
export default useDataLoad 