const express=require('express')
const app=express();
const port = process.env.PORT || 3000;
const path=require('path')
const templates=path.join(__dirname, '../templates');
const bodyParser=require('body-parser');
const cors=require('cors');
app.set('view engine','hbs');
app.set('views', templates);

app.use("/styles",express.static(path.join(__dirname,"../styles")))
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`   Server started on port ${port}`);
})

app.get('/',(req,res)=>{
res.render('play_game');
})

app.post('/play',async (req,res)=>{
 res.render("s_p_s")
})