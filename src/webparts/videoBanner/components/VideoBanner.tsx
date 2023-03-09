import * as React from "react";
import { useRef, useEffect } from "react";
import { IVideoBannerProps } from "./IVideoBannerProps";
import styles from "./VideoBanner.module.scss";

export const VideoBanner = (props: IVideoBannerProps) => {
  const vRef = useRef<HTMLVideoElement>(null);
  const oldUrl = useRef(props.videoUrl);
  console.debug("execution here");

  console.log(props.videoUrl, "videoUrl");
  console.log(oldUrl.current, "oldUrl");

  useEffect(() => {
    if (oldUrl.current !== props.videoUrl && vRef && vRef.current) {
      vRef.current.load();
      oldUrl.current = props.videoUrl;
    }
  }, [props.videoUrl]);

  return (
    <div className={styles.videoBanner} style={{ height: `${props.height}px` }}>
      <div style={{ height: `${props.height}px` }}>
        <h1 style={{ color: props.labelColor }}>{props.wpTitle}</h1>
      </div>
      <video
        ref={vRef}
        autoPlay={true}
        loop={true}
        playsInline={true}
        preload="auto"
        tabIndex={-1}
        muted={true}
        style={{ filter: `brightness(${props.brightness}%` }}
      >
        <source src={props.videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};
