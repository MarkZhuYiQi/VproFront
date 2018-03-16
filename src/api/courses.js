import request from '@/utils/request'

export function getCoursesList(params) {
  return request({
    url: '/back/courses',
    method: 'get',
    params
  })
}
