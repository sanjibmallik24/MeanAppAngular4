const express = require('express');
const router = express.Router();
// its const bcz value this values should not get change


const Contacts = require('../models/contacts');





//Retriving contacts list
router.get('/contacts',(req, res, next)=>{
    let conList = new Contacts(
        {    _id: "1232",
            first_name: "Sanjib",
            last_name: "Mallik",
            phone: "7259550530"
        }
        );
    res.send(conList);
    // Contacts.find(function(contacts,err){
    //     console.log(contacts);
    //      res.json(contacts);
    // })



});



//Adding contact into db
router.post('/saveContact', (req, res, next)=>{


//logic

console.log(req);

let newContact = new Contacts({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
});

newContact.save((err, contact)=>{
    console.log(contact);
if(err){

    res.json({msg:"Failed to Save contact"});
}
else{
    res.json({msg: "Contact saved successfully"});
}
});

});


//Deleting Contact from db
router.delete('/deleteContact/:id',(req, res, next)=>{
//logic

Contacts.remove({_id: req.params._id},function(err, result){

    if(err){
        res.json(err);
    }else{
        res.json(result);
    }
});

})

module.exports = router;