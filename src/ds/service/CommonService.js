/*!
 * 公共模块
 */
import { get, post } from '../../gc-starter/packages/utils/http'

/**
 * 删除菜单树节点
 * @param id
 * @param flag
 * @returns {*}
 */
const categoryRemove = (id = '-1', flag = false) => get(`/category/remove/${id}`, {}, flag)

/**
 * 新增/编辑菜单树节点
 * @param params
 * @param flag
 * @returns {*}
 */
const addOrUpdateTree = (params = {}, flag = false) => post(`/category/addOrUpdateTree`, params, flag)

export {
  categoryRemove,
  addOrUpdateTree
}
