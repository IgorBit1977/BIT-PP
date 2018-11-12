let dataModule = (function () {



})();

let uiModule = (function () {

    inputTask = document.querySelector('#inputTask');
    $inputTask = inputTask.value;
    $addButton = document.querySelector('#addButton');
    $checkbox = document.querySelector('#checkbox');


    return {
        $inputTask: $inputTask,
        $addButton: $addButton,
        $checkbox: $checkbox
    }
})();

let controlor = (function () {
    $addButton.addEventListener('click', () => {
        let newElement = document.createElement("li");
        () => {
            let newCheckboxElement = document.createElement("input");
            newCheckboxElement.setAttribute("type", "checkbox")
        }
        newElement.appendChild(newCheckboxElement);
        document.getElementById('#checkbox').appendChild(newElement).text(;
    });

})();