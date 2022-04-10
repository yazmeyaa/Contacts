function addListeners() {
    window.addEventListener('storage', handleStorageListener)
}

function handleStorageListener(){
    alert('Do something!')
}

export default addListeners