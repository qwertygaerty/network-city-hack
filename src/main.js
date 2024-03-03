
let disabledIds = ['lessonDuration'];


function disableItemsById(ids) {
    ids.forEach((id) => {
        let element = document.getElementById(id);
        if (element) {
            element.disabled = false;
        }
    });
}

disabledIds = disabledIds.filter((id) => {
    let element = document.getElementById(id);
    return !(element && !element.disabled);
});

const targetNode = document.body;
const config = { attributes: false, childList: true, subtree: true };
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.matches('.child-window.animated.visible.ng-scope')) {
                    disableItemsById(disabledIds);
                    console.log("Element added!");
                    console.log(disabledIds)
                    console.log(document.getElementById('lessonDuration'))
                }
            });
        }
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
// observer.disconnect();
