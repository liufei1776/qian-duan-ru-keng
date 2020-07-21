<template>
    <div>
        <section class="row">
            <div class="col-xs-4 col-xs-offset-4">
                <h3>商品详情</h3>
            </div>
        </section>

        <section class="row">
            <div class="col-xs-12">
                <table>
                    <tr>
                        <th>商品名称</th>
                        <td>{{productDetail.name}}</td>
                    </tr>
                    <tr>
                        <th>商品价格</th>
                        <td>{{productDetail.price | rmb}}</td>
                    </tr>
                    <tr>
                        <th>厂商</th>
                        <td>{{productDetail.vendor}}</td>
                    </tr>
                    <tr>
                        <th>配置参数</th>
                        <td>此次省略一万字...</td>
                    </tr>
                </table>
            </div>
        </section>

        <section class="row">
            <div class="col-xs-12">
                <router-link :to="{name: 'Home'}">&lt; 返回商品列表</router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    computed: {
        productDetail() {
            let id = this.$route.params.id;
            console.log(id);
            return this.$store.state.products.filter(item => item.id == id)[0];
        }
    }
}
</script>

<style scoped>
    th, td{
        padding: 10px;
    }
</style>