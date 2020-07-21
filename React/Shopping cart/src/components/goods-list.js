import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import GoodsTable from './goods-table.js'


function GoodsList() {
    let {data} = useSelector(state=>state);
    console.log(data);


    return (
        <div className="row">
            <h1 className="col-xs-offset-4">购物车</h1>

            {/* link to add new item */}
            <div className="col-xs-offset-10">
                <Link to="/add" className="btn btn-primary">添加新商品</Link>
            </div>

            {
                data.length ? <GoodsTable/> : <p>购物车为空，请先添加商品</p> 
            }
        
        </div>
    );
}


export default GoodsList;