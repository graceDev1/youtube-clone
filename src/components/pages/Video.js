import React from "react";
import Avatar from "@material-ui/core/Avatar";
import '../../VideoCard.css';
function Video({ image, title, views, timestamp, channel, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCardThumnail" src={image} alt="" />
      <div className="video__info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
        <div className="video_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} * {timestamp}
        </p>
      </div>
      </div>
    
      <div></div>
    </div>
  );
}

export default Video;
