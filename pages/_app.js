import NavbarP from '../components/NavbarP'
imp

export default function App({ Component, pageProps }) {
  return <>
            <NavbarP />
            <Component {...pageProps} />

          </>
}
