import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromApi } from "../actions/titles";

function TitleList() {

    const titles= useSelector((store) => store.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(function() {
        async function fetchTitle() {
            await dispatch(fetchTitlesFromApi());
            setIsLoading(false)
        }

        if(isLoading) {
            fetchTitle()
        }
    }, [dispatch, isLoading])

    if(isLoading) return <b>Loading</b>;

    if(!isLoading && titles.length === 0){
        return <b>Please add a post!</b>
    }

    let list = titles.map((b) => (
        <div className="card" key={b.id}>
            <div className="card-body">
                <div className="card-title text-center">
                    <Link to={"/" + b.id}>{b.title}</Link>
                </div>
                <div className="card-text">{b.description}</div>
            </div>
        </div>
    ));
    return <div className="row">{list}</div>;
}

export default TitleList;
