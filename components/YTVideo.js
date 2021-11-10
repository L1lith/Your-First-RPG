import styles from '../styles/YTVideo.module.scss'

const urlRegex = /^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i

function YTVideo(props = { url }) {
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
  if (!query.hasOwnProperty('autoplay')) query.autoplay = '1'
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
        styles['youtube-container']
        // 'youtube-container' + (typeof props.className == 'string' ? ' ' + props.className : '')
      }>
      <iframe
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${videoURL}><img src=${
          props.hasOwnProperty('thumbnail') ? props.thumbnail : url
        } alt='Youtube Video'><span>▶</span></a>`}
      />
    </div>
  )
}

export default YTVideo
