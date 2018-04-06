const request = require("request-promise")

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const uri = "http://localhost:5000/users/create/"
    request({ 
      uri, 
      method: "post",
      body:{...user},
      json: true
    }).then(function(res){
      resolve(res)
    }).catch(function(err){
      console.log('error user not created!')
    })
  })
}


const getUserByGoogle = (id) => {
  return new Promise((resolve, reject) => {
    const uri = "http://localhost:5000/users/get-google/"
    request({ 
      uri, 
      method: "post",
      body:{"googleId":id},
      json: true
    }).then(function(res){
      resolve(res)
    }).catch(function(err){
      console.log('unable fetch record by google id')
    })
  })
}

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const uri = "http://localhost:5000/users/get-id/"
    request({ 
      uri, 
      method: "post",
      body:{"id":id},
      json: true
    }).then(function(res){
      resolve(res)
    }).catch(function(err){
      console.log('unable to fetch record by id')
    })
  })
}

module.exports = {createUser, getUserByGoogle, getUserById}