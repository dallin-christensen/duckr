export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name : 'Dallin Christensen',
        avatar : 'https://pbs.twimg.com/profile_images/378800000605536525/891a881bde93a1fc3e289528fb859b96_400x400.jpeg',
        uid : 'dallinc'
      })
    }, 2000)
  })
}

export function checkIfAuthed (store) {
  //Ignore firebase
  return store.getState().isAuthed
}

export function logout () {
  console.log('logged out!')
}
