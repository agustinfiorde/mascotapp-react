export const REQUEST_OPTIONS = function(data, method){
  return {
    method: method,
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data),
  };
}

export const user = "user";

export const HTTP = {
  POST: "POST",
  PATCH: "PATCH",
  GET: "GET"
};

