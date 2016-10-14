/**
 * Created by Frank on 29-9-2016.
 */


//Whiteball
var geometry = new THREE.SphereGeometry(0.5,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var whiteSphere = new THREE.Mesh( geometry, material );
whiteBox = new THREE.BoundingBoxHelper(whiteSphere, 0x00ff00);
whiteSphere.bbox = whiteBox;
Object.defineProperty(whiteSphere, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(whiteSphere, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(whiteSphere, 'speed', {
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
var geometry2 = new THREE.SphereGeometry(0.5,32,32);
var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var redSphere = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere, 'directionX', {
   value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});


var redSphere2 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere2, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere2, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere2, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});


var redSphere5 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere5, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere5, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere5, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere3 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere3, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere3, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere3, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});


var redSphere4 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere4, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere4, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere4, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere6 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere6, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere6, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere6, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere7 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere7, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere7, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere7, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere8 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere8, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere8, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere8, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere9 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere9, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere9, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere9, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere10 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere10, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere10, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere10, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere11 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere11, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere11, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere11, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere12 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere12, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere12, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere12, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere13 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere13, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere13, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere13, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere14 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere14, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere14, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere14, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

var redSphere15 = new THREE.Mesh( geometry2, material2 );
redBox = new THREE.BoundingBoxHelper(redSphere,0x00ff0f);
redSphere.bbox = redBox;

Object.defineProperty(redSphere15, 'directionX', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere15, 'directionZ', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

Object.defineProperty(redSphere15, 'speed', {
    value: 0,
    writable: true,
    enumerable: false,
    configurable: true
});

