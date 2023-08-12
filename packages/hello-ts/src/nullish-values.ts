const userInfo = {
  name: 'Alapan Chatterjee',
  email: 'chatterjee.alapan07@gmail.com',
  secondaryEmail: null,
};

const formInProgress = {
  createdAt: new Date(),
  data: new FormData(),
  completedAt: undefined,
};

function submitForm() {
  formInProgress.completedAt = new Date();
}
