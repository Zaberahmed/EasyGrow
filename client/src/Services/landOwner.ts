export const addLand = async (land: Land) => {
  const response = await fetch('http://localhost:4000/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(land),
  });

  if (!response.ok) {
    throw new Error('Failed to get profile');
  }
};
