const errRes = (res: any, err: any, statusCode = 400) => {
  let response = { status: false, err };
  res.statusCode = statusCode;
  return res.json(response);
};

const okRes = (res: any, data: any, statusCode = 200) => {
  let response = { status: true, data };
  res.statusCode = statusCode;
  return res.json(response);
};

export { errRes, okRes };
