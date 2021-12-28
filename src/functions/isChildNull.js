function isChildNull(children) {
  if (Array.isArray(children)) return children.some(child => !isChildNull(child))

  return !!children?.type
}

export default isChildNull
