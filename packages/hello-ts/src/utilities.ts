import { UserContactInfo } from './types';

function printContactInfo(info: UserContactInfo) {
  console.log(info);
  console.log(info.email);
}

const painter = {
  name: 'Robert ross',
  email: 'bross@pbs.org',
  favouriteColor: 'Titanium White',
};

printContactInfo(painter);
