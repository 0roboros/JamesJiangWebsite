Blog = React.createClass({
	render: function() {
		return (

		<div className = "container-fluid">
			<div className = "row" id="black">
				<div className = "col-sm-10 col-md-10 col-lg-10">
					<header id="gen">Genesys Hackathon Experience</header>
					<p>September 31th, 2015</p>
					<p>I recently attended the Genesys Hackathon with 2 good buddies of mine, where we had to
					   use their Designer software along with any language/technologies we wanted to create something useful. The Genesis
					   Designer software is a program that allowed users to create phone switchboard logic.
					</p>
						
					<p>Being very interested in data-driven products, I suggested that we create something where we captured the sentiment of
					the calling customer and use that information to somehow to build a profile for them. However, it became quickly evident
					that the Genesys Designer was limited in that there was no way to capture the raw audio of the customer, or get a
					speech-to-text string of what they said. Therefore, there was no way to get the information we needed to run through
					any kind of sentiment analysis backend.
					</p>
					<p>
						Since we only had about 12 hours for the Hackathon, we knew we couldn't spend too much time on idea generation. In the end, we
						decided to do data analysis on the "route" that the customer walks (the sequence of choices they make on the switchboard).
						Since Genesys Designer is able to make API calls, we decided to create a dashboard for call center agents
						that automatically showed a profile of the customer when they called in, such as the last route they took, their most common problems,
						and notes on their behaviour. Furthermore, there was also the ability to directly leave a message for the customer, which could be
						played back to the customer the next time they call into the switchboard.</p>
						
					<p> After a few hours, we were able to finish most of the features we planned. Even though the sheer amount of content we coded
					was quite high, we were still missing a unique feature. We needed something that would provide the "ooooooooo" reaction, something
					that we're sure hasn't been done before yet. Then the idea
					came to me. There was no way to get raw data from the customer, but it was very possible to use data from the call center agent. 
					</p>
					<p> For example, call center agents can leave messages and notes for customers, and we calculate how negative their comments were.
						If a comment is deemed to be too negative, then we could prevent the message from reaching the customer. </p>
					<a href="genesys-hackathon.jpg" target="_blank"><img src="genesys-hackathon.jpg" /></a>
					<p> Turns out, the judges loved it, and we are selected as a finalist to present in the Toronto Tech Summit next week. </p>
				</div>
				<div className = "col-sm-2 col-md-2 col-lg-2">
					<div id="fixed">
						<p><a href="javascript:;" onClick={this.scrollIntoView.bind(this, "gen")}>Genesys Hackathon Experience </a></p>
						<p><a href="javascript:;" onClick={this.scrollIntoView.bind(this, "kali")}>Penetration Testing with Kali Linux </a></p>
						<p><a href="javascript:;" onClick={this.scrollIntoView.bind(this, "spring")}>Spring Boot and Dependency Injection </a></p>
						<br /><br />
						<p><a href="javascript:;" onClick={this.goBack}><strong> Back to Main Menu </strong></a></p>
					</div>
				</div>
			</div>
			<br />
			<div className = "row" id="black">
				<div className = "col-sm-10 col-md-10 col-lg-10">
					<header id="kali">Penetration Testing with Kali Linux</header>
					<p>August 5th, 2015</p>
					<p id="red">
						Before I begin, I would like to make it clear that I did not use penetration testing tools on anyone other than myself, my friends, and my family.
						Everything in this post is for educational purposes, and I do not take responsibility for what you do with this (very dangerous) knowledge.
						Attempting to obtain passwords or unauthorized information from people is a crime.
					</p>
					<p>
						After being inspired by the extremely interesting TV series <a href="http://www.imdb.com/title/tt4158110/" target="_blank"> Mr. Robot</a>, 
						I decided to see what penetration testing tools were available nowadays. A quick search and discussion with my friends lead me
						to Kali, a distro of Linux that was apparently preloaded with over 200 pen-testing tools. It is also the successor of the very popular Backtrack.
						
						So, after checking (very carefully) that the checksum of my Kali image was genuine, I installed it onto my computer via dual boot.
					</p>
					<img src="kalilogin.jpg" />
					
					<header>
						Cracking WPA2 Wifi
					</header>
					<p>
						There are essentially 2 main methods of cracking WPA2:
					</p>
					<p>
						1) Offline Dictionary Attack
					</p>
					<p>
						2) WPS Pin Brute Force
					</p>
					
					<p> <strong> Offline Dictionary Attack </strong>- This method can crack common dictionary password in less than 5 minutes with my laptop's Geforce GTX960M.
						The idea is to use packet injection to send deauthentication frames to a router and a connected client.
						This will force an existing authenticated client to disconnect themselves from the router. When that happens, the client will
						try to automatically reauthenticate with the router via a 4-way-handshake. When it does that, we intercept the handshake with a
						man in the middle attack and store the hashed handshake.
						
					</p>
					
					<img src="aireplay-deauth.jpg" />
					
					<p>
						Now that we have the hashed handshake, we simply use the massive parallel processing capabilities of GPUs
						to hash our huge dictionary of common words and common passwords, and check if any of the hashed values
						match the hash of the handshake we captured. CudaHashCat is a great tool to do this, and within moments the password is found:
					</p>
					
					<img src="hashcatplus.jpg" />
					
					<p>
						As you can see, its not just common english words that can be cracked. There are actually dictionary's created from
						the most common passwords from hacked online databases. A simple "cat rockyou.txt | grep 'james'" (rockyou.txt is
						a popular common password dictionary) actually gives me over 50 passwords that contains the word james, including all kinds of weird passwords like 
						"James007", "love_James", and "JamesJames".
					</p>
					

					<p>
						<strong> WPS Pin Brute Force </strong>- This method can crack ANY password in a few hours, regardless of what the password is. Basically, whoever 
						designed WPA really messed up when they added the WPS feature to make it easier for non-tech savvy people to connect their 
						devices to their routers. WPS is a 8 digit pin that every router has. If you enter the correct 8 digit pin, the router
						gives you the WPA2 password on a silver plate and says "here you go, please hack me".
						
					</p>
					
					<p>
						Now, WPS pins cannot be guessed offline, and attempts must be made by sequentially trying pins against the router.
						Since a pin is numeric, and every digit is between 0-9, and there are 8 digits, this is 10^8 = 100,000,000 possibilities, which will take
						forever since we can only try our pins against the router once every few seconds. Guessing every combination like this will take years.
					</p>
					
					<p>
						But here is where it gets interesting: For some reason, the router actually checks 4 digits at a time, AND tells you
						if those 4 digits are correct or not. So this means, we only have to check 10^4 + 10^4 possiblities = 20,000. But
						it turns out that we can do EVEN better - the 8th digit of the WPS pin is just a checksum of the first 7 digits,
						so we don't have to guess that digit at all. Finally, we have 10^4 + 10^3 = 11000 combinations. We just went from 100,000,000 to
						11000. Not bad at all.
						
					</p>
					
					<p>
						And thats exactly what the popular tool "reaver" does. It slowly tries all 11000 combinations over a few hours against your router.
						No matter what you set your password as, it will slowly chip away at the pin until it gets it.
					</p>
					
					<img src="reaverwps.jpg" />
					<p>
						The funniest thing about all of this is that anyone can do it. Anyone can have kali linux installed and be stealing
						passwords from others. All of these tools require no knowledge of underlying architecture or security whatsoever, 
						and as long as you can read documentation and understand how to use the tools, you're good to go. 
					</p>
					
					<p>
						But its not all gloom and doom. Security is a constant war, and there have been lots of progress recently 
						for the defenders. Many sites require special characters in your password now, which makes it extremely difficult for
						any offline dictionary attack to work (since they rely on meaning, common words, and related words that may be used together)
					</p>
					
					<p>
						Furthermore, new routers now have a time-out delay that locks the router from further attempts to guess after
						a certain number of failures. You can also choose to disable the WPS pin functionality altogether, but the default
						behaviour of most routers these days is to have it on.
					</p>
					
					<p>
						Strictly speaking, if you use lots of special characters in your password, and disable WPS, you should be very safe. 
						For now. Until someone discovers a new exploit, like the very new WPS Pixie Dust Attack. But I won't be talking about it -
						this post has been way too long. Google it if you're interested.
					</p>
					
					<p>
						That's it for now.
					</p>
				</div>
			</div>
			<div className = "row" id="black">
				<div className = "col-sm-10 col-md-10 col-lg-10">
					<header id="spring">Spring Boot and Dependency Injection</header>
					<p>July 2nd, 2015</p>

					<p>
						I spent the majority of my time coding in Spring Java at my last internship. The app that I'm working on, Spark, is also Backended
						with Spring Boot. The Spring framework is based on the idea of Dependency Injection. But what exactly does that mean?
						Well, let us consider the case of a normal constructor:
					</p>
					
						<img src="carbefore.jpg" />
						
					<p>
						In the example above, we can see that there is a clear dependency between car and engine. 
						
						Now, here the dependency injection version:
					</p>
					
						<img src="carafter.jpg" />
						
					<p>
						By changing Engine to IEngine, and allowing it to be passed in as a parameter, we have performed an inversion of control:
						The client chooses which implementation of IEngine to use and injects it as a dependency to Car. This is good object oriented
						practice because it keeps code loosely coupled, and makes Car depend on an interface rather than an implementation.
					</p>
					<p>
						Anyways, lets talk about Spring. The idea behind Spring is that we create Beans that specify which
						implementation of an interface we want.
						
						For example, a common interface in Spring is the JDBC.DataSource Interface, which is how the application will talk
						the database. However, it does not state which database technology to use. That is up to the programmer to
						decide and initialize in the form of beans. 
						
						If the programmer wants to use postgresql, then they can create the follow config variables in Spring Boot:
						
					</p>
					
						<img src="springconfig.jpg" />

					<p>
						Spring will then inject this dependency as the DataSource, and we can talk to our PostgreSql database.
						If in the future, we decide that that PostgreSql sucks and we want to use Mongo instead, we can simply inject a Mongo bean
						instead. All we have to do is change the configuration, and not the source code. This is because the code depends on the DataSource interface,
						and not any specific implementation of it.
					</p>
					<p>
						And what do I think about all of this? I think its very useful for large projects, giving them the ability
						to be fluid and change components without having to rewrite entire codebases. Its like OOP version 2,
						where you have EVEN more overhead cost at the start, but gain code reuse and long term maintainability.
						Luckily, Spring Boot mitigates a lot of that overhead cost by taking an opiniated view on things
						and setting up many basic functionality for you.
						
					</p>
					
					<p>
						Its pretty neat, and I'm glad to have learned it and the many design principles that come with it.
					</p>
				</div>
			</div>
		</div>
		);
	},
	
	scrollIntoView: function (id){
		var element = document.getElementById(id);
		var offset = element.getBoundingClientRect().top;
		console.log(offset);
		var style = document.getElementById('render-target').style;
		var bodyHeight = Math.max(
			document.documentElement.clientHeight,
			//document.body.scrollHeight,
			//document.documentElement.scrollHeight,
			//document.body.offsetHeight,
			//document.documentElement.offsetHeight
		);
		console.log(bodyHeight);
		var top = style.top;
		var topInt = parseInt(top);
		offsetPercent = (offset / bodyHeight) * 100;
		topInt -= offsetPercent;
		style.top = topInt.toString() + "%";
	},
	goBack: function (){
		history.back();
	}
});