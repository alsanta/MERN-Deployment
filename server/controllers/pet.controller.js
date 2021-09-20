// Finish the path for the model you made
const Pet = require("../models/pet.model")

module.exports.getAll=(req,res)=>{
    Pet.find()
    .then(allAuthors=>{
        res.json({results:allAuthors})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.createNew=(req,res)=>{
    Pet.create(req.body)
    .then(author=>{
        res.json({results:author})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.deleteById=(req,res)=>{
    Pet.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.getById=(req,res)=>{
    Pet.find({_id:req.params.id})
    .then(singleProduct=>{
        res.json({result:singleProduct})
    })
    .catch(err=>{
        res.json({error:err})
    })
}

module.exports.updateById= (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}