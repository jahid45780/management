import { useParams } from "react-router-dom";


const EventDetails = () => {
    const  {id} = useParams()
    return (
        <div>
            <h2>details</h2>
            <p> {id} </p>
        </div>
    );
};

export default EventDetails;