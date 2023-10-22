import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl, author} = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl === null ? "https://e0.pxfuel.com/wallpapers/412/126/desktop-wallpaper-error-404-black-error-thumbnail.jpg" : imageUrl} style={{height: '200px'}} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted"> By {author} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-dark">
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;


// import React from 'react'

// export default function NewsItem(props) {
//     return (
//       <div>
//         <div className="card" style={{width: "18rem"}}>
//           <img src={props.imageUrl === null ? "https://i.ytimg.com/vi/bhHTh7SmeaM/maxresdefault.jpg" : props.imageUrl} style={{height: '200px'}} className="card-img-top" />
//           <div className="card-body">
//             <h5 className="card-title">{props.title}</h5>
//             <p className="card-text">
//               {props.description}
//             </p>
//             <a href={props.newsUrl} target="_blank" className="btn btn-primary">
//               Read More..
//             </a>
//           </div>
//         </div>
//       </div>
//     );
// }
