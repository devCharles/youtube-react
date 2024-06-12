// export default function Video(props) {
//   return (
//     <article className="video-card">
//       <img src={props.image} alt="" />
//       <footer>
//         <img src="" alt="" />
//         <p>{props.title}</p>
//         <p>{props.channel}</p>
//       </footer>
//     </article>
//   );
// }

// export default function Video(props) {
//   const { image, title, channel } = props;
//   return (
//     <article className="video-card">
//       <img src={image} alt="" />
//       <footer>
//         <img src="" alt="" />
//         <p>{title}</p>
//         <p>{channel}</p>
//       </footer>
//     </article>
//   );
// }

export default function Video({ image, title, channel }) {
  return (
    <article className="video-card">
      <img src={image} alt="" />
      <footer>
        <img
          src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
          alt=""
        />
        <p className="video-card-title">{title}</p>
        <p className="video-card-channel">{channel}</p>
      </footer>
    </article>
  );
}

// MAL ❌
// export default function Video(image, title, channel) {
//   return (
//     <article className="video-card">
//       <img src={image.image} alt="" />
//       <footer>
//         <img src="" alt="" />
//         <p>{image.title}</p>
//         <p>{channel}</p>
//       </footer>
//     </article>
//   );
// }
