import { useState } from 'react'
import { Section } from 'components/layouts/section/section';
import { TextInput } from 'components/partials/text-input/text-input';
import { Textarea } from 'components/partials/textarea/textarea';
import { SubmitButton } from 'components/partials/submit-button/submit-button';
import { Icon } from 'components/partials/icon/icon';
import axios from 'axios';

const ContactForm = ({ data }) => {

  const [formState, setFormState] = useState({
    firstname: { value: '', hasError: false },
    lastname: { value: '', hasError: false },
    phone: { value: '', hasError: false },
    email: { value: '', hasError: false },
    subject: { value: '', hasError: false },
    file: { value: '', hasError: false },
    message: { value: '', hasError: false },
  });

  const [statusBarState, setStatusBarState] = useState({
    visible: false,
    icon: 'error',
    message: 'Hello'
  });

  const updateInputs = ( event ) => {
    let value;
    const field = event.target.name;
    switch (event.target.type) {
    case 'text': value = event.target.value; break;
    case 'textarea': value = event.target.value; break;
    case 'file': value = event.target.files[0]; break;
    }
    setFormState((prevState) => ({
      ...prevState, 
      [field]: {
        value: value,
        hasError: prevState[field].hasError
      }
    }));
  }

  const setError = ( field ) => {
    setFormState((prevState) => ({
      ...prevState, 
      [field]: {
        value: prevState[field].value,
        hasError: true
      }
    })); 
  }

  const clearError = ( field ) => {
    setFormState((prevState) => ({
      ...prevState, 
      [field]: {
        value: prevState[field].value,
        hasError: false
      }
    })); 
  }

  const clearInputs = () => {
    setFormState(() => ({
      firstname: { value: '', hasError: false },
      lastname: { value: '', hasError: false },
      phone: { value: '', hasError: false },
      email: { value: '', hasError: false },
      subject: { value: '', hasError: false },
      file: { value: '', hasError: false },
      message: { value: '', hasError: false },
    }));
  }

  const getErrors = () => {
    const fields = ['firstname', 'lastname', 'email', 'subject', 'message'];
    const errors = [];
    fields.map((field) => {
      if (!formState[field].value) {
        setError(field)
        errors.push(field);
      } else {
        clearError(field)
      }
    })
    return errors;
  }

  const submit = async () => {
    try {
      await axios({
        method: 'post',
        url: '/api/contact-form/message',
        data: {
          firstname: formState.firstname.value,
          lastname: formState.lastname.value,
          phone: formState.phone.value,
          email: formState.email.value,
          subject: formState.subject.value,
          message: formState.message.value,
        }
      });
      await axios({
        method: 'post',
        url: '/api/contact-form/confirmation',
        data: {
          firstname: formState.firstname.value,
          lastname: formState.lastname.value,
					email: formState.email.value,
        }
      });
      setStatusBarState({
        visible: true,
        icon: 'success',
        message: 'Das Formular wurde erfolgreich übermittelt!'
      });
    } catch (error) {
      console.log('Error: inputs are not valid');
      setStatusBarState({
        visible: true,
        icon: 'failure',
        message: 'Das Formular konnte nicht übermittelt werden!'
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = getErrors();
    if (errors.length) {
      console.log('Error: inputs are not valid')
    } else {
      console.log('Success: inputs are valid');
      submit();
      clearInputs();
    }
  }

  return (
    <Section data={{ className: 'contact-form',  anchorId: data.anchorId }}>

      <form className='contact-form__form' onSubmit={ (event) => handleSubmit(event) }>

        <TextInput data={{
          className: 'contact-form__input',
          name: 'firstname',
          label: 'Vorname',
          value: formState.firstname.value,
          placeholder: 'Ihr Vorname',
          errorText: 'Fügen Sie Ihren Vornamen ein.',
          isRequired: true,
          hasError: formState.firstname.hasError,
          onChange: (event) => updateInputs(event)
        }} />
   
        <TextInput data={{
          className: 'contact-form__input',
          name: 'lastname',
          label: 'Nachname',
          value: formState.lastname.value,
          placeholder: 'Ihr Nachname',
          errorText: 'Fügen Sie Ihren Nachnamen ein.',
          isRequired: true,
          hasError: formState.lastname.hasError,
          onChange: (event) => updateInputs(event)
        }} />

        <TextInput data={{
          className: 'contact-form__input',
          name: 'phone',
          label: 'Telefonnummer',
          value: formState.phone.value,
          placeholder: 'Ihre Telefonnummer',
          isRequired: false,
          hasError: formState.phone.hasError,
          onChange: (event) => updateInputs(event)
        }} />
      
        <TextInput data={{
          className: 'contact-form__input',
          name: 'email',
          label: 'E-Mail',
          value: formState.email.value,
          placeholder: 'Ihre-Email-Adresse',
          errorText: 'Fügen Sie Ihre E-Mail-Adresse ein.',
          isRequired: true,
          hasError: formState.email.hasError,
          onChange: (event) => updateInputs(event)
        }} />

        <TextInput data={{
          className: 'contact-form__input',
          name: 'subject',
          label: 'Betreff',
          value: formState.subject.value,
          placeholder: 'Betreff',
          isRequired: true,
          hasError: formState.subject.hasError,
          errorText: 'Fügen Sie den Betreff ein.',
          onChange: (event) => updateInputs(event)
        }} />

        <Textarea data={{
          className: 'contact-form__input',
          name: 'message',
          label: 'Nachricht',
          value: formState.message.value,
          placeholder: 'Schreiben Sie mir...',
          isRequired: true,
          hasError: formState.message.hasError,
          errorText: 'Fügen Sie Ihre Nachricht ein.',
          onChange: (event) => updateInputs(event)
        }} />

        <SubmitButton data={{
          text: 'Senden',
          className: 'contact-form__submit',
        }} />

        <div className={`contact-form__status-bar status-bar ${ statusBarState.visible ? 'status-bar--visible' : '' } `}>
          <Icon data={{ icon: statusBarState.icon, className: 'status-bar__icon' }} />
          <p className="status-bar__text">{ statusBarState.message }</p>
        </div>

      </form>

    </Section>
  )
}

export {
  ContactForm
};