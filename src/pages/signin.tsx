import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '../components/themed-text'

const signin = () => {
  return (
    <View style={styles.page}>
      <Text style={{paddingBottom:50,}}>Logo</Text>
      <Text>Good Morning</Text>
      <Text>User Name</Text>
      <Text>Face ID Button</Text>
        <Text>PassCode
        {`  |  `}
      Sign Up</Text>
      <ThemedText style={styles.itemRow}>
        <Link href="/pages/signup">
          <Text>Contact</Text>
        </Link>{`  `}
        <Link href="/pages/signup">
          <Text>Help</Text>
        </Link>
      </ThemedText>
      </View>
  )
}

export default signin

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    gap: 20,
  },
  itemRow: {
    flexDirection: 'row',
    gap: 50,
  },
})