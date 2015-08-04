var App = React.createClass({
	render: function() {
		var menu = [
			{
				url: 'users',
				name: 'Users'
			},
			{
				url: 'clients',
				name: 'Clients'
			},
			{
				url: 'about',
				name: 'About'
			}
		];

		var _this = this;

		var drawMenu = menu => {
			var mm = _.map(menu, m => {
				var currentUrl = PathUtils.current();
				var menuUrl = PathUtils.combine(_this.props.parentUrl, m.url);

				return (
					<li className={menuUrl === currentUrl ? "active": ""} key={m.url}>
						<A url={_this.props.componentUrl} path={m.url}>{m.name}</A>
					</li>
				);
			});
			return (
				<nav className="navbar navbar-default navbar-top" role="navigation">
					<ul className="nav navbar-nav">{mm}</ul>
				</nav>
			);
		};

		var menuHtml = drawMenu(menu);

		return (
			<div>
				{menuHtml}
				<div className="container">
					<Path name="users" render={UsersModule}/>
					<Path name="clients" render={ClientsModule}/>
					<Path name="about" render={About}/>
				</div>
			</div>
		);
	}
});
