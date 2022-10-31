Cypress.Commands.add('convertArrayBinaryToString', (bodyBinary: any, encondingType: any) => {
  const body = Cypress.Blob.arrayBufferToBinaryString(bodyBinary);
  const json = JSON.parse(Buffer.from(body, encondingType).toString());
  return json;
});
