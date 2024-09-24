const adminCredentials = {
    username: 'admin',
    password: '6werty',
  };
  
  module.exports = (req, res) => {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      if (username === adminCredentials.username && password === adminCredentials.password) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(401).json({ success: false, message: 'Неправильный логин или пароль' });
      }
    } else {
      return res.status(405).json({ message: 'Метод не поддерживается' });
    }
  };
  