function schema() {
  return {
    params: {
      type: "object",
      properties: {
        privateKey: {
          type: "string",
        },
        amountInEthers: {
          type: "string",
        },
      },
    },
    required: ["privateKey", "amountInEthers"],
  };
}

function handler({ contractInteraction, walletService }) {
  return async function (req) {
    return contractInteraction.sendPayment(walletService.getWallet(req.body.privateKey), req.body.amountInEthers);
  };
}

module.exports = { schema, handler };
