import axios from 'axios';
import formData from 'form-data';
import fs from 'fs-extra';

export async function checkKey(secretKey) {
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${secretKey}/CheckKey`,
        });
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function createCategory(name, imagePath, typesId, secretKey) {
    const form = new formData();
    form.append('Name', name);
    form.append('Image', fs.createReadStream(imagePath));
    form.append('TypesId', JSON.stringify(typesId));    
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${secretKey}/CreateCategory`,
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

export async function updateCategory(id, name, imagePath, typesId, secretKey) {
    const form = new formData();
    form.append('Id', id);
    form.append('Name', name);
    form.append('Image', fs.createReadStream(imagePath));
    form.append('TypesId', JSON.stringify(typesId));    
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/UpdateCategory`,
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

export async function deleteCategory(id, secretKey) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/UpdateCategory`,
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

export async function createParameter(name, allowValues, typesId, secretKey) {
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${secretKey}/CreateParameter`,
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

export async function updateParameter(id, name, allowValues, typesId, secretKey) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/CreateParameter`,
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

export async function deleteParameter(id, secretKey) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/UpdateCategory`,
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

export async function createType(parrentId = null, name, parameterId, categoryId, secretKey) {
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${secretKey}/CreateType`,
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

export async function updateType(id, parrentId = null, name, parameterId, categoryId, secretKey) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/CreateType`,
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

export async function deleteType(id, secretKey) {
    try {
        const result = await axios({
            method: 'patch',
            url: `/api/Admin/${secretKey}/UpdateCategory`,
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

export async function createProduct(name, description, price, discount, num, imagesPath, imagesLinks = null, typesId, paramValues, secretKey) {
    const form = new formData();
    form.append('Name', name);
    form.append('Description', description);
    form.append('Price', price);
    form.append('Discount', discount);
    form.append("Number", num);
    form.append('Images', fs.createReadStream(imagesPath));
    form.append("ImagesLinks", imagesLinks)
    form.append('TypesId', JSON.stringify(typesId));
    form.append('ParamValues', paramValues)    
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${secretKey}/CreateProduct`,
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

export async function updateProduct(id, name, description, price, discount, num, imagesPath, imagesLinks = null, typesId, paramValues, secretKey) {
    const form = new formData();
    form.append('Id', id);
    form.append('Name', name);
    form.append('Description', description);
    form.append('Price', price);
    form.append('Discount', discount);
    form.append("Number", num);
    form.append('Images', fs.createReadStream(imagesPath));
    form.append("ImagesLinks", imagesLinks)
    form.append('TypesId', JSON.stringify(typesId));
    form.append('ParamValues', paramValues)    
    try {
        const result = await axios({
            method: 'post',
            url: `/api/Admin/${secretKey}/UpdateProduct`,
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

export async function deleteProduct() {
    let result;
    try {
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    return result;
}