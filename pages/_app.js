import 'styles/central.scss';
import PlausibleProvider from 'next-plausible';

const App = ({ Component, pageProps }) => {

  return (
		<PlausibleProvider domain="praxisdietschiberg.ch">
			<Component {...pageProps} />
		</PlausibleProvider>
	);

};

export default App
