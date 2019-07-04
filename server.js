const express=require('express');
const port=8000;  
const app=express();

const path=require('path');

//setting ejs template/view engine
app.set('view engine','ejs');

//setting view folder
app.set('views',path.join(__dirname,'views'));

//setting assets folder for static file using middleware express.static
app.use(express.static('assets'));

var arr=[];
app.use(express.urlencoded());

app.get('/',function(req,res){
    return res.render('index',{
        title:"Contact List",
        contact_list:arr

    });
});

app.post('/',function(req,res){
    arr.push(req.body);   
    return res.redirect('back');  //to redirect back to home page after this.
});


app.get('/delete-contact/',function(req,res){
    // console.log(req.query.name);
    // console.log(req.query.phone);

    for(var i=0;i<arr.length;i++){
        if(arr[i].phone==req.query.phone){
            arr.splice(i,1);
            break;
        }
    }
    return res.redirect('back');

});

app.listen(port,function(err){
console.log('server is up and running at port',port);
});