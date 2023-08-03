const createErrorReq = (statusCode, message) => {
  const isClientsErr = statusCode >= 400 && statusCode < 500;

  return {
    statusText: isClientsErr ? "error" : "fail",
    codeErr: statusCode,
    messageDescr: message,
    dataDescr: isClientsErr ? "Not found" : "Internal Server Error",
  };
};

module.exports = createErrorReq;
