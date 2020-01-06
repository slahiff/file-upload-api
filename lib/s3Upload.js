// File is for command-line testing
// uploading file to AWS
require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')

// Define bucket name to use
const bucket = 'slahiff'

//  Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

module.exports = (key, body) => {
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    params.Key = key
    params.Body = body
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
