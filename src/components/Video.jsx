import clsx from "clsx";

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
  // if (!channel) {
  //   return (
  //     <article>
  //       <p>Incompleto</p>
  //     </article>
  //   );
  // }

  // const articleClassnames =
  //   "video-card" + (channel === "Marques Brownlee" ? " special" : "");

  // let articleClassnames = ["video-card"];

  // if (channel === "Marques Brownlee") {
  //   articleClassnames.push("special");
  // }

  return (
    <article
      className={clsx("video-card", "otra", {
        // special: channel === "Marques Brownlee",
        special: channel === "Marques Brownlee",
      })}
    >
      <img src={image} alt="" />
      <footer>
        {channel && (
          <img
            src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
            alt=""
          />
        )}
        {!channel && <span> 🤷 </span>}

        {/* {channel ? (
          <img
            src={`https://api.dicebear.com/8.x/identicon/svg?seed=${channel}`}
            alt=""
          />
        ) : (
          <span> 🤷 </span>
        )} */}

        <p className="video-card-title">{title}</p>
        <p className="video-card-channel">{channel || "UNKNOWN"}</p>
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
