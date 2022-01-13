import { Navigation } from 'components/blocks/navigation/navigation';
import { Footer } from 'components/blocks/footer/footer';
const Page = ({ children }) => {

  return ( 
    <div className="page">		
      <Navigation />
      { children }
      <Footer />
    </div>
  )
};

export {
  Page
};