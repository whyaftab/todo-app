import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-elements';
import {Container, Input, Header, SuccessModal} from '../components';
import {NoteContext} from '../context/NoteContext';

const EditNoteScreen = ({route, navigation}) => {
  const {control, handleSubmit, errors} = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const {updateNote} = useContext(NoteContext);

  const onSubmit = (data) => {
    updateNote({...data, key: route.params.key}).then(() => {
      setSuccessMessage('Note successfully updated!');
    });
  };

  const onPressSuccess = () => {
    setSuccessMessage('');
    navigation.goBack();
  };

  return (
    <Container>
      <Header title="Edit Note" />

      <Container isScrollView>
        <View>
          <Input
            control={control}
            name="title"
            rules={{required: true, maxLength: 100}}
            errors={errors}
            placeholder="Title"
            multiline
            defaultValue={route.params.title}
          />
          <Input
            control={control}
            name="description"
            rules={{required: true}}
            errors={errors}
            placeholder="Description"
            numberOfLines={6}
            defaultValue={route.params.description}
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

export default EditNoteScreen;
