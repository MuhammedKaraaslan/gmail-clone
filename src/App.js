import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { auth } from './firebase/firebase';

import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice'

import styled from 'styled-components';

import EmailList from './components/EmailList';
import Header from './components/Header';
import MailDetails from './components/MailDetails';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';
import Login from './components/Login';


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

const AppContainer = styled.div`
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
