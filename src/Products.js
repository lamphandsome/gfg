
const products = [
        {
            pic: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
            itemname: "Product 1",
            price: 51,
            discount: 10,
            rating: 3,
            sale: true,
        },
        {
            pic: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
            itemname: "Product 2",
            price: 71,
            discount: 20,
            rating: 4,
            sale: true,
        },
        {
            pic: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
            itemname: "Product 3",
            price: 21,
            discount: 0,
            rating : 5,
            sale : false,
        },
        {pic: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
        itemname: "Product 4",
        price: 51,
        discount: 25,
        rating : 2,
        sale: true,
    },
    ];
export default products;

// export default function ProductList(){
//     return(
//         <div className="container-fluid" style={{background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}}>
//             <div className="container p-5">
//                 <div className="row">
//                     {items.map((item,index) => ( //hàm map() là hàm call back ,nó lặp qua từng phaafn tử của items.
//                         <div key={index} className="col-lg-4 col-md-12 mb-4">
//                         <ProductCard {...item}/>  
//                         {/* props truyền từ thằng cha xuống.Đây là cha. */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }