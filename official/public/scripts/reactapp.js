var CommentBox = React.createClass({
	render: function(){
		return (
			<div classname="commentBox">
				Hello, world! I am a CommentBox
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('content')
);