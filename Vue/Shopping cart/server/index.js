const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const products = require('./data/items.json');
const users = require('./data/users.json');

const app = new Koa();
const router = new KoaRouter();
app.use(KoaBody());
app.use(KoaStatic(__dirname + '/static'))

// router.get('/', ctx=>{
//     ctx.body = "Server Page";
// })

router.post('/db/checkuser', async ctx=>{
    console.log('post data:',ctx.request.body);
    let {username, password} = ctx.request.body
    let user = users.find(item=>{
        return item.username == username && item.password == Number(password);
    });
    console.log(user);

    if(user) {
        ctx.body = {
            hasAuth: true, 
            username: user.username,
            hasAdminRole: user.hasAdminRole,
            products
        }
    }
    else {
        ctx.body = {
            hasAuth: false
        }
    }

})


app.use(router.routes());
app.listen(8888);
