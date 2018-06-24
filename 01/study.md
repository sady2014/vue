## 小胡子语法
`{{msg}}`支持三元运算符,例如:
```
<div id="app">{{msg==="我去尼玛吧"?1:0}}</div>
<script src="node_modules/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el: '#app',
        data:{
            msg:'我去尼玛的吧'
        }
    })
</script>
</body>
```
## model 
- v-model 绑定
- v-once 只绑定一次
- v-html 渲染html
- v-text 防止`{{}}`一闪而过