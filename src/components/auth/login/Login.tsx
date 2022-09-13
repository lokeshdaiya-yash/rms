/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * @since March 2022
 * @author Ankit patidar
 * @desc Reusable Login Component
 *
 */

import './Login.scss';
import { useState, useEffect, ChangeEvent } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authClass } from '../services/auth.service';

import {
  PtgUiButton,
  PtgUiInput,
  PtgUiLoading,
  PtgUiAlert,
} from '../../../libs';

export interface PtgUiLoginProps {}

interface SetUSER {
  isLoading: boolean;
  isAlert: boolean;
  email: string;
  password: string;
  error: null;
  disable: boolean;
}

interface FormERR {
  email: boolean;
  password: boolean;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export function PtgUiLogin(props: PtgUiLoginProps) {
  const { t } = useTranslation();
  const [user, setUser] = useState<SetUSER>({
    isLoading: false,
    isAlert: false,
    email: '',
    password: '',
    error: null,
    disable: true,
  });

  const [formErr, setFormErr] = useState<FormERR>({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const setState: any = (field: string, value: SetUSER) => {
    setUser((preState: SetUSER) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };

  const setErrState: any = (field: string, value: FormERR) => {
    setFormErr((preState: FormERR) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };

  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password
      )
    );
  };

  //validate email and password
  const validate = (fieldName: string, value: any) => {
    let formErr = false;
    switch (fieldName) {
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'password':
        if (value === '') {
          formErr = true;
        }
        break;
      // eslint-disable-next-line no-empty
      default: {
      }
    }
    setErrState(fieldName, formErr);
  };

  //generic function for all input field
  const handleChange: any = (e: InputEvent) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser((preState: SetUSER) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    setState('error', null);
    setState('isLoading', true);
    authClass
      .login({
        email: user.email,
        password: user.password,
      })
      .then((response: any) => {
        setState('isLoading', false);
        navigate('/profile');
       
      })

      .catch((error: string) => {
        setState('isAlert', true);
      });
  };

  //validate on focus out or blur input
  const handleBlur: any = (e: InputEvent) => {
    const { name } = e.target;
    setFormErr((preState: FormERR) => {
      return {
        ...preState,
        [name]: true,
      };
    });
  };

  useEffect(() => {
    isDisabled();
  }, [user.email, user.password]);

  return (
    <React.Fragment>
      
      <div className="login-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="login-container">
          <div className="login-form-wrapper">
            <div className="form-group">
              {user.isAlert && <PtgUiAlert message={t('ERROR_MSG')} />}
            </div>
            <div className="form-group">
              <div className="login-logo text-center mb-3">
                <a href="https://www.yash.com" target="_blank">
                  <img
                    className=""
                    src="https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg"
                    alt={t('IMG_WebsiteLOGO')}
                  />
                </a>
              </div>
            </div>
            <form className="form-login" onSubmit={handleLogin}>
              <div className="login-form">
                <div className="form-group mb-4 required">
                  <label
                    htmlFor="inputEmail"
                    aria-labelledby="inputEmail"
                    tabIndex={0}
                  >
                    {/* {t('LABEL_EMAIL')} */} Email
                  </label>
                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-user-icon"></i>
                    </div>
                    <PtgUiInput
                      type="email"
                      id="inputEmail"
                      value={user.email}
                      onChange={handleChange}
                      className={`"w-100 form-control bg_0 ${
                        formErr.email === true ? 'border-danger' : ''
                      }`}
                      name="email"
                      placeholder={'Email'}
                      onBlur={user.email === '' ? handleBlur : null}
                    />
                  </div>
                </div>
                <div className="form-group mb-4 required">
                  <label
                    htmlFor="inputPassword"
                    aria-labelledby="inputPassword"
                    tabIndex={1}
                  >
                    Password
                    
                  </label>

                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-password-icon"></i>
                    </div>
                    <PtgUiInput
                      type="password"
                      id="inputPassword"
                      onChange={handleChange}
                      value={user.password}
                      className={`"w-100 form-control bg_0 ${
                        formErr.password === true ? 'border-danger' : ''
                      }`}
                      name="password"
                      placeholder={'Password'}
                      onBlur={user.password === '' ? handleBlur : null}
                    />
                  </div>
                </div>
              </div>
              <PtgUiButton
                className="w-100"
                tabIndex={0}
                disabled={user.disable}
                data-testid="login"
                // accessKey="s"
                type="submit"
              >
                Login
              </PtgUiButton>
            </form>
          </div>
        </div>
      </div>

      {user.isLoading && <PtgUiLoading />}
    </React.Fragment>
  );
}

export default PtgUiLogin;
