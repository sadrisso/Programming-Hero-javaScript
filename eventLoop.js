function a () {
    console.log('a')
    b()
    console.log('aa')
}

function b () {
    console.log('b');
    c();
    console.log('bb')
}
function c () {
    console.log('c')
    console.log('cc')
}

setTimeout(() => {
    console.log("inside setTimeout")
}, 1000);

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log(data));

function d () {
    console.log('d')
    e()
    console.log('dd')
}

function e () {
    console.log('e')
    console.log('ee')
}

a()
d()