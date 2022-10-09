async function basiclogin (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
      auth: {
        username: email,
        password: password
      },
      body: { /*...*/ }
    })
  }