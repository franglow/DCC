const api = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0"

let token = 'yXrHuTscEfFz'

const headers = {
  'Accept': 'application/json',
  'token': token
}

export const getAll = () =>
  fetch(`${api}/?token=${token}`)
    .then(res => res.json())
    .then(data => data)

export const sendMessage = (data) =>
  fetch(`${api}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => data)
