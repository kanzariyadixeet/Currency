import React, { useState, useEffect, useContext } from "react";
import { apidata } from "../redex/actions";
import "../App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Context } from "../ConApi";

export default function CoinList() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.api.data);

    useEffect(() => {
        dispatch(apidata());
    }, [dispatch]);

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");

    const fetchMoreData = () => {
        if (items.length >= data.length) {
            setHasMore(false);
            return;
        }

        setTimeout(() => {
            setItems(prevItems => {
                const newItems = data.slice(prevItems.length, prevItems.length + 10);
                return prevItems.concat(newItems);
            });
        }, 3000);
    };

    useEffect(() => {
        setItems(data.slice(0, 10));
    }, [data]);

    const searchFum = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);

        const filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue) ||
            item.current_price.toString().includes(searchValue)
        );

        setItems(filteredData.slice(0, 10));  // Reset the displayed items
        setHasMore(filteredData.length > 10);  // Adjust hasMore based on the filtered data
    };
    const navigate = useNavigate();

    // CoinDetail
    const { setdetails } = useContext(Context)
    const CoinDetailfum = (item) => {

        setdetails(item)

        navigate('/CoinDetail');
    };



    return (
        <>

            <input className="input" type="text" placeholder="Search  Name and Current Price" value={search} onChange={searchFum} />

            <div className="wrapper">

                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<div className="menLoading"><h4 className="loading"></h4></div>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            {search === "" ? <b>You have seen it all!</b> : ""}
                        </p>
                    }
                >
                    <div className="container">
                        {items.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-content" onClick={() => CoinDetailfum(item)}>
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p>High (24h) : {item.high_24h}</p>
                                    <p>Low (24h) : {item.low_24h}</p>
                                    <button>Current Price: ${item.current_price}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>

            </div>
        </>
    );
}
