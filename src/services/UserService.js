```javascript
import axios from 'axios';
import { UserModel } from '../models/User';

class UserService {
  static async getUserProfile(userId) {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return new UserModel(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }

  static async updateUserProfile(userId, updatedProfile) {
    try {
      const response = await axios.put(`/api/users/${userId}`, updatedProfile);
      return new UserModel(response.data);
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }

  static async createUserProfile(userProfile) {
    try {
      const response = await axios.post('/api/users', userProfile);
      return new UserModel(response.data);
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  }

  static async deleteUserProfile(userId) {
    try {
      const response = await axios.delete(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user profile:', error);
      throw error;
    }
  }
}

export default UserService;
```