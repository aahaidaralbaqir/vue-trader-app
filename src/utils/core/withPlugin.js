export default (app,libraries) => {
  for(const library of libraries) {
    app.use(library)
  }
}