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
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(imagePath.length !== null) {
        form.append('Image', imagePath);
    }
    if(typesId.length > 0) {
        typesId.forEach((id, index) => {
            form.append(`TypesId[${index}]`, id);
        });
    }
    console.log('Form fields:');
    for (let [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
    }
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateCategory`,
            headers: {
                'Content-Type': 'ultipart/form-data',
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
    if(id.length > 0) {
        form.append('Id', id);
    }
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(imagePath.length !== null) {
        form.append('Image', imagePath);
    }
    if(typesId.length > 0) {
        form.append('TypesId', JSON.stringify(typesId));
    }     
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
            url: `/api/Admin/${Cookies.get('secretKey')}/DeleteCategory`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: id
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createParameter(name, allowValues, typesId) {
    console.log('name: ' + name)
    console.log('allowValues: ' + allowValues)
    console.log('typesId: ' + typesId)
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
            url: `/api/Admin/${Cookies.get('secretKey')}/UpdateParameter`,
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
            url: `/api/Admin/${Cookies.get('secretKey')}/DeleteParameter`,
            headers: {
            'Content-Type': 'application/json',
            },
            data: id
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createType(parrentId, name, parameterId, categoryId) {
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
                categoryId: categoryId
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

export async function createProduct(name, description, price, discount, num, imagesPath, typeId, paramValues) {
    const form = new formData();
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(description.length > 0) {
        form.append('Description', description);
    }
    if(typeId.length > 0) {
        form.append('TypeId', typeId);
    }
    if(price !== null && price.length > 0) {
        form.append('Price', price);
    } 
    if(discount !== null && discount.length > 0) {
        form.append('Discount', discount);
    } 
    if(num !== null && num.length > 0) {
        form.append("Number", num);
    } 
    if(imagesPath.length > 0) {
        imagesPath.forEach((image, index) => {
            form.append(`Images[${index}]`, image);
        });
    } 
    if(paramValues.length > 0) {
        paramValues.forEach((param, index) => {
            form.append(`ParamValues[${index}]`, param);
        });
    }
    console.log('Form fields:');
for (let [key, value] of form.entries()) {
    console.log(`${key}: ${value}`);
}
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

export async function updateProduct(id, name, description, price, discount, num, imagesPath, typeId, paramValues) {
    const form = new formData();
    if(id.length > 0){
        form.append("id", id);
    }
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(description.length > 0) {
        form.append('Description', description);
    }
    if(typeId.length > 0) {
        form.append('TypeId', typeId);
    }
    if(price !== null && price.length > 0) {
        form.append('Price', price);
    } 
    if(discount !== null && discount.length > 0) {
        form.append('Discount', discount);
    } 
    if(num !== null && num.length > 0) {
        form.append("Number", num);
    } 
    if(imagesPath.length > 0) {
        imagesPath.forEach((image, index) => {
            form.append(`Images[${index}]`, image);
        });
    } 
    if(paramValues.length > 0) {
        paramValues.forEach((param, index) => {
            form.append(`ParamValues[${index}]`, param);
        });
    }   
    try {
        const result = await axios({
            method: 'patch',
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
            data: id
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}