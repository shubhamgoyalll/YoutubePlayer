import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, getSelectedVideo }) => {
	return (
		<div className="item video-item" onClick={() => getSelectedVideo(video)}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
