import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  CaptureEventType,
  CaptureProtection,
  useCaptureProtection,
} from 'react-native-capture-protection';
export default function Main() {
  const {protectionStatus, status} = useCaptureProtection();
  const navigation = useNavigation<any>();

  React.useEffect(() => {
    console.log('Main Prevent Status is', status);
  }, [status]);
  React.useEffect(() => {
    console.log('Main protectionStatus is', protectionStatus);
  }, [protectionStatus]);

  return (
    <View style={styles.container}>
      <Text style={{color: protectionStatus?.record ? 'blue' : 'black'}}>
        {'Record Prevent : ' + protectionStatus?.record}
      </Text>
      <Text style={{color: protectionStatus?.screenshot ? 'blue' : 'black'}}>
        {'Screenshot Prevent : ' + protectionStatus?.screenshot}
      </Text>
      <Text style={{color: 'black'}}>
        {'Status : ' + (status ? CaptureEventType?.[status] : undefined)}
      </Text>
      <Button
        title="set Record Protect Screen by Text"
        onPress={() => {
          CaptureProtection.prevent?.({
            record: {
              text: 'This is Text Message!',
            },
          });
        }}
      />
      <Button
        title="go to Record Protect Screen"
        onPress={() => {
          navigation.navigate('SecretContent');
        }}
      />
      <Button
        title="allow Record"
        onPress={() => {
          CaptureProtection.allow({record: true});
        }}
      />
      <Button
        title="prevent Record"
        onPress={() => {
          CaptureProtection.prevent({record: true});
        }}
      />
      <Button
        title="allow Screenshot"
        onPress={() => {
          CaptureProtection.allow({screenshot: true});
        }}
      />
      <Button
        title="prevent Screenshot"
        onPress={() => {
          CaptureProtection.prevent({screenshot: true});
        }}
      />
      <Button
        title="allow background"
        onPress={() => {
          CaptureProtection.allow({appSwitcher: true});
        }}
      />
      <Button
        title="prevent background"
        onPress={() => {
          CaptureProtection.prevent({appSwitcher: true});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
