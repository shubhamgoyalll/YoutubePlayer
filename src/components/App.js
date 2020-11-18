import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.getSubmitData("MacBook Air");
	}

	getSubmitData = async (searchTerm) => {
		const response = await youtube.get("/", {
			params: {
				q: searchTerm
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	getSelectedVideo = (video) => {
		console.log(video);
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div>
				<SearchBar getSubmitData={this.getSubmitData} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videos={this.state.videos}
								getSelectedVideo={this.getSelectedVideo}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
