let request = require('request');


function getIssLocation(callback){
    let url = "https://api.wheretheiss.at/v1/satellites/25544"
    request({url:url,json:true},(err,data)=>{
        if(err){
            callback(err,undefined);
        }else if(data.body.error){
            callback({error:"cannot find satalite"},undefined);
        }else{
            callback(undefined,data.body);
        }
    })
}

module.exports = getIssLocation;
