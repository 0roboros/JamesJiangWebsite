const {
	Link
} = ReactRouter;

App = React.createClass({
  render: function () {
    return (
	<div className = "container-fluid">
	 <div className = "row" id="transparentRow">
		<div id="topTitle">
		</div>
		<ul id="routes">
			<li><Link to="/">Home</Link></li>
			<li><Link id="My Work" to="/work">Work</Link></li>
			<li><Link id="My Life" to="/aboutme">AboutMe</Link></li>
			<li><Link id="My Blog" to="/blog">Blog</Link></li>
			<li><Link id="My Fun" to="/fun">Fun</Link></li>
		</ul>
	 </div>
	 <div className = "row">
		<div className= "col-sm-12 col-md-12 col-lg-12">
			{this.props.children}
		</div>
	 </div>
	 <div className = "row" id="transparentRow">
		<div id="bottomTitle">
		</div>
	 </div>
	</div>
    );
  }
});