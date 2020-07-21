
const initialState = {
    data: [
        {
            id: 1,
            name: '苹果',
            price: 7,
            amount: 2,
            total: 14
        }
    ],
    counter: 1
};





function reducer(state=initialState, action) {
    switch(action.type) {
        // 增加商品数量
        case 'increase_amount':
            {
                let {id, amount} = action.payload
                let {data, counter} = state;

                data.forEach((item, index)=>{
                    if(item.id === id) {
                        data[index].amount = amount;
                        data[index].total = data[index].price * amount;
                    }
                })

                return {data: [...data], counter}
            }
            

        // 新增商品
        case 'add_new_product': 
            {
                let {id, name, price} = action.payload;
                let {data, counter} = state; 

                data.push({
                    id,
                    name,
                    price,
                    amount: 1,
                    total: price * 1
                })

                // 同时counter递增
                return {data: [...data], counter: counter+1}
            }
        
        case 'delete_product': 
            {
                let {data, counter} = state;

                data = data.filter(item=>item.id!==action.payload)

                return {data: [...data], counter}
            }
            
        default: 
            return state;
    }
    
}

export default reducer;