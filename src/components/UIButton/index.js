import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function UIButton(props) {
  return (
    <Button
      mode="contained"
      labelStyle={styles.buttonLabel}
      {...props}
    >{props.children}</Button>
  )
}

const styles = StyleSheet.create({
  buttonLabel: {
    fontSize: 16,
    padding: 4,
    width: 85,
    color: 'green'
  }
});