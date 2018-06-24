

// reduce   收敛函数,有4个参数，返回叠加后的结果。
//上一个，下一个，索引，原数组
    /**
     * prev 数组的第一项，next数组的第二项
     */
let sum =[1,2,3,4,5].reduce(function (prev,next,index,item) {
    console.log(prev,next)
        return prev+next
})
console.log(sum)

let arrs = [{price:30,count:2},{price:20,count:6}]
let arrss = arrs.reduce(function (prev, next, index, item) {
    console.log(prev,next);
    return prev.price*prev.count+next.price*next.count
})
console.log(arrss)