const get404Page = (req, res) => {
    res.status(404).render('404')
}
export {get404Page}