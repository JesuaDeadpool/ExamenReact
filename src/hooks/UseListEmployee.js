import axios from "axios";
import { useEffect, useState } from "react"


const UseListEmployee = () => {

    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';


    useEffect(() => {
        axios.get(URL)
            .then(response => {
                setListData(response.data);
                setIsLoading(false);
                console.log(response.data)
            }).catch(
                err => {
                    setError(err);
                    setIsLoading(false);
                    console.log(err)
                }
            )
    }, []);


    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .substring(0, 2)
            .toUpperCase();
    }

    return {
        listData,
        isLoading,
        error,
        getInitials
    }


}

export default UseListEmployee; 