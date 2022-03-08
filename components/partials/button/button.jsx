import Link from 'next/link';

const Button = ({ data, children }) => {

  return (
    <Link href={ data.href || '#' }>
      <a className={`button ${data.className}`} onClick={data.onClick}>
        {children}
      </a>
    </Link>
  )
};

export {
  Button
};