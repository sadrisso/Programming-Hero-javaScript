
function stopWatch () {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const watch1 = stopWatch();
const watch2 = stopWatch();
watch1()
watch1()
watch1()
watch1()

watch2()
watch2()

console.log(watch2());
console.log(watch1());