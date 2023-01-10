import { Link } from "react-router-dom";

export default function NoPage(){
    return(
        <h2>you are landed wrong path!!
        <Link to="/">Redirect to Login page</Link>
        </h2>
    )
}