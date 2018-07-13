const redis = require('redis');
const util = require('util');
const {promisify} = require('util');

const redisClient = redis.createClient();

redisClient.get = util.promisify(redisClient.get);
redisClient.set = util.promisify(redisClient.set);

redisClient.on('error', err => {
  console.log('Redis client error:', err);
});

const formatTodaysDate = () => {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  if(day < 10){
    day = "0" + day
  }
  if(month < 10) {
      month = "0" + month
  }
  return `${year}-${month}-${day}`
}

//need to clear cache at midnight each day, use time left in day when added
//could drop most frequently used? 
//


const checkCache = async key => {
  const todaysDate = formatTodaysDate();
  try {
    return await redisClient.get(todaysDate);
  } catch (err) { throw err }
  // return redisClient.get(todaysDate)
  // .then( res => {
  //   return res;
  // })
  // .catch( err => {
  //   console.log('checkCache error:', err)
  // })
}

const saveToCache = async data => {
  const todaysDate = formatTodaysDate();
  try {
    await redisClient.set(todaysDate, JSON.stringify(data), redis.print)
  } catch (err) { throw err }
  
}


module.exports = {
  formatTodaysDate,
  checkCache,
  saveToCache
}