import React from 'react';
import { Button, View, Platform, Image, StyleSheet } from 'react-native';
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';

export default class ScreenCaptureExample extends React.Component {
  async componentDidMount() {

    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      ScreenCapture.addScreenshotListener(() => {
        alert('Obrigado por Tirar uma Print do IFAL 😊');
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button title="Ativar" onPress={this._activate} />
        <Image
          source={{
            uri:
              'https://img.7segundos.com.br/lp-h7rN_znrD-GXtuRqULrf81U8=/1110x650/smart/s3.7segundos.com.br/uploads/imagens/98884-foto_do_campus_portao_principal_jpg.jpeg',
          }}
          style={styles.logoifal}
          />
        <Button title="Desativar" onPress={this._deactivate} />
      </View>
    );
  }

  _activate = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
  };

  _deactivate = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
  };
}
const styles = StyleSheet.create({
   logoifal: {
    width: 300,
    height:300,
  },
});
