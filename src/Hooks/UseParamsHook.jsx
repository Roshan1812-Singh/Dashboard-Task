import { useState } from "react"

export const useParams = () => {
    const [params, setParams] = useState([]);

    const saveParams = (data) => {
        setParams(data);
        console.log("User Data Registered", data);
    }

    return {params, saveParams};
};

