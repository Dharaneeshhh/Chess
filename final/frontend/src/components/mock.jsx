const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateRandomUserData = () => {
  const names = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis', 'Michael Brown'];
  const emails = ['john@example.com', 'jane@example.com', 'robert@example.com', 'emily@example.com', 'michael@example.com'];
  const roles = ['Admin', 'User'];

  const randomName = getRandomElement(names);
  const randomEmail = getRandomElement(emails);
  const randomRole = getRandomElement(roles);

  return {
    name: randomName,
    email: randomEmail,
    role: randomRole,
  };
};

export const mockUsers = () => {
  // Generate an array of 20 random user data with roles limited to 'Admin' and 'User'
  const usersArray = Array.from({ length: 20 }, (_, index) => generateRandomUserData());

  return usersArray;
};
