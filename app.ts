import express = require("express")
import {Application, json} from "express";
import {Response, Request} from "express/ts4.0";
const app: Application = express()

app.listen(3000, () =>{
    console.log('Connected')
} )
type Numbers = {
    num: number
}

function random(){
    return Math.round(Math.random()* 20)
}

app.use(json())
let outputArray:number[] = [];
app.get("/r1", (req: Request, res:Response) => {
    let size: Numbers  = req.query as unknown as Numbers;
    for(let i=1; i<= size?.num; i++) {
        outputArray.push(random())
    }
    res.send(outputArray)
    console.log(outputArray)
})

app.get("/r2", (req: Request, res:Response) => {
    let find: Numbers  = req.query as unknown as Numbers;
    let found = outputArray.find(element => element == find.num)
    res.send({found:found})
})

app.get("/r3", (req: Request, res:Response) => {
    let memoize: any = {}
    for(let number of outputArray){
        if(memoize[number])
           memoize[number]++
        else memoize[number]=1
    }
    res.send(memoize)

})
