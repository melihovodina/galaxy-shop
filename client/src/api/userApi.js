import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:5299';

export async function signIn(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/Accounts/SignIn',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: email,
                password: password
            }
        });
        Cookies.set('token', response.data, {expires: 1})
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function signUp(email, password) {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/Accounts/SignUp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: email,
                password: password
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function confirmation(code) {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/Accounts/Confirmation',
        headers: {
          'Content-Type': 'application/json'
        },
        data: code
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

export async function getUsers() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Accounts/GetUsers',
            headers: {
                'Authorization': Cookies.get('token')
            }
        })
        return response;
    } catch (error) {
        console.log(Cookies.get('token'))
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUserById() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Accounts/GetUserById',
            headers: {
                'Authorization': Cookies.get('token')
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCatalog() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Catalog/GetAll'
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getFrom(page, limit) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Catalog/GetRangeFromAll',
            params: {
                Page: page,
                Limit: limit
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getByCategory(categoryId, page = null, limit = null) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Catalog/GetByCategory',
            params: {
                id: categoryId,
                'Range.Page': page,
                'Range.Limit':limit
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getByType(typeId, page = null, limit = null) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Catalog/GetByType',
            params: {
                id: typeId,
                'Range.Page': page,
                'Range.Limit': limit
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getById(id) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Catalog/GetById',
            params: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCategories() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetCategories'
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypes() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetTypes'
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypesByCategoryId(categoryId) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetTypesByCId',
            params: {
                id: categoryId
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getParameters() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetParameters'
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypeById(id) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetTypeById',
            params: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getParameterById(id) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetParameterById',
            params: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCategoryById(id) {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/CTP/GetCategoryById',
            params: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getOrders() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Orders/GetAll',
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUsersOrders() {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/Orders/GetByUserId',
            headers: {
                'Authorization': Cookies.get('token')
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createOrder(orders) {
    try {
      const response = await axios({
        method: 'post',
        url: '/api/Orders/CreateOrder',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookies.get('token')
        },
        data: orders
      });
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export async function updateOrder(orderId, status) {
    try {
        const response = await axios({
            method: 'post',
            url: '/api/Orders/UpdateOrder',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: orderId,
                status: status
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}