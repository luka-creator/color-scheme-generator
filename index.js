const colorForm = document.getElementById('color-form')
const colorInput = document.getElementById('color-input')
const colorScheme = document.getElementById('colors-scheme')
const colorsApiContainer = document.getElementById('colors-api')
const hexValuesFooter = document.getElementById('hex-values')

colorForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const colorHexNumber = colorInput.value.slice(1)
    const colorSchemeType = colorScheme.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHexNumber}&mode=${colorSchemeType}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorsHtml = ''
            let hexValueHtml = ''

            data.colors.forEach(hexValue => {
                colorsHtml += `<div class="colors-box" style="background-color: ${hexValue.hex.value}"></div>`
                hexValueHtml += `<p class="hex-val" style="color: ${hexValue.hex.value}">${hexValue.hex.value}</p>`
            })
            colorsApiContainer.innerHTML = colorsHtml
            hexValuesFooter.innerHTML = hexValueHtml
        })
})
