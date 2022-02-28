import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppBody, AppContainer } from './App.styles';

import { auth } from './firebase/firebase';

import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice'

import EmailList from './components/email-list/EmailList';
import Header from './components/header/Header';
import MailDetails from './components/mail-details/MailDetails';
import SendMail from './components/send-mail/SendMail';
import Sidebar from './components/side-bar/Sidebar';
import Login from './components/login/Login';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch( 
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        )
      }
    })
  }, [])


  return (
    <BrowserRouter>
      {!user
        ? (<Login />)
        : (
          <AppContainer>
            <Header />
            <AppBody>
              <Sidebar />

              <Routes>
                <Route path="/" element={<EmailList />} />
                <Route path="/mail" element={<MailDetails />} />
              </Routes>
            </AppBody>
            {sendMessageIsOpen && <SendMail />}
          </AppContainer>
        )
      }
    </BrowserRouter >

  );
}

export default App;

