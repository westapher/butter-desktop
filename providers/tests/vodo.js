var vodo = new require ('../vodo') ();

vodo.fetch({}).then(function (data) {
    console.log (data)
})
