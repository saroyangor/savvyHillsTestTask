import React, {useEffect, useRef, useState} from 'react';
import styles from "./LoadableImage.module.css";
import cn from "classnames"

type ILoadableImage = {
  src: string
  alt?: string
}

const LoadableImage = (props: ILoadableImage) => {
  const {src, alt = ""} = props
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true)
    }
  }, [])

  return (
    <div className={cn(styles.container, {
      [styles.containerLoaded]: isLoaded
    })}>
      <img ref={imageRef} className={cn(styles.image, {
        [styles.imageLoaded]: isLoaded
      })} src={src} alt={alt}/>
    </div>
  );
};

export default LoadableImage;