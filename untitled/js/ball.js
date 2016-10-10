/**
 * Created by Frank on 29-9-2016.
 */



var geometry = new THREE.SphereGeometry(0.5,16,8);
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var sphere = new THREE.Mesh( geometry, material );


var geometry2 = new THREE.SphereGeometry(0.5,16,8);
var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var red = new THREE.Mesh( geometry2, material2 );