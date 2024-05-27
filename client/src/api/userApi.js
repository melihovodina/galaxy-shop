import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:5299';

export async function signIn(email, password) {
    try {
        const result = await axios({
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
        Cookies.set('token', (result.data.split(' '))[1], {expires: 1})
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function signUp(email, password) {
    try {
        const result = await axios({
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
        Cookies.set('token', (result.data.split(' '))[1], {expires: 1})
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUsers() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Accounts/GetUsers'
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCatalog() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Catalog/GetAll'
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getFrom(page, limit) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Catalog/GetRangeFromAll',
            params: {
                Page: page,
                Limit: limit
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getByCategory(categoryId, page = null, limit = null) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Catalog/GetByCategory',
            params: {
                id: categoryId,
                'Range.Page': page,
                'Range.Limit':limit
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getByType(typeId, page = null, limit = null) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Catalog/GetByType',
            params: {
                id: typeId,
                'Range.Page': page,
                'Range.Limit': limit
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getById(id) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Catalog/GetById',
            params: {
                id: id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCategories() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetCategories'
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypes() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetTypes'
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypesByCategoryId(categoryId) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetTypesByCId',
            params: {
                id: categoryId
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getParameters() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetParameters'
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getTypeById(id) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetTypeById',
            params: {
                id: id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getParameterById(id) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetParameterById',
            params: {
                id: id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getCategoryById(id) {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/CTP/GetCategoryById',
            params: {
                id: id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getOrders() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Orders/GetAll',
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUsersOrders() {
    try {
        const result = await axios({
            method: 'get',
            url: '/api/Orders/GetByUserId',
            headers: {
                'Authorization': Cookies.get('token')
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createOrder(orderId, size) {
    try {
        const result = await axios({
            method: 'post',
            url: '/api/Orders/CreateOrder',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookies.get('token')
            },
            data: {
                id: orderId,
                size: size
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateOrder(orderId, status) {
    try {
        const result = await axios({
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
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}