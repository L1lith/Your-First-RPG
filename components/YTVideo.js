import styles from '../styles/YTVideo.module.scss'
import { useState, Fragment } from 'react'

const urlRegex = /^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i

function YTVideo(props = { url }) {
  const [isOpen, setOpen] = useState(false)
  const { url, query = {} } = props
  if (
    props.hasOwnProperty('query') &&
    (typeof query != 'object' || query === null || Object.keys(query).length < 1)
  )
    throw new Error('Please provide a valid query object')
  if (typeof url !== 'string') {
    console.warn(new Error('Expected a video url'))
    return null
  }
  query.autoplay = 1 // Currently autoplay is broken, it is always applied when the video loads, but the video only loads after you click the image and at the moment there's no way to skip clicking the image so we just enforce autoplay for the hot-swapped youtube embed
  if (!urlRegex.test(url)) throw new Error('This url is invalid')
  const videoURL =
    'https://www.youtube.com/embed/' +
    url +
    `?` +
    Object.entries(query)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
  const parentProps = { ...props }
  delete parentProps.url
  delete parentProps.children
  return (
    <div
      {...parentProps}
      className={
        styles['youtube-container'] + ' youtube-container'
        // 'youtube-container' + (typeof props.className == 'string' ? ' ' + props.className : '')
      }>
      {!isOpen ? (
        <Fragment>
          <img
            onClick={() => setOpen(true)}
            src={
              props.hasOwnProperty('thumbnail')
                ? props.thumbnail
                : `https://img.youtube.com/vi/${url}/hqdefault.jpg`
            }
            alt="Youtube Video"
          />
          <span className={styles.play}>▶</span>
        </Fragment>
      ) : null}
      <iframe
        className={isOpen ? null : styles.disabled}
        src={isOpen ? videoURL : null}
        title="YouTube video player"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YTVideo
