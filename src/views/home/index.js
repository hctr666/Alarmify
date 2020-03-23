import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Headline, List } from 'react-native-paper'
import BottomSheet from 'reanimated-bottom-sheet'

const screenHeight = Math.round(Dimensions.get('window').height)
const alarmListH = (screenHeight / 2) + 200

export default function Home() {

  const renderContent = () => {
    return (
      <List.Section style={{ backgroundColor: '#fff', height: alarmListH }}>
        <List.Subheader>Alarmas disponibles</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
        
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.fixedContent}>
        <View style={styles.clockView}>
          <Headline style={styles.headline}>00.00.00</Headline>
        </View>
      </View>
      <View style={styles.alarmsView}>
        <BottomSheet
          initialSnap={2}
          snapPoints={[alarmListH, (screenHeight / 2) + 100, screenHeight / 2]}
          renderContent={renderContent}
          style={styles.alarmsBSheet}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee'
  },
  headline: {
    fontSize: 50,
    lineHeight: 50,
  },
  fixedContent: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '50%',
    top: 0
  },
  clockView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  alarmsView: {
    height: '100%'
  }
})
