// File is for command-line testing
// uploading file to AWS

// Require AWS Software Development Kit
const AWS = require('aws-sdk')
// Not sure we need this UUID package
const uuid = require('uuid')

// Define bucket name to use
const bucket = 'slahiff'

//  Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)
