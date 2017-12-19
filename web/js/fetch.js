import Utility from './utils'
var baseUrl='';
export default async(url='',data={},type='GET',method='fetch')=>{
	type=type.toUpperCase();
	url=baseUrl+url;
	if(type=='GET'){
		let dataStr='';//
		Object.keys(data).forEach(key=>{
			dataStr+=key+"="+data[key]+"&";
		})
		if(!Utility.isEmpty(dataStr)){
            dataStr=dataStr.substring(0,dataStr.length - 1);
            url=url+"?"+dataStr;
        }
	}
	if(window.fetch && method=='fetch'){
		let requestConfig={
			credentials:'include',
			method:type,
			headers:{
				'Accepth':'application/json',
				'Content-type':'application/json'
			},
			mode:'cors',
			cache:'force-cache'
		}
		if(type=='POST'){
			Object.defineProperty(requestConfig,'body',{
				value:JSON.stringify(data)
			})
		}
		try{
			console.log("testwe!");
            const response=await fetch(url,requestConfig);
            const responseJson=await response.json();
            return responseJson;
		}catch(e){
            throw new Error(e);
		}
	}else{
		//针对不支持fetch的浏览器
		return new Promise((resolve,reject)=>{
			let requestObj;
			if(window.XMLHTTPRequest){
                requestObj=new XMLHTTPRequest();
			}else{
                requestObj=new ActiveXObject();
			}
			let sendData=null;
			if(type=='POST'){
				sendData=JSON.stringify(data);
			}
			requestObj.open(type,url,true);
			requestObj.setRequestHeader('Content-Type','application/json');
			requestObj.send(sendData);
			requestObj.onreadstatechange=()=>{
				if(requestObj.readyState==4){
					if(requestObj.status>=200&&requestObj.status<300){
						let obj=requestObj.response;
						if(typeof obj!=='object'){
							obj=JSON.parse(obj);
						}
						resolve(obj);
					}else{
						reject(requestObj);
					}
				}
			}
		})
	}
}