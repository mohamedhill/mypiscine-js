async function getJSON(path, params = {}) {
  let url =path
  let searchParams =new URLSearchParams(params).toString()
  if (searchParams) {
    url += `?${searchParams}`
  }
  let response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  let json = await response.json()
  if (json.error) {
    throw new Error(json.error)
  }
  return json.data
}
