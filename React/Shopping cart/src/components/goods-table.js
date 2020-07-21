import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


function GoodsTable() {
    const {data} = useSelector(state=>state);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr className="h4">
                        <th>商品名称</th>
                        <th>商品单价</th>
                        <th>购买数量</th>
                        <th>总价</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            placeholder="0"
                                            value={item.amount}
                                            onChange={
                                                (e)=>{
                                                    dispatch({
                                                        type: 'increase_amount',
                                                        payload: {
                                                            id: item.id,
                                                            amount: parseInt(e.target.value)
                                                        }
                                                    });
                                                }
                                            }
                                        />
                                    </td>
                                    <td>{item.total}</td>
                                    <td>
                                        <button 
                                            className="btn btn-default"
                                            onClick={()=>{
                                                if(window.confirm("确定移除该商品?")) {
                                                    dispatch({
                                                        type: 'delete_product',
                                                        payload: item.id
                                                    });
                                                }
                                            }}
                                        >
                                            删除
                                        </button>
                                    </td>
                                </tr>)
                        })
                    }
                    
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default GoodsTable;