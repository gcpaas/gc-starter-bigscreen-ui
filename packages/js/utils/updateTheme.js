export default function updateTheme (data) {
  if (data) {
    window.requestAnimationFrame(() => {
      const querySelectorName = data || '.el-button--primary'
      const primaryButton = document.querySelector(querySelectorName)
      if (primaryButton) {
        const backgroundColor = window.getComputedStyle(primaryButton).getPropertyValue('background-color')
        const element = document.querySelector('.bs-body-theme-wrap')
        element.style.setProperty('--bs-el-color-primary', backgroundColor)
      }
    })
  }
}
