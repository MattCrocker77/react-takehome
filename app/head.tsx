const title = 'InstaGen by Gendo'
const url = 'https://localhost:3000'
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS'
const author = 'Author'
const twitter = '@gendoai'

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/icons/share.png'} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      <link rel='manifest' href='/manifest.json' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={twitter} />
    </>
  )
}
