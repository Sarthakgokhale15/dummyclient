
const express=require("express");
const {google}=require("googleapis");
var cors = require('cors');
const { query } = require("express");
const app =express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get("/",async(req,res)=>{

    const auth=new google.auth.GoogleAuth({
        keyFile:"credentials.json",
        scopes:"https://www.googleapis.com/auth/spreadsheets"
    });

    const client=await auth.getClient;
    const googleSheets=google.sheets({version:"v4",auth:client});
    const spreadsheetId="1zUeJVMWXURWAcz5UpadyiGjYWlnIpnB8Kgfd6F9k4Cs";
    const metaData=await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,

    });

    const getRows=await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range:"Sheet1",
    });


    console.log(req.query.childName);
    const jcaIdNumber=req.query.jcaIdNumber;
    console.log(jcaIdNumber);
    const payload=[[req.query.childName,req.query.Age,req.query.gender,req.query.parentName,req.query.category1,req.query.category2,req.query.category3,req.query.ContactNumber,req.query.location,req.query.jcaId,req.query.jcaIdNumber]];

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range:"Sheet1!A:B",
        valueInputOption:"USER_ENTERED",
        resource:{
            values:payload,
        }


    })
    // console.log(req.body.values);
    res.send("this works");

});

app.listen(3001,(req,res)=>console.log("running on port 3001"))