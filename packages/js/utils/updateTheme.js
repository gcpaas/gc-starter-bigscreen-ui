export default function updateTheme (className) {
  const querySelectorName = className || '.el-button--primary'
  try {
    const primaryButton = document.querySelector(querySelectorName)
    const backgroundColor = window.getComputedStyle(primaryButton).getPropertyValue('background-color')
    const element = document.querySelector('.bs-body-theme-wrap')
    element.style.setProperty('--bs-el-color-primary', backgroundColor)
  } catch (e) {
    console.error(e)
  }
}
