Fun = React.createClass({
	render: function() {
		return (
		<div className = "container-fluid">
			<div className = "row" id="black">
				<div className = "col-sm-5 col-md-5 col-lg-5">
					<div className="youtubeContainer">
						<div id="iframe" onClick={this.LoadYoutubeVidOnPreviewClick.bind(this, "W2NubONU_Ks")}>
							<a href="javascript:;" id="skipser-youtubevid-W2NubONU_Ks">
								<div id="playButton"></div>	
								<img src="http://i.ytimg.com/vi/W2NubONU_Ks/hqdefault.jpg" />
							</a>
						</div>
					</div>
				</div>
				<div className = "col-sm-7 col-md-7 col-lg-7">
					<header>Genesys Hackathon 2015 - Finalist <a href="https://github.com/tyron-j/genesys-hackathon-2015" target="_blank"><img id="logo" src="github.png" /></a></header>
					<ul>
						<li> Developed a web application in 12 hours, for call centre agents, that automatically shows 
						customer profile on screen when a call comes in. </li>
						<li> Backend api in node.js/express. </li>
						<li> Genesys Designer software to capture menu information from customers. </li>
						<li> Implemented NLP sentiment APIs to prevent negative SMS and voice messages to customers. </li>
					</ul>
				</div>
			</div>
			<div className = "row" id="black">
				<div id = "black" className = "col-sm-9 col-md-9 col-lg-9">
					<header>Spark <a href="https://github.com/chuangli94/spark" target="_blank"><img id="logo" src="github.png" /></a></header>
					<ul>
						<li> Matchmaking application that matches users based on geolocation and similar visual interests. </li>
						<li>	Combined image tagging APIs and WordNet semantic similarities algorithms to learn about 
						users based on what pictures they like. </li>
						<li>	Back-end stack written as a REST API service in annotation-driven Java, Spring and Gradle. </li>
						<li>	API-wide OAUTH2 authentication and resource servers, Facebook login integration. </li>
						<li>	Chat features implemented in node.js, MongoDB, and Google Messaging Service. </li>
						<li>	MySQL for administrative and sensitive info, MongoDB for flexible schema of user profiles,
								Neo4j for social relationships between users. </li>
						<li> AWS (EC2, RDS, and S3). </li>
					</ul>
				</div>
				<div className = "col-sm-3 col-md-3 col-lg-3">
					<img src="spark.jpg" />
				</div>
			</div>
			<div className = "row" id="black">
				<div className = "col-sm-4 col-md-4 col-lg-4">
					<img src="unrealengine.jpg" />
				</div>
				<div className = "col-sm-8 col-md-8 col-lg-8">
					<header>Real RPG <a href="https://github.com/0roboros/Real-RPG" target="_blank"><img id="logo" src="github.png" /></a></header>
					<ul>
						<li> C++ 3D role playing game to learn about various video game components. </li>
						<li>	Experimented with AI behaviour/decision trees. </li>
						<li>	Implemented a grid based inventory systems.  </li>
						<li>	Experimented with using state machines to animate a model. </li>
						<li>	Worked in the UE C++ framework along with blueprints logic. </li>
					</ul>
				</div>
			</div>
			<div className = "row" id="black">
				<div className = "col-sm-7 col-md-7 col-lg-7">
					<header>Megaman Zero <a href="https://github.com/0roboros/MegamanZero" target="_blank"><img id="logo" src="github.png" /></a></header>
					<ul>
						<li> 2D side scrolling game based on the Megaman Zero series (Game Boy Advanced). </li>
						<li> Coded the game in GML (Game Maker 8 Language). </li>
						<li> Created 2D engine with support for charge attacks, melee/projectile attacks, 
						knockbacks, double jump, wall jump, and wall sliding. </li>
						<li> Basic text driven cutscenes and offline cooperative play
						available. </li>
					</ul>
				</div>
				<div className = "col-sm-5 col-md-5 col-lg-5">
					<div className="youtubeContainer">
						<div id="iframe" onClick={this.LoadYoutubeVidOnPreviewClick.bind(this, "Y0Q053xCmYc")}>
							<a href="javascript:;" id="skipser-youtubevid-Y0Q053xCmYc">
								<div id="playButton"></div>
								<img src="http://i.ytimg.com/vi/Y0Q053xCmYc/hqdefault.jpg" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	},
	
	LoadYoutubeVidOnPreviewClick: function (id){
		var code='<iframe src="https://www.youtube.com/embed/'+id+'/?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1" frameBorder=0 allowFullScreen></iframe>';
		var iframe = document.createElement('div');
		iframe.innerHTML=code;
		iframe=iframe.firstChild;
		var div=document.getElementById("skipser-youtubevid-"+id);
		div.parentNode.replaceChild( iframe, div);
	}
});
