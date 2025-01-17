import 'intl';
import './global';
import 'intl/locale-data/jsonp/en-US';
import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import BottomRoutes from './src/routes/bottomTabs.routes';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { ModalProvider } from './src/context/modal.context';

import { WalletProvider } from '@nft/context/wallet';
import { AuthProvider } from '@nft/context/auth';

export default function App() {
  const [montserratFontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!montserratFontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ModalProvider>
        <AuthProvider>
          <WalletProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
            <BottomRoutes />
          </WalletProvider>
        </AuthProvider>
      </ModalProvider>
    </NavigationContainer>
  );
}
