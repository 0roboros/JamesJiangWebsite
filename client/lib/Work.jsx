Work = React.createClass({
	render: function() {
		return (
		<div className = "container-fluid">
			<div className = "row" id="black">
				<div className = "col-sm-3 col-md-3 col-lg-3">
					<img src="acquia-lift.jpg" />
					<img src="acquia.png" />
				</div>
				<div className = "col-sm-9 col-md-9 col-lg-9">
					<header>Acquia - Java Developer <a href="https://www.acquia.com/products-services/acquia-lift" target="_blank"><img id="logo" src="www.png" /></a></header>
					<p> Developed Back-end features for the Lift Web Personalization Platform: </p>
					<ul>
						<li> Designed Visitor ranking Redshift tables - analyzed various compression schemes and query plans with large amounts of data. 
						Table used in production to find high value customers. Dropped query times from 280 to 10 seconds. </li>
						<li> Data utility that migrated DynamoDB data into Redshift, while sanitizing information and shifting timestamps to the present. Eliminated the need for QA to create test data. </li>
						<li> Cookie splitting logic that split legacy cookies into multiple cookies. </li>
						<li> Coded the first UI tests by writing the initial 4000 lines of feature files and page objects with Cucumber and Selenium. 
						 Integrated UI tests into maven build process, run nightly via Jenkins. </li>
						<li> Technologies used for general development include GWT, Spring, Maven, and Hibernate, in a Java MVP framework. </li>
						<li> Highest possible intern rating of "Outstanding", praised for fit and ability to deliver.</li>
					</ul>
				</div>
			</div>
			<div className = "row" id="black">
				<div className = "col-sm-3 col-md-3 col-lg-3">
					<img src="shaw-mascot.jpg" />
					<img src="shaw.gif" />
				</div>
				<div className = "col-sm-8 col-md-8 col-lg-8">
					<header>Shaw - C# Developer <a href="https://www.shaw.ca" target="_blank"><img id="logo" src="www.png" /></a></header>
					<p> Worked on the cleaning screen process, where refurbished box are functionally tested: </p>
					<ul>
						<li> Planned and configured a standalone video/audio test environment (Oracle, IIS, VirtualBox Bridged Adapter). </li>
						<li> Modified the Chrome emulator and wrote a custom channel provider in C# that loaded 4 channels for any connecting devices. </li>
						<li> Resulted in reducing video/audio test setup time by 80%, critical for the refurbishing process. </li>
						<li> Conducted black and white box testing of Shaw TV Boxes. </li>
					</ul>
				</div>
			</div>
			<div className = "row" id="black">
				<div className = "col-sm-3 col-md-3 col-lg-3">
					<img src="desire2learn.gif" />
				</div>
				<div className = "col-sm-8 col-md-8 col-lg-8">
					<header>Desire2Learn - Quality Assurance Analyst <a href="http://www.d2l.com/" target="_blank"><img id="logo" src="www.png" /></a></header>
					<p> Conducted automated and manual testing of features that are part of the core team: </p>
					<ul>
						<li> Mapped out dynamically generated parts of the UI with XPath, wrote common methods to interact with them (Selenium, NUnit). </li>
						<li> Conducted session-based white/black box testing and discovered 50 bugs, including 3 serious ones that required immediate hotfix. </li>
						<li> Added DOxygen style documentation to automated test cases </li>
					</ul>
				</div>
			</div>
		</div>
		);
	}
});
