const api = (() => {
  const BASE_URL = 'http://localhost:8000';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function register({ email, name, password, jenis_kelamin }) {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        jenis_kelamin,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { token } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/api/auth/me`);
    const responseJson = await response.json();
    const { user, message } = responseJson;

    // krn tdk ada response status, maka dgunakan user sebgai pertimbagan
    // API 200 => user: {...}
    // API 401 => tidak ada prop user, hanya ada prop message: "..."
    if (!user) {
      throw new Error(message);
    }

    return user;
  }

  async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/api/produk`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const allData = [];
    const {
      data: { last_page },
    } = responseJson;

    for (let i = 1; i <= last_page; i++) {
      const response = await fetch(`${BASE_URL}/api/produk?page=${i}`);
      const { data } = await response.json();
      allData.concat(data.data);
    }

    return allData;
  }

  async function getProductsByOccasion(occasionId) {
    const response = await fetch(`${BASE_URL}/api/produk?kategori=${occasionId}`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data.data;
  }

  async function getProductsByCity(cityId) {
    const response = await fetch(`${BASE_URL}/api/kota=${cityId}`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data.data;
  }

  async function getDetailProduct(productId) {
    const response = await fetch(`${BASE_URL}/api/produk/${productId}`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;

    return data;
  }

  async function getAllOccasions() {
    const response = await fetch(`${BASE_URL}/api/kategori-produk`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const allData = [];
    const {
      data: { last_page },
    } = responseJson;

    for (let i = 1; i <= last_page; i++) {
      const response = await fetch(`${BASE_URL}/api/kategori-produk?page=${i}`);
      const { data } = await response.json();
      allData.concat(data.data);
    }

    return allData;
  }

  async function getAllCities() {
    const response = await fetch(`${BASE_URL}/api/kota`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const allData = [];
    const {
      data: { last_page },
    } = responseJson;

    for (let i = 1; i <= last_page; i++) {
      const response = await fetch(`${BASE_URL}/api/kota_pengiriman?page=${i}`);
      const { data } = await response.json();
      allData.concat(data.data);
    }

    return allData;
  }

  async function getRecomProducts() {
    const response = await fetch(`${BASE_URL}/api/produk?page=20`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;
    return data.data;
  }

  async function getSeveralOccasions() {
    const response = await fetch(`${BASE_URL}/api/kategori-produk?page=1`);
    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== true) {
      throw new Error(message);
    }

    const { data } = responseJson;
    return data.data;
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllProducts,
    getProductsByOccasion,
    getProductsByCity,
    getDetailProduct,
    getAllCities,
    getAllOccasions,
    getRecomProducts,
    getSeveralOccasions,
  };
})();

export default api;
