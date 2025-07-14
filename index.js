const express=require("express");
const cors=require("cors");
const mysql2=require("mysql2");

const app=express();
app.use(cors())
app.use(express.json());


const con=mysql2.createConnection({
	host:"sql12.freesqldatabase.com",
	user:"sql12789982",
	password:"jaIpX4CV4u",
	database:"sql12789982",
});


app.get("/gq",(req,res)=>{
	let category=req.query.category;
	let sql = "SELECT quote FROM quotes WHERE category=? ORDER BY RAND() LIMIT 1";

	con.query(sql,[category],(error,result)=>{
		if (error)
			res.status(500).send(error);
		else
			res.send(result);
	});
});


app.listen(9000, () => {console.log("ready to server @9000"); });
