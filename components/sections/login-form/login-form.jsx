import { useState, useEffect } from 'react';
import { Icon } from 'components/partials/icon/icon';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';

const LoginForm = () => {
	
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
	
  useEffect(() => {
    if (userInput.length === 6) {
			
      if  (userInput === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
        cookies.set('authentificated', process.env.NEXT_PUBLIC_COOKIE_KEY, { expires: 7 });
        router.push('/');
      } else {
        setTimeout(() => {
          setUserInput('');
        }, 1000);
      }
    }
  }, [userInput, router])
  
  const updateUserInput = ( number ) => {
    setUserInput( userInput + number );
  }

  const back = () => {
    setUserInput( userInput.slice(0, -1));
  }

  const reset = () => {
    setUserInput((''));
  }


  return (
    <div className="login-form">

      <div className="login-form__wrapper">
        <div className="login-form__dial-wrapper">
          <button className="login-form__dial-button" onClick={ () => updateUserInput('1')}>1</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('2')}>2</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('3')}>3</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('4')}>4</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('5')}>5</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('6')}>6</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('7')}>7</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('8')}>8</button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('9')}>9</button>
          <button className="login-form__dial-button login-form__dial-button--reset" onClick={ reset }><Icon data={{ className: 'icon', icon: 'close' }}></Icon></button>
          <button className="login-form__dial-button" onClick={ () => updateUserInput('0')}>0</button>
          <button className="login-form__dial-button login-form__dial-button--back" onClick={ back }><Icon data={{ className: 'icon', icon: 'back' }}></Icon></button>
        </div>
        <div className="login-form__dots-wrapper">
          <div className={`login-form__dot ${ userInput.length >= 1 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ userInput.length >= 2 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ userInput.length >= 3 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ userInput.length >= 4 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ userInput.length >= 5 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ userInput.length >= 6 ? 'login-form__dot--active' : ''}`}></div>

        </div>
      </div>
    </div>
  )
}

export {
  LoginForm
};