/**
 * Created by Frank on 29-9-2016.
 */



var geometry = new THREE.SphereGeometry(0.5,16,8);
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var whiteSphere = new THREE.Mesh( geometry, material );
whiteSphere.speedx = "OH SHIT HERE COME THAT BOI";
whiteSphere.speedz = 0;


var geometry2 = new THREE.SphereGeometry(0.5,16,8);
var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var redSphere = new THREE.Mesh( geometry2, material2 );