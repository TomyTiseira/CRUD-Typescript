const isEmpty = (obj: Record<string, any>): boolean => {
  return Object.entries(obj).length === 0
}

export default isEmpty
