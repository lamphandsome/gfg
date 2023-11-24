import React from "react";
import ItemCard from "./itemcard";

const items = [
        {
            pic: "https://fastly.picsum.photos/id/715/200/300.jpg?hmac=jMgGkNrRGTz5pgw27YMTCyozftm33Rw2fPKQU2FypW4",
            itemname: "Hoàng hôn trên bãi biển",
            price: "Price: $25.99",
            rating: "Rating: 4.5",
        },
        {
            pic: "https://fastly.picsum.photos/id/1011/200/300.jpg?hmac=3OASTCcuMs99-ZFi2rl7Rh9DuaNJXZytGmDyOsRm7Hw",
            itemname: "Cô gái và cái thuyền",
            price: "Price: $69.96",
            rating: "Rating: 9.6",
        },
        {
            pic: "https://fastly.picsum.photos/id/391/200/300.jpg?hmac=3xP-y2PRN2E0__aPOCp1sja7XrimKgLQAMiSaNd0Cko",
            itemname: "Thành phố buồn",
            price: "Price: $21.02",
            rating: "Rating: 2.1",
        },
    ];

export default function ItemList(){
    return(
        <div className="container-fluid" style={{background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}}>
            <div className="container p-5">
                <div className="row">
                    {items.map((item,index) => ( //hàm map() là hàm call back ,nó lặp qua từng phaafn tử của items.
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                        <ItemCard {...item}/>  
                        {/* props truyền từ thằng cha xuống.Đây là cha. */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

