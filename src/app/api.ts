export const API_URL = 'http://devallen.com.br/json';

export function TOKEN_POST(
  body: BodyInit | string | { username: string; password: string }
): ReturnFunctionGet {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}
export function TOKEN_VALIDATE_POST(token: string): ReturnFunctionGet {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  };
}
export function USER_GET(token: string): ReturnFunctionGet {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  };
}
export function USER_POST(body: BodyInit): ReturnFunctionGet {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}

export function PHOTO_POST(
  formData: BodyInit | null | undefined,
  token: string
): ReturnFunctionGet {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  };
}

export function PHOTOS_GET({
  page,
  total,
  user
}: {
  page: number;
  total: number;
  user: number | string;
}): ReturnFunctionGet {
  return {
    url: API_URL + `/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  };
}

export function PHOTO_GET(id: number | string | string[]): ReturnFunctionGet {
  return {
    url: API_URL + `/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  };
}

export function PHOTO_DELETE(
  id: number | string | string[]
): ReturnFunctionGet {
  return {
    url: API_URL + `/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    }
  };
}

export function COMMENT_POST(
  id: number | string | string[],
  body: string | BodyInit | { comment: string }
): ReturnFunctionGet {
  return {
    url: API_URL + `/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    }
  };
}

export function PASSWORD_LOST(body: BodyInit | string): ReturnFunctionGet {
  return {
    url: API_URL + `/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}
export function PASSWORD_RESET(body: BodyInit): ReturnFunctionGet {
  return {
    url: API_URL + `/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}
