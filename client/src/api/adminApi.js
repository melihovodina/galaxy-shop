import axios from 'axios';
import formData from 'form-data';
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost:5299';

export async function checkKey(key) {
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${key}/CheckKey`,
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createCategory(name, imagePath, typesId) {
    const form = new formData();
    form.append('Name', name);
    form.append('Image', imagePath);
    form.append('TypesId', JSON.stringify(typesId));    
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateCategory`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: form
        });
      return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateCategory(id, name, imagePath, typesId) {
    const form = new formData();
    form.append('Id', id);
    form.append('Name', name);
    form.append('Image', imagePath);
    form.append('TypesId', JSON.stringify(typesId));    
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateCategory`,
            headers: {
            'Content-Type': 'multipart/form-data',
            },
            data: form
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function deleteCategory(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateCategory`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
                id:id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createParameter(name, allowValues, typesId) {
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateParameter`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: name,
                allowValues: allowValues,
                typesId: typesId
            }
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateParameter(id, name, allowValues, typesId) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateParameter`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: id,
                name: name,
                allowValues: allowValues,
                typesId: typesId
            }
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function deleteParameter(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateCategory`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
                id:id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createType(parrentId = null, name, parameterId, categoryId, allowValues, typesId) {
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateType`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                parrentId: parrentId,
                name: name,
                parameterId: parameterId,
                categoryId: categoryId,
                allowValues: allowValues,
                typesId: typesId
            }
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateType(id, parrentId = null, name, parameterId, categoryId, allowValues, typesId) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateType`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: id,
                parrentId: parrentId,
                name: name,
                parameterId: parameterId,
                categoryId: categoryId,
                allowValues: allowValues,
                typesId: typesId
            }
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function deleteType(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateCategory`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
                id:id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createProduct(name, description, price, discount, num, imagesPath, imagesLinks = null, typesId, paramValues) {
    const form = new formData();
    form.append('Name', name);
    form.append('Description', description);
    form.append('Price', price);
    form.append('Discount', discount);
    form.append("Number", num);
    form.append('Images', imagesPath);
    form.append("ImagesLinks", imagesLinks)
    form.append('TypesId', JSON.stringify(typesId));
    form.append('ParamValues', paramValues)    
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateProduct`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: form
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateProduct(id, name, description, price, discount, num, imagesPath, imagesLinks = null, typesId, paramValues) {
    const form = new formData();
    form.append('Id', id);
    form.append('Name', name);
    form.append('Description', description);
    form.append('Price', price);
    form.append('Discount', discount);
    form.append("Number", num);
    form.append('Images', imagesPath);
    form.append("ImagesLinks", imagesLinks)
    form.append('TypesId', JSON.stringify(typesId));
    form.append('ParamValues', paramValues)    
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateProduct`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: form
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function deleteProduct(id) {
    try {
        const result = await axios({
            method: 'delete',
            url: `/api/Admin/${Cookies.get('secretKey')}/DeleteProduct`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
                id:id
            }
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}