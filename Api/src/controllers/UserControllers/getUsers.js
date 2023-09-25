


const getUsers =  (req, res) => {

    try{
        res.status(200).send('get users works')
    }catch(error){
        console.log(error)
        return res.status(400).send(error.message)
    }
}

module.exports = getUsers