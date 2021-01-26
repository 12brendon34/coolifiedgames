var gptadslots=[];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

$(function(){
	var gads = document.createElement('script');
	gads.async = true; gads.type = 'text/javascript';
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
	
    ads = [];

    switch(window.location.pathname) {
        case "/":
        case "/index.html":
            ads[1] = {"name": "/45966600/Coolified_HomePage", "size": [[728,90]], "id": "div-gpt-ad-875171986105516179-1"};
            ads[2] = {"name": "/45966600/Coolified_HomePage", "size": [[300,250]], "id": "div-gpt-ad-875171986105516179-2"};
            ads[3] = {"name": "/45966600/Coolified_HomePage", "size": [[160,600]], "id": "div-gpt-ad-875171986105516179-3"};
            ads[4] = {"name": "/45966600/Coolified_HomePage_Top-300x250", "size": [[300,250]], "id": "div-gpt-ad-875171986105516179-4"};
        break;
        default:
            ads[1] = {"name": "/45966600/Coolified_ALLOTHERPAGES", "size": [[728,90]], "id": "div-gpt-ad-739772959503010386-1"};
            ads[2] = {"name": "/45966600/Coolified_ALLOTHERPAGES", "size": [[300,250]], "id": "div-gpt-ad-739772959503010386-2"};
            ads[3] = {"name": "/45966600/Coolified_ALLOTHERPAGES", "size": [[160,600]], "id": "div-gpt-ad-739772959503010386-3"};
            ads[4] = {"name": "/45966600/Coolified_ALLOTHERPAGES_Top-300x250", "size": [[300,250]], "id": "div-gpt-ad-739772959503010386-4"};
        break;
    }
	
	googletag.cmd.push(function() {
		for (id = 1; id < ads.length; id++) {
			ad = ads[id];
			gptadslots[id] = googletag.defineSlot(ad.name, ad.size, ad.id).addService(googletag.pubads());
		}
			
		googletag.pubads().setTagForChildDirectedTreatment(1);
		googletag.pubads().enableSingleRequest();
		googletag.pubads().enableAsyncRendering();
		googletag.enableServices();
    
		for (id = 1; id < ads.length; id++) {
			ad = ads[id];
			$('#adslot'+id).attr("id", ad.id);
			googletag.cmd.push(function() { googletag.display(ad.id); });
		}
	});
});