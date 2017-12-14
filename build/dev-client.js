require('eventsource-polyfill')

var hotClient=require('webpack-hot-middleware')

hotClient.subscribe(function(event){
    if(event.action==='reload'){
    	window.location.reload();
    }
})