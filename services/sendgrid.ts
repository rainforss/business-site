import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_API_KEY!);

export const upsertContact = async (contacts: any[]) => {
  try {
    const [response, body] = await client.request({
      url: "/v3/marketing/contacts",
      method: "PUT",
      body: { contacts },
    });
    console.log(response.statusCode);
    console.log(body);
  } catch (error) {
    console.log(error);
    const caughtError = new Error("Sendgrid Error");
    throw caughtError;
  }
};
