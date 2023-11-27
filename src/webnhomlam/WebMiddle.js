function Middle() {
    return (
<div className="phu-kien">
                <h3 className="text">Phụ kiện</h3>
                <div className="sap-xep">
                    <h6 className="text-1">Sắp xếp</h6>
                    <div>
                    <select>
                        <option>All</option>
                        <option>Sản phẩm nổi bật</option>
                        <option>Giá: tăng dần</option>
                        <option>Giá: giảm dần</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                    </select>    
                    </div>
                </div>
                <div className="loc-gia">
                    <h6 className="text-1">Lọc giá</h6>
                    <div>
                    <select>
                        <option>All</option>
                        <option>Dưới 100.000đ</option>
                        <option>100.000đ-250.000đ</option>
                        <option>250.000đ-500.000đ</option>
                        <option>500.000đ-800.000đ</option>
                        <option>Trên 800.000đ</option>
                    </select>
                    </div>
                </div>
                <div className="mau-sac">
                    <h6 className="text-1">Màu sắc</h6>
                    <div>
                    <select>
                        <option>All</option>
                        <option>Đen</option>
                        <option>Trắng</option>
                        <option>Xám</option>
                        <option>Nâu</option>

                    </select>
                    </div>
                </div>
                <div className="kich-thuoc">
                    <h6 className="text-1">Kích thước</h6>
                    <div>
                    <select>
                        <option>All</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XS</option>
                    </select>
                    </div>
                </div>
                <div className="tim-kiem">
                    <button className="button"><h6 className="text-2">Search</h6></button>
                </div>
            </div>
    )
}
export default Middle;