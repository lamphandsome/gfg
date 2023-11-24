import React from "react";
const ItemCard = ({pic, itemname, price, rating}) =>{ //thằng con đây.
    return (
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">
                <img src={pic}></img>
                <br />
                <h5 className="card-title">{itemname}</h5>
                <spam className="h2">{price}</spam>
                <p>{rating}</p>
                <br />
                </div>
            </div>
        </div>
    );
};
export default ItemCard;