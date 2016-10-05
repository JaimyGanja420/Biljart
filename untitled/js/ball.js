/**
 * Created by Frank on 29-9-2016.
 */



var Ball ={
    geometry: new THREE.SphereGeometry(0.5,16,8),
    material: new THREE.MeshPhongMaterial( { color:0xf0f0f0 } ),
    Mesh : new THREE.Mesh(this.geometry,this.material)
}
