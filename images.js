console.log('start');

		var url; 
		var nextURL;
		var id = "vytusia";
		var allImage = [];
		var imageCounter=0;
		
		function setID(){
			//var id;
			console.log('inside setID');
			// $.getJSON('/instagram', function(data){
			// 	console.log(typeof(data));
			// 	console.log(data.handle);
			// 	id = data.handle;
			// 	//return id;
			// 	//console.log(id)
			// 	url = "https://www.instagram.com/" + id + "/media/";
			// 	callMethod(url, drawImage);
			// 	//drawImage();
			// });

			url = "https://www.instagram.com/" + id + "/media/";
			callMethod(url, drawImage);
			
		}
		function callMethod(url, successCallback) {
			console.log('inside callMethod');
			$.ajax({
				url: url,
				success: successCallback,
				error: function(xhr, textStatus, errorThrown) {
					console.log('error');
				}
			}); 
		}
		//callMethod(url, setID, drawImage);
	    function drawImage(result) {
	    	console.log('hello');
	    	console.log(result);
	    // 	if(result.items != null && result.items != undefined){
		   //  	var lastURL = result.items.length - 1;
		   //  	console.log('im drawimg image');
					// for( var i = 0; i < result.items.length; i++) {
					// 	var lowRes = result.items[i].images.low_resolution.url;
			  //       	var imgDiv = document.createElement('img')
			  //       	imgDiv.src = lowRes;
			  //       	allImage.push(imgDiv);
			  //       	nextURL = "https://www.instagram.com/" + id + "/media/?max_id=" + result.items[lastURL].id
					// }
					// callMethod(nextURL, drawImage);
		  	// 	//displayImage();
		  	// }			
	    }
	    // function displayImage() {
	    // 	for(var i = 0; i < allImage.length; i++) {
	    // 		allImage[i].style.position = "absolute";
	    //     	allImage[i].style.top = 0;
	    //     	allImage[i].className = "insta";
	    //     	// allImage[i].style.width = 640;
	    //     	// allImage[i].style.height = "auto";
	    // 		document.getElementById('div1').appendChild(allImage[i]);
	    // 	}
	    // }
	    setInterval(function() {
		  // animiate something
		  if(allImage.length>imageCounter){
		  	allImage[imageCounter].style.position = "absolute";
        	allImage[imageCounter].style.top = 0;
        	allImage[imageCounter].className = "insta";
        	// allImage[i].style.width = 640;
        	// allImage[i].style.height = "auto";
    		document.getElementById('div1').appendChild(allImage[imageCounter]);
		  	imageCounter++;
		  }
		}, 1000/60);
		// setInterval(

			$(document).ready(function () {
				console.log('working?');
				setID();
			});
               			