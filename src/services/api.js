import { API_BASE_URL } from "react-native-dotenv";
import checkFetchStatus from "./check_fetch_status";

export default class Api {
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
    }).then(checkFetchStatus)
      .then(jwtJson => jwtJson.jwt);
  }

  static signUp(email, password) {
    return fetch(`${API_BASE_URL}/api/v1/accounts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        account: {
          email,
          password
        }
      })
    }).then(checkFetchStatus)
      .then(jwtJson => jwtJson.jwt);
  }

  static createUser(firstName, lastName, jwt) {
    return fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        user: {
          first_name: firstName,
          last_name: lastName
        }
      })
    }).then(checkFetchStatus)
      .then(userJson => userJson.user);
  }

  static createProject(name, importance, urgency, dueDate, jwt) {
    return fetch(`${API_BASE_URL}/api/v1/projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        project: {
          name,
          importance,
          urgency,
          due_date: dueDate
        }
      })
    }).then(checkFetchStatus)
      .then(projectJson => projectJson.project);
  }

  static createTask(name, importance, urgency, dueDate, easyStart, projectId, jwt) {
    let url;
    if (projectId) {
      url = `${API_BASE_URL}/api/v1/project/${projectId}/tasks`;
    } else {
      url = `${API_BASE_URL}/api/v1/tasks`;
    }
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({
        task: {
          name,
          importance,
          urgency,
          due_date: dueDate,
          easy_start: easyStart
        }
      })
    }).then(checkFetchStatus)
      .then(taskJson => taskJson.task);
  }

  static getUser(jwt) {
    return fetch(`${API_BASE_URL}/api/v1/user`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    }).then(checkFetchStatus)
      .then(userJson => userJson.user);
  }

  static getProjects(jwt) {
    return fetch(`${API_BASE_URL}/api/v1/projects`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    }).then(checkFetchStatus)
      .then(projectsJson => projectsJson.projects);
  }

  static getTasks(jwt) {
    return fetch(`${API_BASE_URL}/api/v1/tasks`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    }).then(checkFetchStatus)
      .then(tasksJson => tasksJson.tasks);
  }
}