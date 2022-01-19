import { Navigation } from 'components/blocks/navigation/navigation';
import { Footer } from 'components/blocks/footer/footer';
import { Head } from 'components/partials/head/head';

const Page = ({ children }) => {

  return ( 
    <div className={'page'}>		
      <Head />
      <Navigation />
      { children }
      <Footer />
    </div>
  )
};

export {
  Page
};