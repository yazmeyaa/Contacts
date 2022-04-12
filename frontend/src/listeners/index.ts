function addListeners() {
    window.addEventListener('storage', handleStorageListener)
}

function handleStorageListener(){
    console.log('StorageChanged')
}

export default addListeners