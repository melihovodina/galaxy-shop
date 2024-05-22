import axios from 'axios';

export async function signIn(email, password) {
    let result;
    try {
        result = await axios({
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
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function signUp(email, password) {
    let result;
    try {
        result = await axios({
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
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUsers() {
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
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
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Orders/GetAll',
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getUsersOrders(token) {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Orders/GetByUserId',
            headers: {
                'Authorization': token
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createOrder(orderId, size, token) {
    let result;
    try {
        result = await axios({
            method: 'post',
            url: '/api/Orders/CreateOrder',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: {
                id: orderId,
                size: size
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    return result;
}

export async function updateOrder(orderId, status) {
    let result;
    try {
        result = await axios({
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