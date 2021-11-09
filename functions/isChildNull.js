function isChildNull(children) {
  if (Array.isArray(children)) return children.some(child => !isChildNull(child))
  console.log(children)

  return !!children?.type
}

export default isChildNull
