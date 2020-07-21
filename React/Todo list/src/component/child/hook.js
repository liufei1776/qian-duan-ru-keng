import React from 'react';


function useSize() {
    return {
        w: window.innerWidth,
        h: window.innerHeight 
    }
}


// 获取滚动条 和 设置滚动条
function useScrollY() {
    return [
        window.scrollY,
        (scrollY)=>{
            window.scrollTo(0, scrollY);
        }
    ];
}

export {useSize, useScrollY};