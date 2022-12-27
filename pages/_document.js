import { Html, Head, Main, NextScript } from 'next/document'
import { Image, Text } from "@nextui-org/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        
      </Head>
      <body>
        <Main />
        <NextScript />
        <Image src='https://telegra.ph/file/7999d3f672818f28b7670.jpg' width={320} />
        <Text> Donation BTC: bc1qpq4gm3vhwzqgd67nah59a3t5u3dkdhrnxy6nh9 </Text>
      </body>
    </Html>
  )
}
