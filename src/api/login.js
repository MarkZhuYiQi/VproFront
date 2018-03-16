import request from '@/utils/request'

export function login(user_name, user_pass) {
  return request({
    url: '/api/auths',
    method: 'post',
    data: {
      user_name,
      user_pass
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/api/auth/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
