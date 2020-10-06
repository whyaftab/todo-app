/* eslint-disable react/no-unescaped-entities */
import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {NoteContext} from '../context/NoteContext';
import {Header} from '../components/Header';
import {Container, Item} from '../components';
import {ConfirmModal} from '../components/ConfirmModal';

const ListScreen = ({navigation}) => {
  const {
    state: {list},
    loadNotes,
    removeNote,
  } = useContext(NoteContext);

  const [removeNoteKey, setRemoveNoteKey] = useState('');

  useEffect(() => {
    loadNotes();
  }, []);

  const onPressItem = (item) => {
    navigation.navigate('EditNote', item);
  };

  const onConfirmRemovePress = () => {
    removeNote(removeNoteKey);
    setRemoveNoteKey('');
  };

  return (
    <Container>
      <Header title="Todo List" noBack />
      <FlatList
        data={list}
        style={styles.listStyle}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item, index}) => (
          <Item
            number={index + 1}
            title={item.title}
            onPress={() => onPressItem(item)}
            onRemove={() => setRemoveNoteKey(item.key)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyTextContainerStyle}>
            <Text style={styles.emptyTextStyle}>
              You don't have any notes add one now by pressing add icon.
            </Text>
          </View>
        )}
      />
      <Icon
        name="add"
        containerStyle={styles.iconStyle}
        onPress={() => navigation.navigate('AddNote')}
        raised
        reverse
      />
      <ConfirmModal
        visible={!!removeNoteKey}
        onCancelPress={() => setRemoveNoteKey('')}
        onConfirmPress={onConfirmRemovePress}
        text="Are you sure. This action will not be undone?"
      />
    </Container>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  emptyTextContainerStyle: {
    flex: 1,
    height: Dimensions.get('window').height - 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  emptyTextStyle: {
    textAlign: 'center',
  },
});
