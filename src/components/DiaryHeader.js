import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const avatar = require('../../assets/avatar/user.png');

export default function DiaryHeader({ title, username }) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Halo, {username}</Text>
      </View>
      <Image source={avatar} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 13, color: '#6b7280' },
  avatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 2, borderColor: '#6366f1' },
});
