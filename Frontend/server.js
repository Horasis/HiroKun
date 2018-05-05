const express = require('express');
const app = express();
const temp = process.env.PORT || 3000;

app.use(express.static('./folder'))

app.get("/folder/:saveID", function(request,response)
{
    response.send("ID = " + request.params["saveID"])
});

app.get("/get-price/:rub/tool/:cop", function(request,response)
{
    const priceOne = request.params["rub"]
    const priceTy = request.params["cop"]
    if(request.params["cop"] > 99) return response.sendStatus(BadError);
    else 
    {
        response.json(`В рублях: ${priceOne}, В копийках: ${priceTy}`);
    }
});

app.get("/get-goods", function(req,res)
{
    const good = req.query.good;
    const price = req.query.price_order;
    console.log(good);
    console.log(price);
    res.json({Категория : req.query.good, price : req.query.price_order});
});

app.listen(temp, function ()
{
    console.log("Serv Arbeiten!")
});