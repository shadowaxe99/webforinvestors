```javascript
import axios from 'axios';

class AuthenticationService {
  static async login(email, password) {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async register(name, email, password) {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async logout() {
    try {
      const response = await axios.post('/api/auth/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserProfile() {
    try {
      const response = await axios.get('/api/auth/user');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async updateUserProfile(user) {
    try {
      const response = await axios.put('/api/auth/user', user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthenticationService;
```