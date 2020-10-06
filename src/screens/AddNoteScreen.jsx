import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';
import {Container, Input, Header, SuccessModal} from '../components';
import {NoteContext} from '../context/NoteContext';

const AddNoteScreen = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const {addNote} = useContext(NoteContext);

  const onSubmit = (data) => {
    addNote(data).then(() => {
      setSuccessMessage('Note successfully added!');
    });
  };

  const onPressSuccess = () => {
    setSuccessMessage('');
    navigation.goBack();
  };

  return (
    <Container>
      <Header title="Add Note" />

      <Container isScrollView>
        <View>
          <Input
            control={control}
            name="title"
            rules={{required: true, maxLength: 100}}
            errors={errors}
            placeholder="Title"
            multiline
          />
          <Input
            control={control}
            name="description"
            rules={{required: true}}
            errors={errors}
            placeholder="Description"
            numberOfLines={6}
          />
        </View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <SuccessModal
          visible={!!successMessage}
          onPress={onPressSuccess}
          text={successMessage}
        />
      </Container>
    </Container>
  );
};

export default AddNoteScreen;
