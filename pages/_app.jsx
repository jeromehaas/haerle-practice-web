// IMPORTS
import 'styles/central.scss';
import PlausibleProvider from 'next-plausible';

// COMPONENT
const App = ({ Component, pageProps }) => {

	// RENDER
	return (
		<PlausibleProvider domain="praxisdietschiberg.ch">
			<Component {...pageProps} />
		</PlausibleProvider>
	);

};

// EXPORTS
export default App;
