export default function updateTheme (className) {
  const querySelectorName = className || '.el-button--primary'
  const primaryButton = document.querySelector(querySelectorName)
  // 获取背景色属性值
  const backgroundColor = window.getComputedStyle(primaryButton).getPropertyValue('background-color')
  const element = document.querySelector('.bs-body-theme-wrap')
  element.style.setProperty('--bs-el-hover', backgroundColor)
}
