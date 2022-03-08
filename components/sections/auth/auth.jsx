import { useEffect } from 'react';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Auth = () => {

  const router = useRouter();

  const isAuthentificated = () => {
    const cookie = cookies.get('authentificated');
    return cookie === process.env.NEXT_PUBLIC_COOKIE_KEY ? true : false;
  }

  useEffect(() => {
    if (isAuthentificated()) return true;
    if (process.env.NEXT_PUBLIC_MODE === 'development' ) router.push('/login');
  })

  return null;
}

export {
  Auth
};