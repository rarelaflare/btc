const db = require('../models');

const index = (req, res) => {
    db.Crypto.find({}, (err, foundCrypto) => {
        if (err) console.log('Error in cryptos#index:', err)

        if(!foundCrypto) return res.json({
            message: 'No cryptos found in database.'
        })

        res.status(200).json({ cryptos: foundCrypto });
    })
}

const show = (req, res) => {
    db.Crypto.findById(req.params.id, (err, foundCrypto) => {
        if (err) {
            console.log('Error in cryptos#show:', err);

            if(!foundCrypto) return res.json({
                message: 'There is no crypto with this ID in the db.'
            })

            return res.send("Incomplete cryptos#show controller function");
        }

        res.status(200).json({
            crypto: foundCrypto
        });
    });
};

const create = (req, res) => {
    db.Crypto.create(req.body, (err, savedCrypto) => {
        if (err) console.log('Error in cryptos#create:', err)

        // Validations and error handling here

        res.status(201).json({ crypto: savedCrypto })
    })
}

const update = (req, res) => {
    db.Crypto.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCrypto) => {
        if (err) {
            console.log('Error in Cryptos#update:', err)
    
            return res.send("Incomplete Cryptos#update controller function");
        }

        res.status(200).json({
            updatedCrypto
        });
    });
};

const destroy = (req, res) => {
    db.Crypto.findByIdAndDelete(req.params.id, (err, deletedCrypto) => {
      if (err) {
        console.log('Error in Cryptos#destroy:', err)
  
        return res.send("Incomplete Cryptos#destroy controller function");
      }
  
      res.status(200).json(
        {
          deletedCrypto
        }
      );
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};