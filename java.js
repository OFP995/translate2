document.querySelector('button').onclick = myClick;

function myClick () {
    let a = document.querySelector ('.i-1').value;
    document.querySelector('.out').innerHTML = a;
}