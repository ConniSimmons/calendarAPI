require('dotenv').config();
const dbName = 'calendar';
module.exports= {
   //PORT: process.env.PORT || 5656,
   PORT: 5656,
   dbName,
   APPNAME: 'Calendar',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-mznto.mongodb.net/${dbName}?retryWrites=true&w=majority`,  
}