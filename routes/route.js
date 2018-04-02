const express = require('express');
const router = express.Router();
// its const bcz value this values should not get change


const Contacts = require('../models/contacts');



//Retriving contacts list
router.get('/contacts',(req, res, next)=>{
    res.send("Getting contacts list");
    Contacts.find(function(err, contacts){
         res.json(contacts);

    })

});



//Adding contact into db
router.post('/saveContact', (req, res, next)=>{
//logic

let newContact = new Contacts({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
});

newContact.save((err, contact)=>{
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