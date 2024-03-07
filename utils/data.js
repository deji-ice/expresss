export function isJson(str) {
  const s =   JSON.parse(str)
    if (s ) {
        return false
    } else if (JSON.stringify(str)) {
        return true
    }
  }