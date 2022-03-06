/*import express = require("express")
import {Application, json} from "express";
import {Response, Request} from "express/ts4.0";
const app: Application = express()

app.listen(3000, () =>{
    console.log('Connected')
} )
type Numbers = {
    num1?: number
}
app.use(json())
app.get("/r", (req: Request, res:Response) => {
    /!*let arr: Numbers = req.query;
    return res.send({arr})*!/

    let inputArray = [];
    let size: Numbers = req.query;
    for(let i=0; i< size; i++) {
        inputArray[i] = (i+1);
    }
    return res.send(inputArray.length)
})*/
var inputArray = [];
var size = 5;
for (var i = 0; i < size; i++) {
    inputArray[i] = (i + 1);
}
inputArray.forEach(function (element) {
    Math.round(Math.random() * 20);
});
console.log(inputArray);
/*
const mr = () => {
    return Math.round(Math.random()* 20)
}
console.log(mr())*/
