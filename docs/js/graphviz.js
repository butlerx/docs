const graphvizs = $('.section').find('code.graphviz')
graphvizs.each((key, value) => {
  try {
    const $value = $(value)
    const $ele = $(value).parent().parent()

    const graphviz = Viz($value.text(), { format: 'png-image-element' })
    if (!graphviz) throw Error('viz.js output empty graph')
    $value.html(graphviz)

    $ele.addClass('graphviz')
    $value.children().unwrap().unwrap()
  } catch (err) {
    console.warn(err)
  }
})
