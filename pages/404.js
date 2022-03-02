import { Page } from 'components/layouts/page/page';
import { Error } from 'components/sections/error/error';
import { Button } from 'components/partials/button/button';

const PageNotFound = () => {

  return (
    <Page data={{ title: '' }}>
			<Error data={{ 
				title: "Diese Seite konnte nicht gefunden werden...",
				text: "Es scheint, dass diese Seite nicht mehr zu existieren scheint. Bitte kehren Sie zurück zur Website",
				button: {
					text: 'zurück zur Website',
					href: '/'		
				}			
			}} />
			
    </Page>
  )
}

export default PageNotFound;