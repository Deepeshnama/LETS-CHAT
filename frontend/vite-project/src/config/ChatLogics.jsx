export const isSameSenderMargin = (messages, m, i, userId) => {
  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

// Check if users[0] and users[1] are valid objects
export const getSender = (loggedUser, users) => {
  if (!users || users.length < 2) return ''; // Return empty string if users array is invalid
  const sender = users[0]?._id === loggedUser?._id ? users[1] : users[0];
  return sender ? sender.name : 'Unknown'; // Fallback to 'Unknown' if sender name is undefined
};

// Check if users[0] and users[1] are valid objects
export const getSenderFull = (loggedUser, users) => {
  if (!users || users.length < 2) return null; // Return null if users array is invalid
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
