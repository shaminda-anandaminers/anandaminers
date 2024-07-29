/**
 * Grid Rotator Options
 */
$(function() {
			
				$( '#ri-grid' ).gridrotator( {
					// number of rows
					rows            : 2,
					  
					// number of columns 
					columns         : 3,
					  
					// rows/columns for different screen widths
					// i.e. w768 is for screens smaller than 768 pixels
					/*
					w1024           : {
						rows    : 2,
						columns : 4
					},
					  
					w768            : {
						rows    : 2,
						columns : 4
					},
					  
					w480            : {
						rows    : 2,
						columns : 4
					},
					  
					w320            : {
						rows    : 2,
						columns : 4
					},
					  
					w240            : {
						rows    : 2,
						columns : 3
					},*/
					  
					// step: number of items that are replaced at the same time
					// random || [some number]
					// note: for performance issues, the number should not be > options.maxStep
					step            : 'random',
					maxStep         : 4,
					  
					// prevent user to click the items
					preventClick    : false,
					  
					// animation type
					// showHide || fadeInOut || slideLeft || 
					// slideRight || slideTop || slideBottom || 
					// rotateLeft || rotateRight || rotateTop || 
					// rotateBottom || scale || rotate3d || 
					// rotateLeftScale || rotateRightScale || 
					// rotateTopScale || rotateBottomScale || random
					animType        : 'rotate3d',
					  
					// animation speed
					animSpeed       : 500,
					  
					// animation easings
					animEasingOut   : 'linear',
					animEasingIn    : 'linear',
					  
					// the item(s) will be replaced every 3 seconds
					// note: for performance issues, the time "can't" be < 300 ms
					interval        : 5000,
					// if false the animations will not start
					// use false if onhover is true for example
					slideshow       : true,
					// if true the items will switch when hovered
					onhover     : false,
					// ids of elements that shouldn't change
					nochange        : []
				} );
			
			});