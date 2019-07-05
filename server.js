const express=require('express');
const port=8000;  
const db=require('./config/mongoose');
const Contact=require('./models/contact');
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
    Contact.find(
        {}
        ,
        function(err,contacts){    
            if(err){
                console.log('error in fetching contacts');
                return;
            }

            return res.render('index',{
                title:'Contact List',
                contact_list:contacts
            });
        }
    );
});

app.post('/',function(req,res){
    Contact.create(
        {
            name:req.body.name,
            phone:req.body.phone
        }
        , function(err,newContact){ 
            if(err){
                console.log('error in creating new contact');
                return;
            }
            console.log('*********The new contact created is: ',newContact);
            return res.redirect('back'); 
            //to redirect back to home page after this.
        }


    );
});


app.get('/delete-contact/',function(req,res){
    let id=req.query.id; //to fetch the value of query id from url received by request
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('can\'t delete');
            return;
        }
        //otherwise if no error i.e delete is successful
        return res.redirect('back');

    });

});

app.listen(port,function(err){
console.log('server is up and running at port',port);
});