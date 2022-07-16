function schema() {
  return {
    params: {
      type: "object",
      properties: {
        address: {
          type: "string",
        },
        amountInEthers: {
          type: "string",
        },
      },
    },
    required: ["address", "amountInEthers"],
  };
}

function handler({ contractInteraction }) {
  return async function (req) {
    return contractInteraction.sendPayment(req.body.address, req.body.amountInEthers);
  };
}

module.exports = { schema, handler };
