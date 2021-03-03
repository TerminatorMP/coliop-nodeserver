const createXMLWithJobId = require('./xml').createXMLWithJobId;
const xmlrpc = require('xmlrpc');


var client = xmlrpc.createClient({ host: 'localhost', port: 8008});

const logError = (error) => {
  console.log('error:', error);
  console.log('req headers:', error.req && error.req._header);
  console.log('res code:', error.res && error.res.statusCode);
  console.log('res body:', error.body);
}

const fetchJobId = (fileName) => {
  return new Promise((resolve, reject) => {
    client.methodCall('getJobId', [fileName, "cbc", "3"], function (error, value) {
      console.log('Method response for \'getJobId\': ' + value)
      if (error) {
        logError(error);
        reject(error);
      } else {
        resolve(value[2]);
      }
    });
  });
}
exports.fetchJobId = fetchJobId;

const sendXML = (xml) => {
  return new Promise((resolve, reject) => {
    client.methodCall('send', [xml], function (error, value) {
      console.log('Method response for \'send\': ' + value)
      if (error) {
        logError(error);
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}
exports.sendXML = sendXML;

const getCmplMessages = (jobId) => {
  return new Promise((resolve, reject) => {
    client.methodCall('getCmplMessages', [jobId], function (error, value) {
      console.log('Method response for \'getCmplMessages\': ' + value)
      if (error) {
        logError(error);
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}
exports.getCmplMessages = getCmplMessages;

const fetchSolution = (jobId) => {
  return new Promise((resolve, reject) => {
    client.methodCall('getSolutions', [jobId], function (error, value) {
      console.log('Method response for \'getSolutions\': ' + value)
      if (error) {
        logError(error);
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}
exports.fetchSolution = fetchSolution;

const checkForSolution = (jobId) => {
  return new Promise((resolve, reject) => {
    client.methodCall('knock', [jobId], function (error, value) {
      console.log('Method response for \'knock\': ' + value)
      if (error) {
        logError(error);
        reject(error);
      } else {
        resolve(value);
      }
    });
  });
}
exports.checkForSolution = checkForSolution;
