const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');
const render = require('./render');

app.use((ctx, next) => {
  if (ctx.path === '/') return render(ctx);
  return next();
});
app.use(serve(path.join(__dirname, '../build/')));
app.use(render);

app.listen(3030);