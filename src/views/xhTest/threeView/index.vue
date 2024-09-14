<!--<template>-->
<!--    <div class="three-box">-->
<!--      <wavesBg :top="250"></wavesBg>-->
<!--    </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import wavesBg from "@/components/comps/waves.vue"-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.three-box{-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->
<script setup>
//导入three.js
import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera =new THREE.PerspectiveCamera(
    45,//视角
    window.innerWidth/window.innerHeight,//宽比高
    0.1,//近平面
    1000//远平面
);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

onMounted(()=>{
  let ivewThreeBox = document.getElementById('ivewThree')
  ivewThreeBox.appendChild(renderer.domElement)
})


// 创建几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 创建材质
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const parentMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

// 创建父元素网格
const parentCube = new THREE.Mesh( geometry, parentMaterial );
// 创建网格
const cube = new THREE.Mesh( geometry, material );
parentCube.add(cube);

// 设置坐标位置
// cube.position.x=2;
// cube.position.y=2;
// 设置坐标位置
parentCube.position.set(-2,0,0);
cube.position.set(2,0,0);

// 将网格添加到场景中
// scene.add(cube);
scene.add(parentCube);

// 设置相机位置
camera.position.z=5;
camera.position.y=2;
camera.position.x=2;
camera.lookAt(0,0,0);

// 添加世界坐标辅助器
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
// 添加轨道控制器
const controls = new OrbitControls( camera, document.body);
// 设置带阻尼的惯性
controls.enableDamping = true;
// 设置阻尼系数
controls.dampingFactor = 0.05;
// 设置旋转速度 自动旋转
// controls.autoRotate = true;




// 渲染
// renderer.render(scene,camera);
// 渲染
function animate() {
  requestAnimationFrame( animate );
  controls.update();
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

animate();

</script>

<template>
  <div id="ivewThree"></div>
</template>

<style scoped lang="scss">
.ivewThree{
  width: 100%;
  height: 100vh;
}
</style>


