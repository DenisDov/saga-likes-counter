const initialState = {
  likes: 0
};

const AddLike = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return {
        ...state,
        likes: state.likes + 1
      };
    default:
      return state;
  }
};

export default AddLike;
