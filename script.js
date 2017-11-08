function initMap() {
		var wgarden = {lat: 42.9991715, lng: -80.2974283};
		var ecoadv = {lat: 42.6891432, lng: -80.3506353};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: wgarden, 
			scrollwheel: false,
			styles: [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "on"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			        "visibility": "on"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.neighborhood",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			        "visibility": "on"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			      	// "color": "#efc032"
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#ffffff"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dadada"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#c9c9c9"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  }
			]
	});

	// google map
	function addMarker(feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: "assets/small-logo.png",
			map: map
		});
	}

	var features = [
		{
			position: new google.maps.LatLng(42.9991715, -80.2974283),
			type: 'info'
		}, 
		{
			position: new google.maps.LatLng(42.6891432, -80.3506353),
			type: 'info'
		}
	]

	for (var i = 0, feature; feature = features[i]; i++) {
	         addMarker(feature);
	}

	}




// shopify script for whistling gardens tour buy button
	(function () {
	  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
	  if (window.ShopifyBuy) {
	    if (window.ShopifyBuy.UI) {
	      ShopifyBuyInit();
	    } else {
	      loadScript();
	    }
	  } else {
	    loadScript();
	  }

	  function loadScript() {
	    var script = document.createElement('script');
	    script.async = true;
	    script.src = scriptURL;
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
	    	script.onload = ShopifyBuyInit;
	  }

	  function ShopifyBuyInit() {
	    var client = ShopifyBuy.buildClient({
	      domain: 'vanessas-bees.myshopify.com',
	      apiKey: '483acef5052cf6539fbbdebb306cb38c',
	      appId: '6'
	    });

	    ShopifyBuy.UI.onReady(client).then(function (ui) {
	      ui.createComponent('product', {
	        id: [8462100043],
	        node: document.getElementById('product-component-e76a2ba635d'),
	        moneyFormat: '%24%7B%7Bamount%7D%7D',
	        options: {
			  "product": {
			    "buttonDestination": "checkout",
			    "variantId": "all",
			    "contents": {
			      "img": false,
			      "imgWithCarousel": false,
			      "title": false,
			      "variantTitle": false,
			      "price": false,
			      "description": false,
			      "buttonWithQuantity": true,
			      "button": false,
			      "quantity": false
			    },
			    "text": {
			      "button": "BOOK NOW"
			    },
			    "styles": {
			      "product": {
			        "text-align": "left"
			      },
			      "quantity": {
			      	"font-weight": "700",
			      	"border-radius": "0"
			      },
			      "buttonWithQuantity": {
			      	"background-color": "transparent",
			      	"letter-spacing":"0.2rem",
			      	"font-weight": "700",
			      	"font-size": "1.5rem"
			      },
			      "button": {
	      	        "background-color": "transparent",
	      	        "letter-spacing": "0.2rem",
	      	        "color": "black",
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "700",
	      	        "margin-right": "0",
	      	        "border-top": "2px solid #efc032 !important",
	      	        "border-bottom": "2px solid #efc032 !important",
	      	        "border-right": "2px solid #efc032 !important",
	      	        "border-left": "2px solid #efc032 !important",
	      	        "transition":"background-color 1s, border 1s",
	      	        ":hover": {
	      	          "background-color": "#efc032",
	      	          "color": "black"
	      	        },
	      	        "padding": "11px 20px",
	      	        "border-radius": "0",
	      	        ":focus": {
	      	          "background-color": "#efc032"
	      	        },
	      	        "font-weight": "bold"
	      	      },
	      	      "variantTitle": {
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "bold"
	      	      },
	      	      "title": {
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "normal"
	      	      },
	      	      "description": {
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "normal"
	      	      },
	      	      "price": {
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "normal"
	      	      },
	      	      "compareAt": {
	      	        "font-size": "12px",
	      	        "font-family": "Raleway, sans-serif",
	      	        "font-weight": "normal"
	      	      }
			    },
			    "googleFonts": [
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway"
			    ]
			  },
			  "cart": {
			    "contents": {
			      "button": true
			    },
			    "styles": {
			      "button": {
			        "background-color": "#efc032",
			        "color": "#302e24",
			        "font-family": "Raleway, sans-serif",
			        ":hover": {
			          "background-color": "#d7ad2d",
			          "color": "#302e24"
			        },
			        "border-radius": "0px",
			        ":focus": {
			          "background-color": "#d7ad2d"
			        },
			        "font-weight": "bold"
			      },
			      "footer": {
			        "background-color": "#ffffff"
			      }
			    },
			    "googleFonts": [
			      "Raleway"
			    ]
			  },
			  "modalProduct": {
			    "contents": {
			      "img": false,
			      "imgWithCarousel": true,
			      "variantTitle": false,
			      "buttonWithQuantity": true,
			      "button": false,
			      "quantity": true
			    },

			    "styles": {
			      "product": {
			        "@media (min-width: 601px)": {
			          "max-width": "100%",
			          "margin-left": "0px",
			          "margin-bottom": "0px"
			        }
			      },
			      "button": {
			        "background-color": "transparent",
			        "border": "2px solid #efc032 !important",
			        "letter-spacing":"0.2rem",
			        "color": "black",
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "700",
			        "transition":"background-color 1s, border 1s",
			        ":hover": {
			          "background-color": "#efc032",
			          "color": "black"
			        },
			        "border-radius": "0px",
			        ":focus": {
			          "background-color": "#efc032"
			        },
			        "font-weight": "bold"
				  },
			      "variantTitle": {
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "normal"
			      },
			      "title": {
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "normal"
			      },
			      "description": {
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "normal"
			      },
			      "price": {
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "normal"
			      },
			      "compareAt": {
			        "font-family": "Raleway, sans-serif",
			        "font-weight": "normal"
			      }
			    },
			    "googleFonts": [
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway",
			      "Raleway"
			    ]
			  },
			  "toggle": {
			    "styles": {
			      "toggle": {
			        "font-family": "Raleway, sans-serif",
			        "background-color": "#efc032",
			        ":hover": {
			          "background-color": "#d7ad2d"
			        },
			        ":focus": {
			          "background-color": "#d7ad2d"
			        },
			        "font-weight": "bold"
			      },
			      "count": {
			        "color": "#302e24",
			        ":hover": {
			          "color": "#302e24"
			        }
			      },
			      "iconPath": {
			        "fill": "#302e24"
			      }
			    },
			    "googleFonts": [
			      "Raleway"
			    ]
			  },
			  "option": {
			    "styles": {
			      "label": {
			        "font-family": "Raleway, sans-serif"
			      },
			      "select": {
			        "font-family": "Raleway, sans-serif"
			      }
			    },
			    "googleFonts": [
			      "Raleway",
			      "Raleway"
			    ]
			  },
			  "productSet": {
			    "styles": {
			      "products": {
			        "@media (min-width: 601px)": {
			          "margin-left": "-20px"
			        }
			      }
			    }
			  }
			}
	      });
	    });
	  }
	})();

// shopify script for save the bees tee buy button
	(function () {
	  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
	  if (window.ShopifyBuy) {
	    if (window.ShopifyBuy.UI) {
	      ShopifyBuyInit();
	    } else {
	      loadScript();
	    }
	  } else {
	    loadScript();
	  }

	  function loadScript() {
	    var script = document.createElement('script');
	    script.async = true;
	    script.src = scriptURL;
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
	    script.onload = ShopifyBuyInit;
	  }

	  function ShopifyBuyInit() {
	    var client = ShopifyBuy.buildClient({
	      domain: 'vanessas-bees.myshopify.com',
	      apiKey: '483acef5052cf6539fbbdebb306cb38c',
	      appId: '6',
	    });

	    ShopifyBuy.UI.onReady(client).then(function (ui) {
	      ui.createComponent('product', {
	        id: [8462803787],
	        node: document.getElementById('product-component-b9d4a22120b'),
	        moneyFormat: '%24%7B%7Bamount%7D%7D',
	        options: {
	  "product": {
	    "buttonDestination": "checkout",
	    "variantId": "all",
	    "width": "240px",
	    "contents": {
	      "img": false,
	      "imgWithCarousel": false,
	      "title": false,
	      "variantTitle": false,
	      "price": false,
	      "description": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "text": {
	      "button": "BUY NOW"
	    },
	    		    "styles": {
	    		      "product": {
	    		        "text-align": "left"
	    		      },
	    		      "quantity": {
	    		      	"font-weight": "700",
	    		      	"border-radius": "0"
	    		      },
	    		      "buttonWithQuantity": {
	    		      	"background-color": "transparent",
	    		      	"letter-spacing":"0.2rem",
	    		      	"font-weight": "700",
	    		      	"font-size": "1.5rem"
	    		      },
	    		      "button": {
	          	        "background-color": "transparent",
	          	        "letter-spacing": "0.2rem",
	          	        "color": "black",
	          	        "font-family": "Raleway, sans-serif",
	          	        "font-weight": "700",
	          	        "margin-right": "0",
	          	        "border-top": "2px solid #efc032 !important",
	          	        "border-bottom": "2px solid #efc032 !important",
	          	        "border-right": "2px solid #efc032 !important",
	          	        "border-left": "2px solid #efc032 !important",
	          	        "transition":"background-color 1s, border 1s",
	          	        ":hover": {
	          	          "background-color": "#efc032",
	          	          "color": "black"
	          	        },
	          	        "padding": "11px 20px",
	          	        "border-radius": "0",
	          	        ":focus": {
	          	          "background-color": "#efc032"
	          	        },
	          	        "font-weight": "bold"
	          	      },
	    // "styles": {
	    //   "product": {
	    //     "text-align": "left",
	    //     "@media (min-width: 601px)": {
	    //       "max-width": "100%",
	    //       "margin-left": "0",
	    //       "margin-bottom": "50px"
	    //     }
	    //   },
	    //   "button": {
	    //     "background-color": "#efc032",
	    //     "color": "#302e24",
	    //     "font-family": "Raleway, sans-serif",
	    //     "padding-left": "20%px",
	    //     "padding-right": "20%px",
	    //     ":hover": {
	    //       "background-color": "#d7ad2d",
	    //       "color": "#302e24"
	    //     },
	    //     "border-radius": "0px",
	    //     ":focus": {
	    //       "background-color": "#d7ad2d"
	    //     },
	    //     "font-weight": "bold"
	    //   },
	      "variantTitle": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "title": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal",
	        "font-size": "26px"
	      },
	      "description": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "price": {
	        "font-family": "Raleway, sans-serif",
	        "font-size": "18px",
	        "font-weight": "normal"
	      },
	      "compareAt": {
	        "font-size": "15px",
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      }
	    },
	    "googleFonts": [
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway"
	    ]
	  },
	  "cart": {
	    "contents": {
	      "button": true
	    },
	    "styles": {
	      "button": {
	        "background-color": "#efc032",
	        "color": "#302e24",
	        "font-family": "Raleway, sans-serif",
	        ":hover": {
	          "background-color": "#d7ad2d",
	          "color": "#302e24"
	        },
	        "border-radius": "0px",
	        ":focus": {
	          "background-color": "#d7ad2d"
	        },
	        "font-weight": "bold"
	      },
	      "footer": {
	        "background-color": "#ffffff"
	      }
	    },
	    "googleFonts": [
	      "Raleway"
	    ]
	  },
	  "modalProduct": {
	    "contents": {
	      "img": false,
	      "imgWithCarousel": true,
	      "variantTitle": false,
	      "buttonWithQuantity": true,
	      "button": false,
	      "quantity": false
	    },
	    "styles": {
	      "product": {
	        "@media (min-width: 601px)": {
	          "max-width": "100%",
	          "margin-left": "0px",
	          "margin-bottom": "0px"
	        }
	      },
	      "button": {
	        "background-color": "#efc032",
	        "color": "#302e24",
	        "font-family": "Raleway, sans-serif",
	        "padding-left": "20%px",
	        "padding-right": "20%px",
	        ":hover": {
	          "background-color": "#d7ad2d",
	          "color": "#302e24"
	        },
	        "border-radius": "0px",
	        ":focus": {
	          "background-color": "#d7ad2d"
	        },
	        "font-weight": "bold"
	      },
	      "variantTitle": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "title": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "description": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "price": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      },
	      "compareAt": {
	        "font-family": "Raleway, sans-serif",
	        "font-weight": "normal"
	      }
	    },
	    "googleFonts": [
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway",
	      "Raleway"
	    ]
	  },
	  "toggle": {
	    "styles": {
	      "toggle": {
	        "font-family": "Raleway, sans-serif",
	        "background-color": "#efc032",
	        ":hover": {
	          "background-color": "#d7ad2d"
	        },
	        ":focus": {
	          "background-color": "#d7ad2d"
	        },
	        "font-weight": "bold"
	      },
	      "count": {
	        "color": "#302e24",
	        ":hover": {
	          "color": "#302e24"
	        }
	      },
	      "iconPath": {
	        "fill": "#302e24"
	      }
	    },
	    "googleFonts": [
	      "Raleway"
	    ]
	  },
	  "option": {
	    "styles": {
	      "label": {
	        "font-family": "Raleway, sans-serif"
	      },
	      "select": {
	        "font-family": "Raleway, sans-serif"
	      }
	    },
	    "googleFonts": [
	      "Raleway",
	      "Raleway"
	    ]
	  },
	  "productSet": {
	    "styles": {
	      "products": {
	        "@media (min-width: 601px)": {
	          "margin-left": "-20px"
	        }
	      }
	    }
	  }
	}
	      });
	    });
	  }
	})();

$( document ).ready(function() {
	$('nav ul li.hamburger').on('click', function() {
		$('.hamburger i.fa').toggleClass('fa-bars').toggleClass('fa-times');
		$('nav ul').toggleClass('mobileNav');
	})
	$('nav a').on('click', function(){
	  $('nav ul').removeClass('mobileNav');
	  $('.hamburger i.fa').toggleClass('fa-bars').toggleClass('fa-times');
	});

	// smooth scroll:
	$('a[href*=#]:not([href=#])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 600);
	      return false;
	    }
	  }
	});

	$('#callPopup').on('click', function() {
		$('.popup.popup-trip').addClass('popupShow');
	});

	$('#groupPopup').on('click', function() {
		$('.popup.popup-group').addClass('popupShow');
	});

	$('#honeyPopup').on('click', function() {
		$('.popup.honey-popup').addClass('popupShow');
	});

	$('#close-group').on('click', function() {
		$('.popup.popup-group').removeClass('popupShow');
	});
	$('#close-honey').on('click', function() {
		$('.popup.honey-popup').removeClass('popupShow');
	});
	$('#close-trip').on('click', function() {
		$('.popup.popup-trip').removeClass('popupShow');
	});

	$('body').on('keydown', function(e) {
		if (e.keyCode === 27 &&
			$('.popup').hasClass('popupShow')) {
			$('.popup').removeClass('popupShow');
		}
	});

	$('form').on('submit', function() {
		$('popup').removeClass('popupShow');
	});

	$('.showMore').on('click', function() {
		$(this).next('div').slideToggle();
	});

	// Instafeedjs

    var userFeed = new Instafeed({
        get: 'user',
        userId: '576784961',
        sortBy: "most-recent",
        accessToken: '576784961.d90570a.72f79172fe324845b244e7b90408ead7'
    });
    userFeed.run();

});