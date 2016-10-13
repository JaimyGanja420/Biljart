/**
 * Created by Frank on 29-9-2016.
 */


//Whiteball
var geometry = new THREE.SphereGeometry(0.5,16,8);
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var whiteSphere = new THREE.Mesh( geometry, material );
whiteBox = new THREE.BoundingBoxHelper(whiteSphere, 0x00ff00);
whiteSphere.bbox = whiteBox;
Object.defineProperty(whiteSphere, 'speedX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(whiteSphere, 'speedZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

/*Object.defineProperty(whiteSphere, 'bbox', {
    value: whiteBox,
    writable: true,
    enumerable: false,
    configurable: true
});*/

//Redball
var geometry2 = new THREE.SphereGeometry(0.5,16,8);
var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var redSphere = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere, 'speedX', {
   value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere, 'speedZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

/*Object.defineProperty(redSphere, 'bbox', {
    value: redBox,
    writable: true,
    enumerable: false,
    configurable: true
});*/