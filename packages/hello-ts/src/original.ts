import { UserInfoOutcome, SpecialDate } from './types';

export function maybeGetUserInfo(): UserInfoOutcome {
  if (Math.random() > 0.5) {
    return [
      'success',
      {
        name: 'Alapan Chatterjee',
        email: 'chatterjeea.alapan07@gmail.com',
      },
    ];
  } else {
    return [
      'error',
      new Error('User details is not available!'),
    ];
  }
}

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason() {
    return 'last day of the year!';
  },
};

console.log(maybeGetUserInfo());
console.log(newYearsEve.getReason());
