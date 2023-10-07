

const EventCard = ({ card }) => {
    const { logo, event_title, price, location, event_description } = card;
    return (
        <div>

            <img className=" w-96 h-72" src={logo} alt="" />
            <h2 className=" text-2xl font-bold" > {event_title} </h2>
            <div className=" flex gap-24 text-xl" >
                <p> {location} </p>
                <p>  {price} </p>
            </div>
            <p> {event_description} </p>

            <div className=" text-center mt-3" >
            <button className="btn" >  Details  Service  </button>

            </div>
        </div>
    );
};

export default EventCard;