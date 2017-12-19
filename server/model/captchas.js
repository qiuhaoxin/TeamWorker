

var captchapng =require('captchapng');


class Capchas{
	constructor(){

	}
	 getCaptchas(){
		const cap=parseInt(Math.random() * 9000+1000);
		const p=new captchapng(80,30,cap);
		p.color(0,0,0,0);
		p.color(80,80,80,255);
		const base64=p.getBase64();
		return base64;
	}
}
module.exports= new Capchas()