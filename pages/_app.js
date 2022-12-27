import NavbarP from '../components/NavbarP'


export default function App({ Component, pageProps }) {
  return <>
            <NavbarP />
            <Component {...pageProps} />
          </>
}
