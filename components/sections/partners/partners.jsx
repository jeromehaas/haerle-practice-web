import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';
import { Link } from 'components/partials/link/link';

const Partners = ({ data }) => {

  return (
    <Section data={{ className: 'partners', anchorId: data.anchorId }}>
      <div className="partners__text-wrapper">
        <Heading data={{ className: 'partners__title' }}>Partner</Heading>
        <Paragraph data={{ className: 'partners__text'}}>Mein Netzwerk deckt vielseitige Spezialisierungen ab, auf die ich jederzeit zurückgreifen kann. Davon profitieren auch Sie!</Paragraph>
      </div>

      <div className="partners__item item item--first">
        <Image data={{ className: 'item__logo', src: '/logos/logo-zahnmedizin-luzern.png', height: '300'}} />
        <Paragraph data={{  }}>Dr. med. dent. Jürg Eppenberger</Paragraph>
        <Paragraph data={{  }}>Haldenstrasse 11</Paragraph>
        <Paragraph data={{  }}>6006 Luzern</Paragraph>
        <Paragraph data={{  }}></Paragraph>
        <br />
        <Paragraph data={{  }}>041 417 17 07</Paragraph>
        <Paragraph data={{  }}>info@zahnmedizinluzern.ch</Paragraph>
        <br />
        <Link data={{ icon: 'external-link'}}>zahnmedizinluzern.ch</Link>
      </div>

      <div className="partners__item item item--second">
        <Image data={{ className: 'item__logo ', src: '/logos/logo-zentrum-kopf-hals-chirurgie.png', height: '300'}} />
        <Paragraph data={{  }}>Dr. med. dent. Jürg Eppenberger</Paragraph>
        <Paragraph data={{  }}>Haldenstrasse 11</Paragraph>
        <Paragraph data={{  }}>6006 Luzern</Paragraph>
        <br />
        <Paragraph data={{  }}></Paragraph>
        <Paragraph data={{  }}>041 417 17 07</Paragraph>
        <br />
        <Paragraph data={{  }}>info@zahnmedizinluzern.ch</Paragraph>
        <Link data={{ icon: 'external-link'}}>kopf-hals-chierurgie.ch</Link>
      </div>
    </Section>
  )

}

export {
  Partners
};