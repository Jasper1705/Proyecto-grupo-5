function openNav(){
    document.getElementById("menu-mobile").style.width = "100%";
}

function closeNav(){
    document.getElementById("menu-mobile").style.width = "0%";
}

const target = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

target.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})

