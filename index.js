const express = require('express')
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    layoutsDir:__dirname + "/views/layouts",
    extname:"hbs"
})
const port = 3000
app.engine("hbs",hbs.engine);
app.set("view engine","hbs");

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render("index",{
        name:"James"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})