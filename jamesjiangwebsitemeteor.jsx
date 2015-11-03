if (Meteor.isClient) {

  // This code is executed on the client only
 
const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

const routes = (
	<Router history={history}>
		<Route name="app" component={App} path="/" >
			<Route name="aboutme" path="/aboutme" component={AboutMe} />
			<Route name="work" path="/work" component={Work} />
			<Route name="blog" path="/blog" component={Blog} />
			<Route name="fun" path="/fun" component={Fun} />
			<IndexRoute component={Home} />
		</Route>
	</Router>
)
  
  function initThree(){
  
    //Declare three.js variables
    var camera, scene, cameraOrtho, sceneOrtho, renderer, stars=[], starsx=[], starsy=[], starsz=[], goingx=[], goingy=[], goingz=[];
	var head, book, king, laptop, items=[], edgesArr=[], captions=[];
	var plane, moon, rotationX, rotationY, rotationZ;
	var vector, raycaster, dir;
	var numPoints = 1500, particles, particleSystem;
	var welcomeText, captionText, titleText, titlePoints=[];
	var hoveredObject;
	var loadTime = 240;
	var convergingTime = 120;
	var maxDisplacement = 10;
	var curIndexFadeIn = 0;
	var active = false;
	var formTitle = false;
	var formTitleTime = 90;
	var clickable = false;
	var lastObjectVisited;
	var curStyle;
	var curOpacityFloat;
	
	
	rotationY = 0.0125;
	rotationZ = 0.0125;
	rotationX = 0.0125;		
     
    //assign three.js objects to each variable
    function init(){
         
        //camera
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 900;   
		camera.position.y = 400;
		//cameraOrtho = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
		//cameraOrtho.position.z = 900;
		
        //scene
        scene = new THREE.Scene();
		//sceneOrtho = new THREE.Scene();
		scene.add(camera);
         
        //renderer
        renderer = new THREE.WebGLRenderer({antialias: true});
		
        //set the size of the renderer
        renderer.setSize( window.innerWidth, window.innerHeight );
		
        // To allow render overlay on top of sprited sphere
		renderer.autoClear = false;
		
        //add the renderer to the html document body
        document.body.appendChild( renderer.domElement );
		
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.enableZoom = false;
		//controls.minDistance = 985;
		//controls.maxDistance = 985;
		
		//mouse raycasting
		vector = new THREE.Vector3();
        raycaster = new THREE.Raycaster();
        dir = new THREE.Vector3();
    }


	function fadeIn(firstObj, secondObj){
		if((firstObj) && (firstObj.material.opacity < 1)){
			firstObj.material.opacity += 0.03;
		}
		if((secondObj) && (secondObj.material.opacity < 1)){
			secondObj.material.opacity += 0.03;
		}
	}
	
	function fadeOut(firstObj, secondObj){
		if((firstObj) && (firstObj.material.opacity > 0)){
			firstObj.material.opacity -= 0.03;
		}
		if((secondObj) && (secondObj.material.opacity > 0)){
			secondObj.material.opacity -= 0.03;
		}
	}
	
    function addSphere(){

				var material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
				});
				var welcomeGeo = new THREE.TextGeometry( "The only limit to our realization of tomorrow is our doubts of today.",  {
					size: 24,
					height: 0.2,
					font: 'droid sans'
				});
				
				welcomeText = new THREE.Mesh(welcomeGeo, material);
				
				welcomeText.position.x = -500;
				welcomeText.rotation.x -= 0.418224329579;
				scene.add(welcomeText);
				
				var points = THREE.GeometryUtils.randomPointsInGeometry( welcomeText.geometry, numPoints );
				for (var itr = 0; itr < points.length; itr++){
					points[itr].x -= 500;
				}
				particles = new THREE.Geometry();
				pMaterial = new THREE.PointsMaterial({
					//color: 0xffffff,
					size: 20,
					map: THREE.ImageUtils.loadTexture("particleblue.png"),
					blending: THREE.AdditiveBlending,
					transparent: true,
					alphaTest: 0.5
				});
				
				
				
				
                for ( var z= 0; z < numPoints; z+=1 ) {
                    var vDestination = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
        
					vDestination.normalize();
					vDestination.multiplyScalar( 300 );
                    //stars.push(sphere); 
					
					starsx.push(vDestination.x);
					starsy.push(vDestination.y);
					starsz.push(vDestination.z);
					
					
					//var vOrigin = new THREE.Vector3(Math.random() * 4000 - 2000, Math.random() * 2000 - 1000, Math.random() * 2500 - 1250);
					
					particles.vertices.push(points[z]);
					//goingx.push(Math.random() * 4 - 2);
					//goingy.push(Math.random() * 4 - 2);					
					//goingz.push(Math.random() * 4 - 2);	
					

                }
				
				particleSystem = new THREE.Points(particles, pMaterial);
    }
	
	function addHead() {
		var loader = new THREE.JSONLoader();
		loader.load("humanheadgeo.json", function ( geometry ) {
			material = new THREE.MeshBasicMaterial({
				//color: 0xffffff,
				//wireframe: true
				transparent: true,
				opacity: 0
			});
			head = new THREE.Mesh(geometry, material);			
			head.position.x = -230;
			head.position.y = 35;
			head.scale.x = head.scale.y = head.scale.z = 45;
			edges = new THREE.EdgesHelper(head, 0x000000, 0.1);
			edges.material.linewidth = 10;
			edges.material.transparent = true;
			edges.material.opacity = 0;
			items.push(head);
			edgesArr.push(edges);
			material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					transparent: true,
					opacity: 0
			});
			var text = "My Life";
			var captionGeo = new THREE.TextGeometry( text, {
					size: 15,
					height: 0.2,
					font: 'droid sans'
			});
			var caption = new THREE.Mesh( captionGeo, material);
			caption.text = text;
			camera.add(caption);
			caption.position.set(-40, -135, -350);
			captions.push(caption);
			scene.add(head);
			scene.add(edges);	
		});
	}
	
	function addLaptop() {
		var loader = new THREE.JSONLoader();
		loader.load("laptopgeo.json", function ( geometry ) {
			material = new THREE.MeshBasicMaterial({
				//color: 0xffff00,
				//wireframe: true
				transparent: true,
				opacity: 0
			});
			laptop = new THREE.Mesh(geometry, material);			
			laptop.position.z = 220;
			laptop.scale.x = laptop.scale.y = laptop.scale.z = 9;
			edges = new THREE.EdgesHelper(laptop, 0x000000, 20);
			edges.material.linewidth = 10;
			edges.material.transparent = true;
			edges.material.opacity = 0;
			items.push(laptop);
			edgesArr.push(edges);
			material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					transparent: true,
					opacity: 0
			});
			var text = "My Work";
			var captionGeo = new THREE.TextGeometry( text, {
					size: 15,
					height: 0.2,
					font: 'droid sans',

			});
			var caption = new THREE.Mesh( captionGeo, material);
			caption.text = text;
			camera.add(caption);
			caption.position.set(-40, -135, -350);
			captions.push(caption);
			scene.add(laptop);
			scene.add(edges);			
		});
	}
	
	function addBook() {
		var loader = new THREE.JSONLoader();
		loader.load("bookgeo.json", function ( geometry ) {
			material = new THREE.MeshBasicMaterial({
				//color: 0xffff00,
				//wireframe: true
				transparent: true,
				opacity: 0
			});
			book = new THREE.Mesh(geometry, material);			
			book.position.x = 215;
			book.scale.x = book.scale.y = book.scale.z = 1.5;
			edges = new THREE.EdgesHelper(book, 0x000000, 5);
			edges.material.linewidth = 10;
			edges.material.transparent = true;
			edges.material.opacity = 0;
			items.push(book);
			edgesArr.push(edges);
			material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					transparent: true,
					opacity: 0
			});
			var text = "My Blog";
			var captionGeo = new THREE.TextGeometry( text, {
					size: 15,
					height: 0.2,
					font: 'droid sans'
			});
			var caption = new THREE.Mesh( captionGeo, material);
			caption.text = text;
			camera.add(caption);
			caption.position.set(-40, -135, -350);
			captions.push(caption);
			scene.add(book);
			scene.add(edges);	
		});
	}
	
	function addKing() {
		var loader = new THREE.JSONLoader();
		loader.load("kinggeo.json", function ( geometry ) {
			material = new THREE.MeshBasicMaterial({
				//color: 0xff0000,
				//wireframe: true
				transparent: true,
				opacity: 0
			});
			king = new THREE.Mesh(geometry, material);
			king.position.z = -230;
			king.scale.x = king.scale.y = king.scale.z = 22;
			edges = new THREE.EdgesHelper(king, 0x000000, 15);
			edges.material.linewidth = 10;
			edges.material.transparent = true;
			edges.material.opacity = 0;
			items.push(king);
			edgesArr.push(edges);
			material = new THREE.MeshBasicMaterial({
					color: 0xffffff,
					transparent: true,
					opacity: 0
			});
			var text = "My Fun";
			var captionGeo = new THREE.TextGeometry( text, {
					size: 15,
					height: 0.2,
					font: 'droid sans',
			});
			var caption = new THREE.Mesh( captionGeo, material);
			caption.text = text;
			camera.add(caption);
			caption.position.set(-40, -135, -350);
			captions.push(caption);
			scene.add(king);
			scene.add(edges);
		});
	}
	
    function animateStars() {
		if (active == true){
			if ((formTitle) && (formTitleTime > 0)) {
				var pvertices = particleSystem.geometry.vertices;
				for (var itr = 0; itr < pvertices.length; itr++){
					var diffx = titlePoints[itr].x - pvertices[itr].x;
					var diffy = titlePoints[itr].y - pvertices[itr].y;
					var diffz = titlePoints[itr].z - pvertices[itr].z;
					pvertices[itr].setX(pvertices[itr].x + diffx/20);
					pvertices[itr].setY(pvertices[itr].y + diffy/20);
					pvertices[itr].setZ(pvertices[itr].z + diffz/20);
				}
				particleSystem.geometry.verticesNeedUpdate = true;
				if (curStyle){
					curOpacityFloat += 0.1
					curStyle.opacity =  curOpacityFloat.toString();
					if (curOpacityFloat >= 1){
						curStyle = null;
					}
				}
				if (formTitleTime < 50){
					fadeIn(titleText);
				}
				if (formTitleTime < 35){
					fadeOut(particleSystem);
				}
				if (formTitleTime <= 1){
					window.addEventListener("mousewheel", scrollPage);
				}
				formTitleTime--;
			}
			if (convergingTime > 0){
				if (particleSystem.material.opacity != 1){
					particleSystem.material.opacity = 1;
				}
				
				var pvertices = particleSystem.geometry.vertices;

				for (var itr = 0; itr < pvertices.length; itr++){
					var diffx = starsx[itr] - pvertices[itr].x;
					var diffy = starsy[itr] - pvertices[itr].y;
					var diffz = starsz[itr] - pvertices[itr].z;
					pvertices[itr].setX(pvertices[itr].x + diffx/20);
					pvertices[itr].setY(pvertices[itr].y + diffy/20);
					pvertices[itr].setZ(pvertices[itr].z + diffz/20);
				}
				particleSystem.geometry.verticesNeedUpdate = true;
				if (curStyle){
					curOpacityFloat -= 0.1;
					curStyle.opacity =  curOpacityFloat.toString();
					if (curOpacityFloat <= 0){
						curStyle.display = "none";
						curStyle = null;
					} 
				}
				if (convergingTime <= 1){
					clickable = true;
				}
				convergingTime--;
			} else {
				if (curIndexFadeIn < items.length){
					var curCategory = items[curIndexFadeIn];
					var curEdge = edgesArr[curIndexFadeIn];
					fadeIn(curCategory, curEdge);
					if (curCategory.material.opacity >= 1){
						curIndexFadeIn++;
					}
				}
			}
			if (!titleText){
				particleSystem.rotation.y += 0.005;
			}
			//moon.rotation.y += rotationY;
			//moon.rotation.z += rotationZ;
			if (king){
			king.rotation.y += rotationY;
			}
			if (laptop) {
			laptop.rotation.y += rotationY * 0.6666;
			}
			if (book){
			book.rotation.y += rotationY * 0.6666;
			}
			if (head) {
			head.rotation.y += rotationY;
			}
			//plane.rotation.setFromRotationMatrix( camera.matrix );
			//plane.quaternion.copy( camera.quaternion );
		} else {
			loadTime--;
			if (loadTime <= 0){
				camera.position.z = 900;
				camera.position.y = 400;
				camera.position.x = 0;
				camera.lookAt(new THREE.Vector3(0,0,0));
				active = true;
				scene.add(particleSystem);
				welcomeText.visible = false;
			}
		}
    }

    function render() {
        //get the frame
        requestAnimationFrame( render );

        //render the scene

		renderer.render( scene, camera );
            animateStars();

    }
    
    init();
    addSphere();
	addHead();
	addKing();
	addBook();
	addLaptop();
    render();

	
	renderer.domElement.addEventListener('mouseup', goToPage, false);
	
	function goToPage(){
		if (active && clickable && hoveredObject && !titleText){
		
			var lastObjectVisited = hoveredObject;
			var indexOfItem = getEdgeIndexOfItem(hoveredObject);
			var material = new THREE.MeshBasicMaterial({
				color: 0xffffff,
				transparent: true,
				opacity: 0
			});
			var titleGeo = new THREE.TextGeometry( captions[indexOfItem].text, {
				size: 80,
				height: 0.2,
				font: 'droid sans'
			});
			var titleGeoClone = titleGeo.clone();
			
			titleText = new THREE.Mesh(titleGeo, material);
			camera.add(titleText);
			titleText.position.set(-170, 500, -1500);
			titleGeoClone.lookAt(new THREE.Vector3(camera.position.x, 0, camera.position.z));
			var points = THREE.GeometryUtils.randomPointsInGeometry( titleGeoClone, numPoints );
			scene.updateMatrixWorld();
			//var titlePos = camera.localToWorld(titleText.position);
			var titlePos = new THREE.Vector3();
			titlePos.setFromMatrixPosition( titleText.matrixWorld );
			for (var itr = 0; itr < points.length; itr++){
				points[itr].set(points[itr].x + titlePos.x, points[itr].y + titlePos.y, points[itr].z + titlePos.z);
				points[itr] = particleSystem.worldToLocal(points[itr]);
			}
			titlePoints = points;
			formTitle = true;
			formTitleTime = 90;
			if (captionText){
				captionText.material.opacity = 0;
				captionText = null;
			}
			if (hoveredObject) {
				hoveredObject = null;
			}
			clickable = false;
			document.getElementById(captions[indexOfItem].text).click();
			var everythingLoaded = setInterval(function() {
			  if (/loaded|complete/.test(document.readyState)) {
				clearInterval(everythingLoaded);
				fadeInPage(); // this is the function that gets called when everything is loaded
			  }
			}, 1000);
		}
	}
	
	
	
	function fadeInPage(){
		style = document.getElementById('render-target').style;
		style.display = "block";
		style.top = "0px";
		var opacity = style.opacity;
	
		if (!opacity){
			opacity = "0.0";
		}
		curOpacityFloat = parseFloat(opacity);
		curStyle = style;
	}
	
	function fadeOutPage(){
		window.removeEventListener("mousewheel", scrollPage);
		style = document.getElementById('render-target').style;
		style.display = "block";
		var opacity = style.opacity;
	
		if (!opacity){
			opacity = "1.0";
		}
		curOpacityFloat = parseFloat(opacity);
		curStyle = style;
	}

	renderer.domElement.addEventListener('mousemove', onMouseMove, false);

	function onMouseMove(event) {
		if ((active == true) && clickable && (curIndexFadeIn != 0) && (curIndexFadeIn >= items.length)){
			event.preventDefault();
			
			vector.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5); 

			vector.unproject(camera);

			raycaster.set(camera.position, vector.sub(camera.position).normalize());

			var intersects = raycaster.intersectObjects(items, false);
			var intersectsEdges = raycaster.intersectObjects(edgesArr, false);

			if (intersects.length > 0){
				if (!hoveredObject){
					hoveredObject = intersects[0].object;
					hoveredObject.material.color.setHex( 0x000000 );
					var indexOfItem = getEdgeIndexOfItem(hoveredObject);
					edgesArr[indexOfItem].material.color.setHex(0xffffff);
				}
				if (!captionText){
					captionText = captions[indexOfItem];
					captionText.material.opacity = 1;
				}
			} else {
				for (var itr = 0; itr < items.length; itr++){
					items[itr].material.color.setHex(0xffffff);
					edgesArr[itr].material.color.setHex(0x000000);
				}
				if (captionText){
					captionText.material.opacity = 0;
					captionText = null;
				}
				if (hoveredObject) {
					hoveredObject = null;
				}
			}
		}
	}
	
	window.addEventListener('popstate', function(event) {
		window.history.forward();
		fadeOutPage();
		convergingTime = 90;
		if (titleText){
			camera.remove(titleText);
			titleText = null;
			formTitle = false;
			formTitleTime = 90;
		}
	});
	

	
	window.addEventListener( 'resize', onWindowResize, false);
  
	function onWindowResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		//cameraOrtho.aspect = window.innerWidth / window.innerHeight;
		//cameraOrtho.updateProjectionMatrix();
		//cameraOrtho.setSize( window.innerWidth, window.innerHeight);
	}
	
	function scrollPage(event){
	
		event.preventDefault() 
		var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
	
		var style = document.getElementById('render-target').style;
		var top = style.top;
		if (!top){
			top = "0%";
		}
		var topInt = parseInt(top);
		topInt += delta*6;
		
		style.top = topInt.toString() + "%";
		
		var topTitle = document.getElementById('topTitle')
		var topOffset = getTopOffset(topTitle);
		if (topInt > 80){
			fadeOutPage();
			convergingTime = 90;
			if (titleText){
				camera.remove(titleText);
				titleText = null;
				formTitle = false;
				formTitleTime = 90;
			}
		}

		var bottomTitle = document.getElementById('bottomTitle')
		var bottomOffset = getTopOffset(bottomTitle);
		if (bottomOffset < 0){
			fadeOutPage();
			convergingTime = 90;
			if (titleText){
				camera.remove(titleText);
				titleText = null;
				formTitle = false;
				formTitleTime = 90;
			}
		}
		
	}
	
	function getTopOffset(element)
	{
		var de = document.documentElement;
		var box = element.getBoundingClientRect();
		var top = box.top + window.pageYOffset - de.clientTop;
		return top;
	}
	
	function getEdgeIndexOfItem(item){
		for (var itr = 0; itr < items.length; itr++){
			if (items[itr] == item){
				return itr;
			}
		}
	}
  }
  
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
		initThree();
		React.render(routes, document.getElementById("render-target"));
  });
}