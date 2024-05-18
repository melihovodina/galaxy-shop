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
    } catch (error) {
        console.log(error);
    }
    return result;
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
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getCatalog() {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Catalog/GetAll',
            headers: {
            
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getFrom(page, limit) {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Catalog/GetRangeFromAll',
            headers: {

            },
            data: {
                Page: page,
                Limit: limit
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getByCategory(id, page, limit) {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Catalog/GetByCategory',
            headers: {

            },
            data: {
                id: id,
                'Range.Page': page,
                'Range.Limit':limit
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getByType(id, page, limit) {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Catalog/GetByType',
            headers: {

            },
            data: {
                id: id,
                'Range.Page': page,
                'Range.Limit':limit
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getCategories() {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/CTP/GetCategories',
            headers: {
            
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getTypes() {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/CTP/GetTypes',
            headers: {
            
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getTypesById(id) {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/CTP/GetTypesByCId',
            headers: {
            
            },
            data: {
                id: id
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getOrders() {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Orders/GetAll',
            headers: {
            
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function getUsersOrders() {
    let result;
    try {
        result = await axios({
            method: 'get',
            url: '/api/Orders/GetByUserId',
            headers: {
            
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function createOrder(order) {
    let result;
    try {
        result = await axios({
            method: 'post',
            url: '/api/Orders/CreateOrder',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                //i really don't know wtf he want here
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function updateOrder(id, status) {
    let result;
    try {
        result = await axios({
            method: 'post',
            url: '/api/Orders/UpdateOrder',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: id,
                status: status
            }
        });
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function checkKey() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function createCategory() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function updateCategory() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function deleteCategory() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function createParameter() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function updateParameter() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function deleteParameter() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function createType() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function updateType() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function deleteType() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function createProduct() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function updateProduct() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}

export async function deleteProduct() {
    let result;
    try {
        
    } catch (error) {
        console.log(error);
    }
    return result;
}