import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function GoodsInput() {
    let [productName, setProductName] = useState("");
    let [productPrice, setProductPrice] = useState("");

    let { counter } = useSelector(state=>state);
    const dispatch = useDispatch();

    return (         
        <div className="row">
            <h1 className="col-xs-offset-4">添加商品</h1>

            {/* Back to shopping cart */}
            <div className="col-xs-offset-10">
                <Link to="/" className="btn btn-primary">返回购物车</Link>
            </div>

            <div className="col-xs-8">
                <div className="form-group">
                    <label className="h3">商品名称</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="输入商品名称"
                        value={productName}
                        onChange={(e)=>{ setProductName(e.target.value) }} 
                    />
                </div>
            </div>

            <div className="col-xs-8">
                <div className="form-group">
                    <label className="h3">商品价格</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="输入商品价格"
                        min="0.00"
                        step="0.01"
                        value={productPrice}
                        onChange={(e)=>{ setProductPrice((e.target.value)) }} 
                    />
                </div>
            </div>

            <div className="col-xs-8">
                <button 
                    className="btn btn-primary btn-lg"
                    onClick={()=>{

                        if(!productName.trim()) {
                            window.alert('商品名称不能为空');
                            return;
                        }

                        if(!productPrice.trim()) {
                            window.alert('商品价格不能为空');
                            return;
                        }

                        let newProduct = {
                            id: counter+1,
                            name: productName,
                            price: parseFloat(productPrice)
                        }

                        console.log(newProduct);

                        dispatch({
                            type: 'add_new_product',
                            payload: newProduct
                        });

                        window.alert("商品已加入购物车! 您还可以继续添加!");

                        setProductName("");
                        setProductPrice("");
                    }}
                >
                    添加
                </button>
            </div>
        </div>
    );
}


export default GoodsInput;