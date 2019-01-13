import { API_BASE_URL } from "react-native-dotenv";

class Api {
  static login(email, password) {
    return fetch(`${API_BASE_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        auth: {
          email,
          password
        }
      })
    }).then(resp => resp.json());
  }
}