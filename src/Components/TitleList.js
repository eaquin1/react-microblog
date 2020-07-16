import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTitlesFromApi } from "../actions/titles";
import { sendVoteToApi} from "../actions/posts"

function TitleList() {

    const titles= useSelector((store) => store.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(function() {
        async function fetchTitle() {
            dispatch(fetchTitlesFromApi());
            setIsLoading(false)
        }

        if(isLoading) {
            fetchTitle()
        }
    }, [dispatch, isLoading])

    const vote = (direction, id) => {
        dispatch(sendVoteToApi(id, direction))
    }

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
            <div className="card-footer">
                <small>{b.votes} votes</small>
                <i className="fas fa-thumbs-up text-success ml-2"
                onClick={e =>vote("up", b.id)} />
                <i className="fas fa-thumbs-down text-danger ml-2"
                onClick={e => vote("down", b.id)} />
            </div>
        </div>
    ));
    return <div className="row">{list}</div>;
}

export default TitleList;
