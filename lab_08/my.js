function toggleFolder(event, folderElement) {
    event.stopPropagation();
    folderElement.classList.toggle('open');
}