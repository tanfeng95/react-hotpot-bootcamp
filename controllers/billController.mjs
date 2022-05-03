export default function initBillsController(db) {
  const create = async (request, response) => {
    try {
      console.log(request.body);
      const bill = await db.Bill.create({
        name: request.body.name,
      });

      response.send({ bill });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    create,
  };
}
