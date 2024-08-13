let imageElement = document.querySelectorAll('.image');

imageElement.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        element.style.opacity = 0.5;
        element.classList.add("selected");
        
        e.dataTransfer.setData("text", e.target.id)
    })

    element.addEventListener('dragend', (e) => {
        element.style.opacity = 1;
        element.classList.remove("selected");

    })

    let eventsArray = ["dragover", "dragenter", "drop"];

    eventsArray.forEach(dragEvent => {

        let dropElement = document.querySelectorAll('.image');

        dropElement.forEach(element => {
            element.addEventListener(dragEvent, (e) => {
                e.preventDefault();

                if(dragEvent == "drop"){

                    var draggedElementId = e.dataTransfer.getData("text");

                    var draggedElement = document.getElementById(draggedElementId);
                    var dropTarget = e.target;

                    var tempId = draggedElement.id;
                    draggedElement.id = dropTarget.id;
                    dropTarget.id = tempId;
                }
            })
        })
        
    })

})