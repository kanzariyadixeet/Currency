import React, { useContext } from "react";
import "../App.css";
import { Context } from "../ConApi";
export default function CoinDetail() {
    const { details } = useContext(Context)


    return (
        <div>



            <section class="containers">

                <div class="cards">
                    <div class="card-image">
                        <img src={details.image} alt="card image" />
                    </div>
                    <div class="content">
                        <h3>{details.name}</h3>
                        <p>Market Cap Rank : {details.market_cap_rank}</p>
                        <p>Current Price : {details.current_price}</p>
                        <p>Symbol : {details.symbol}</p>
                        <p>High (24h) : {details.high_24h}</p>
                        <p>Low (24h) : {details.low_24h}</p>
                        <p>Circulating Supply : {details.circulating_supply}</p>
                        <p>Fully Diluted Valuation : {details.fully_diluted_valuation}</p>



                    </div>
                   
                </div>

            </section>

        </div>
    )
}
