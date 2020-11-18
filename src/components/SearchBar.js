import React from "react";

class SearchBar extends React.Component {
	state = { searchTerm: "" };

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.getSubmitData(this.state.searchTerm);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<input
							type="text"
							placeholder="Search Videos"
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
