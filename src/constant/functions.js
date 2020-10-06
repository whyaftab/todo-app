/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// this funtion convert snapshot to flatlist usable array
export const snapshotToFlatArray = (snapshot) => {
  const array = [];

  snapshot.forEach((childSnapshot) => {
    const {key} = childSnapshot;
    const title = snapshot.child(`${key}/title`).val();
    const description = snapshot.child(`${key}/description`).val();
    array.push({key, title, description});
  });

  return array;
};
