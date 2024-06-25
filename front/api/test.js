import request from '@/api/config.js'

export function test() {
  return request({
    url: `test`,
    method: 'get',
  })
}
