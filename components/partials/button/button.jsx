import Link from 'next/link';

const Button = ({ data, children }) => {

  return (
    <Link className={`button ${data.className}`} onClick={data.onClick} href={ data.href || '#' }>
        {children}
    </Link>
  )
};

export {
  Button
};