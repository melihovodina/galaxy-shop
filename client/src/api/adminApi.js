import axios from 'axios';
import formData from 'form-data';
import Cookies from 'js-cookie';
import _, { dropRight } from 'lodash'

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

export async function createCategory(name, image) {
    const form = new formData();
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(typeof image === "object") {
        form.append('Image', image);
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

export async function updateCategory(id, name, image) {
    const form = new formData();
    if(id.length > 0) {
        form.append('Id', id);
    }
    if(name.length > 0) {
        form.append('Name', name);
    }
    if(typeof image === 'object') {
        form.append('Image', image);
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

export async function createParameter(name, allowValues) {
    try {
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateParameter`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: name,
                allowValues: allowValues
            }
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateParameter(id, name, allowValues) {
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
                allowValues: allowValues
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

export async function createType(parrentId, name, parametersId, categoryId) {
    try {
        const data = {
            parrentId: parrentId,
            name: name,
            parametersId: parametersId,
            categoryId: categoryId
          };
        const filteredData = _.pickBy(data, _.identity);
        console.log(JSON.stringify(filteredData))
        const result = await axios({
            method: 'put',
            url: `/api/Admin/${Cookies.get('secretKey')}/CreateType`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(filteredData)
        })
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function updateType(id, parrentId, name, parametersId, categoryId) {
    try {
      const data = {
        id: id,
        parrentId: parrentId,
        name: name,
        parametersId: parametersId,
        categoryId: categoryId
      };
      const filteredData = _.pickBy(data, _.identity);
      console.log(JSON.stringify(filteredData))
      const result = await axios({
        method: 'patch',
        url: `/api/Admin/${Cookies.get('secretKey')}/UpdateType`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(filteredData)
      });
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
            url: `/api/Admin/${Cookies.get('secretKey')}/DeleteType`,
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

export async function createProduct(name, description, price, discount, num, images, typeId, paramValues) {
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
    if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
            form.append("Images", images[i]);
        }
    }
    if(paramValues.length > 0) {
        paramValues.forEach((param, index) => {
            form.append(`ParamValues[${index}]`, param);
        });
    }
    console.log('Form data:');
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

export async function updateProduct(id, name, description, price, discount, num, images, typeId, paramValues) {
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
    if(images.length > 0) {
        for (let i = 0; i < images.length; i++) {
            form.append("Images", images[i]);
        }
    } 
    if(paramValues.length > 0) {
        paramValues.forEach((param, index) => {
            form.append(`ParamValues[${index}]`, param);
        });
    }
    console.log('Form data:');
    for (let [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
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

export async function updateOrder(id, status) {
    try {
      const result = await axios({
        method: 'patch',
        url: `/api/Orders/UpdateOrder`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
            id: id,
            status: parseInt(status)
        }
      });
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

export async function downloadOrders(startDate, endDate) {
    try {
      await fetch('http://localhost:5299/api/Orders/DownloadExcel?' + new URLSearchParams({
        leftBorder: startDate.toISOString(),
        rightBorder: endDate.toISOString()
      }), 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
      })
     .then(response => response.blob())
     .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Report.xls';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    } catch (error) {
      console.error('Error downloading orders:', error);
    }
  }