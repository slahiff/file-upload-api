// File is for command-line testing
// uploading file to AWS
require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')
// Not sure we need this UUID package
const uuid = require('uuid')

// Define bucket name to use
const bucket = 'slahiff'

//  Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject call:
const params = {
  Bucket: bucket,
  Key: 'file-test.txt',
  Body: 'Hello World!',
  ACL: 'public-read'
}

const uploadPromise = s3.upload(params).promise()
uploadPromise.then(data => {
  console.log(data)
})
  .catch(console.error)
