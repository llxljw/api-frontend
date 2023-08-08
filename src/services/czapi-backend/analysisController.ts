// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterfaceInfo GET /api/analysis/analysis */
export async function listTopInvokeInterfaceInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>('/api/analysis/analysis', {
    method: 'GET',
    ...(options || {}),
  });
}
