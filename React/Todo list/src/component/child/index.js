import React, { useState, useEffect, useRef } from 'react';

export default function Child(props) {
    let {name, setName} = props
    let [age, setAge] = useState(9);

    let prevName = useRef(name);
    let prevAge =  useRef(age);

    
    useEffect(()=>{
        // componentDidMount
        console.log('组件挂载完成之后执行');

        // componentWillUnmount
        return ()=>{
            console.log('组件即将卸载');
        }
    },[])


    useEffect(()=>{
        // componentDidUpdate
        if(prevName.current !== name || prevAge.current !== age) {
            console.log('组件更新完成');

            // 同步当前值
            prevName.current = name;
            prevAge.current = age;
        }
    },[name,age])
    
    return (
        <div>
            <p>Name: {name}</p>
            <input type="text"
                   value={name}
                   onChange={(e)=>{setName(e.target.value)}}
            />
            <p>Name: {age}</p>
            <input type="text"
                   value={age}
                   onChange={(e)=>{setAge(e.target.value)}}
            />
        </div>
    );
}