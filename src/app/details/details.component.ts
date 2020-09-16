import { DetailsService } from './details.service';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  private url = './assets/products.json';
  historyItems = [];

  items = [];
  id: number;
  public model: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title,
    private details: DetailsService
  ) {}

  ngOnInit(): void {
    this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        for (let key in data)
          if (data.hasOwnProperty(key)) this.items.push(data[key]);
        console.log(this.items[this.id].model);
        this.model = this.items[this.id].model;
        this.models(this.model);
        this.titleService.setTitle(this.items[this.id].name);
      });
    this.route.paramMap.subscribe((params) => {
      let id = +params.get('id');
      this.id = id - 1;
      this.details.setId(this.id);
    });
  }
  models(model) {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaa7a7);
    var camera = new THREE.PerspectiveCamera(30, 700 / 650);
    camera.rotation.y = (45 / 180) * Math.PI;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1;
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    // var controls = new THREE.OrbitControls(camera);
    // controls.addEventListener('change', renderer);
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableZoom = true;
    var hlight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(hlight);

    // var directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    // // directionalLight.position.set(0, 0, 0);
    // directionalLight.castShadow = false;
    // scene.add(directionalLight);

    var loader = new GLTFLoader();

    loader.load(
      model,
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    renderer.setSize(750, 600);

    document.body.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
}
