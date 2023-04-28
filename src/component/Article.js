import "../component.css";
function MoreDetails({more_details}){
    return <article className="MoreDetails">
        <h1>More Details</h1>
        <p>{more_details}</p>
    </article>
}

export {
    MoreDetails
}