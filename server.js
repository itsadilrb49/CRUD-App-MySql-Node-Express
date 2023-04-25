const express =require('express');
const bodyParser= require('body-parser');
//create express app
const app=express();

//setup server port 
const port =process.env.PORT || 40200;

//parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}))

//parse request of content-type - application/json
app.use(bodyParser.json());

//define a root route
app.get('/',(req,res)=>{
    res.send("Hello Ranial Systems");
})

//Require employee routes
const employeeRoutes=require('c:/angular/NodeMysqlCrudApp/src/routes/employee.routes')

//using middleware
app.use('/api/v1/employees',employeeRoutes)

//listen for requests
app.listen(port,()=>{
    console.log('Server is listening on port ${port}');
});
