/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CaptureEventType,
  useCaptureProtection,
} from 'react-native-capture-protection';

export default function SecretContent() {
  const {protectionStatus, status, prevent, allow} = useCaptureProtection();

  React.useEffect(() => {
    prevent();
    return () => {
      allow();
    };
  }, []);

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
      <Text>it is Screct View!!</Text>
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
