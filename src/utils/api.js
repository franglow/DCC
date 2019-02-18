
const api = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0"

// Generate an AWESOME UNIQUE TOKEN
let token = 'yXrHuTscEfFz'
// if (!token)
  // token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'token': token
}

export const getAll = () =>
  fetch(`${api}/?token=${token}`)
    .then(res => res.json())
    .then(data => data)

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data)


export const sendMessage = (data) =>
  fetch(`${api}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({message:"Hello world",author:"Tom"})
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
