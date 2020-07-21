import React from 'react';
import {useSelector} from 'react-redux';


function GoodsTotal() {
    let {data} = useSelector(state=>state);

    return (
        <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
                <dl className="dl-horizontal">
                    <dt>数量总计:</dt>
                    <dd>{  data.reduce((sum,item)=>sum+item.amount ,0) }</dd>
                    <dt>花费总计:</dt>
                    <dd>{  data.reduce((sum,item)=>sum+item.total ,0) }</dd>
                    <dt>最贵单价:</dt>
                    <dd>{ data.reduce((max,item)=>Math.max(max, item.price) ,0) }</dd>
                </dl>
            </div>
        </div>
    );

}

export default GoodsTotal;