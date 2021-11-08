import styles from '../styles/YTVideo.module.scss'

function YTVideo(props) {
  if (typeof props.url !== 'string') throw new Error('Expected a video url')
  const parentProps = { ...props }
  delete parentProps.url
  delete parentProps.children
  console.log(props)
  return (
    <div
      {...parentProps}
      className={
        styles['youtube-container']
        // 'youtube-container' + (typeof props.className == 'string' ? ' ' + props.className : '')
      }>
      <iframe
        src={'https://www.youtube.com/embed/' + props.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YTVideo
