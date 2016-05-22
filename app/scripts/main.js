function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

console.log('\'Allo \'Allo!');

$( document ).ready(function() {
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.slider').slider({full_width: true});
	$('.carousel').carousel();
	$('.modal-trigger').leanModal();
	$('select').material_select();

	$('#enviar').click( function() {

		var nombre = $('#nombre').val();
		var email = $('#email').val();
		var estado = $('#estado').val();
		var isCorrect = true;

		console.log('nombre: ' + nombre);
		console.log('email: ' + email);
		console.log('estado: ' + estado);

		if(nombre === ""){
			Materialize.toast('Ingresa tu nombre', 4000, 'rounded');
			isCorrect = false;
		}

		if(email === ""){
			Materialize.toast('Ingresa tu email', 4000, 'rounded');
			isCorrect = false;
		}

		if(estado === null){
			Materialize.toast('Selecciona tu estado', 4000, 'rounded');
			isCorrect = false;
		}

		if( isCorrect ){
			var data = {
					name : nombre,
					email : email,
					city : estado
			};

			var data1 = JSON.stringify( data ); 

			$('#modal1').closeModal();
			$.ajax({
				url : 'http://comocantanlasaves.com/people',
				data : data1, 
				type : 'PUT',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				success : function( json ) {
					console.log("success: " + JSON.stringify(json));
					if( json.operation === 'success' ) {
						window.open( json.uri );
					} else {
						Materialize.toast('Error intenta más tarde', 4000, 'rounded');
					}
				},
				error: function(xhr, status) {
					console.log("error xhr: " + JSON.stringify(xhr));
					console.log("error status: " + JSON.stringify(status));
					Materialize.toast('Error intenta más tarde', 4000, 'rounded');
				}
			});
		}
	} );

	particlesJS('particles-js',
	  
	  {
	    "particles": {
	      "number": {
	        "value": 80,
	        "density": {
	          "enable": true,
	          "value_area": 800
	        }
	      },
	      "color": {
	        "value": "#ffffff"
	      },
	      "shape": {
	        "type": "circle",
	        "stroke": {
	          "width": 0,
	          "color": "#000000"
	        },
	        "polygon": {
	          "nb_sides": 5
	        },
	        "image": {
	          "src": "img/github.svg",
	          "width": 100,
	          "height": 100
	        }
	      },
	      "opacity": {
	        "value": 0.5,
	        "random": false,
	        "anim": {
	          "enable": false,
	          "speed": 1,
	          "opacity_min": 0.1,
	          "sync": false
	        }
	      },
	      "size": {
	        "value": 5,
	        "random": true,
	        "anim": {
	          "enable": false,
	          "speed": 40,
	          "size_min": 0.1,
	          "sync": false
	        }
	      },
	      "line_linked": {
	        "enable": true,
	        "distance": 150,
	        "color": "#ffffff",
	        "opacity": 0.4,
	        "width": 1
	      },
	      "move": {
	        "enable": true,
	        "speed": 6,
	        "direction": "none",
	        "random": false,
	        "straight": false,
	        "out_mode": "out",
	        "attract": {
	          "enable": false,
	          "rotateX": 600,
	          "rotateY": 1200
	        }
	      }
	    },
	    "interactivity": {
	      "detect_on": "canvas",
	      "events": {
	        "onhover": {
	          "enable": true,
	          "mode": "repulse"
	        },
	        "onclick": {
	          "enable": true,
	          "mode": "push"
	        },
	        "resize": true
	      },
	      "modes": {
	        "grab": {
	          "distance": 400,
	          "line_linked": {
	            "opacity": 1
	          }
	        },
	        "bubble": {
	          "distance": 400,
	          "size": 40,
	          "duration": 2,
	          "opacity": 8,
	          "speed": 3
	        },
	        "repulse": {
	          "distance": 200
	        },
	        "push": {
	          "particles_nb": 4
	        },
	        "remove": {
	          "particles_nb": 2
	        }
	      }
	    },
	    "retina_detect": true,
	    "config_demo": {
	      "hide_card": false,
	      "background_color": "#b61924",
	      "background_image": "",
	      "background_position": "50% 50%",
	      "background_repeat": "no-repeat",
	      "background_size": "cover"
	    }
	  }

	);
});