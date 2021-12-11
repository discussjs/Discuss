
/**
 * 验证参数
 * @param {Object} Param 参数
 * @param {Array} requiredParams 需要验证的字段
 */
function VerifyParams(Param, requiredParams) {
  for (const requiredParam of requiredParams) {
    if (!Param[requiredParam]) {
      throw new Error(`参数"${requiredParam}"不合法`)
    }
  }
}

module.exports = VerifyParams
