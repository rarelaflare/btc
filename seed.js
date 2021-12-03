const db = require('./models');
const userData = require('./userData.json');

// Delete

db.User.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
   
  console.log(result.deletedCount,'users deleted');

  // Create
  db.User.create(userData.users, (err, seededUsers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededUsers.length, 'Users created successfully');
    console.log('done!');

    process.exit();
  });
});


db.Crypto.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
   
  console.log(result.deletedCount,'crypto deleted');

  // Create
  db.Crypto.create(userData.users, (err, seededUsers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededUsers.length, 'crypto created successfully');
    console.log('done!');

    process.exit();
  });
});
