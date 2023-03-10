const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  _subscribers: {
    updater: () => {
      console.log("Default updater")
    },
  },
  _state: {
    common: {
      friends: [
        {id: "1", firstName: "Alex", imgUrl: "https://i.imgur.com/SBVRczc.png"},
        {id: "2", firstName: "Ben", imgUrl: "https://i.imgur.com/SBVRczc.png"},
        {id: "3", firstName: "Jack", imgUrl: "https://i.imgur.com/SBVRczc.png"},
      ]
    },
    dialogsPage: {
      dialogs: [
        {id: "1", firstName: "John", lastName: "Brown", imgSrc: "https://i.imgur.com/Sfese1n.png"},
        {id: "2", firstName: "Steven", lastName: "Blaese", imgSrc: "https://i.imgur.com/SBVRczc.png"},
        {id: "3", firstName: "Joe", lastName: "Davis", imgSrc: "https://i.imgur.com/ZqCeVBj.png"},
        {id: "4", firstName: "Hanna", lastName: "Wilson", imgSrc: "https://i.imgur.com/J2cRMYt.png"},
        {id: "5", firstName: "Jenkins", lastName: "Moore", imgSrc: "https://i.imgur.com/djnn3nh.png"},
        {id: "6", firstName: "John", lastName: "Taylor", imgSrc: "https://i.imgur.com/Sfese1n.png"},
        {id: "7", firstName: "Steven", lastName: "Miller", imgSrc: "https://i.imgur.com/SBVRczc.png"},
        {id: "8", firstName: "Joe", lastName: "Smith", imgSrc: "https://i.imgur.com/ZqCeVBj.png"},
        {id: "9", firstName: "Hanna", lastName: "Williams", imgSrc: "https://i.imgur.com/J2cRMYt.png"},
        {id: "10", firstName: "Jenkins", lastName: "Blaese", imgSrc: "https://i.imgur.com/djnn3nh.png"}
      ],
      messages: [
        {id: "1", messageText: "Message Item 1", profilePicture: "https://i.imgur.com/SBVRczc.png"},
        {id: "2", messageText: "Message Item 2", profilePicture: "https://i.imgur.com/SBVRczc.png"},
        {
          id: "3",
          messageText: "Message Item 3",
          profilePicture: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        },
        {id: "4", messageText: "Message Item 4", profilePicture: "https://i.imgur.com/SBVRczc.png"},
        {
          id: "5",
          messageText: "Message Item 5",
          profilePicture: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        {id: 1, message: "Post 1", likesCount: 2364},
        {id: 2, message: "Post 2", likesCount: 4232},
        {id: 3, message: "Post 3", likesCount: 3412},
        {id: 4, message: "Post 4", likesCount: 6752}
      ],
      newPostText: "",
    },
  },

  getState() {
    return this._state
  },
  dispatch(action) { // e.g. action = { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      this._addNewPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._changeNewPostText(action.newPostText);
    } else if (action.type === ADD_MESSAGE) {
      this._addNewMessage();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._changeNewMessageText(action.newMessageText);
    }
  },
  subscribeUpdater(observer) {
    this._subscribers.updater = observer;
  },

  _addNewPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 3424,
    }

    this._state.profilePage.newPostText = "";

    this._state.profilePage.posts.push(newPost);
    this._subscribers.updater();
  },
  _addNewMessage() {
    const newMessage = {
      id: "12",
      messageText: this._state.dialogsPage.newMessageText,
      profilePicture: "https://i.imgur.com/SBVRczc.png"
    }

    this._state.dialogsPage.newMessageText = "";

    this._state.dialogsPage.messages.push(newMessage);
    this._subscribers.updater();
  },
  _changeNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._subscribers.updater();
  },

  _changeNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._subscribers.updater();
  },
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newText});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newText
});

export default store;
