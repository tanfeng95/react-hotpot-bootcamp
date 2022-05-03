export default function initPeopleController(db) {
  const create = async (request, response) => {
    try {
      console.log(request.body);
      const person = await db.People.create({
        name: request.body.name,
        amount: request.body.amount,
      });
      response.send({ person });
    } catch (error) {
      console.log(error);
    }
  };
  const mealCost = async (request, response) => {
    console.log(request.body);
    try {
      await request.body.peopleList.forEach((person) => {
        db.People.update({
          amount: Math.round(person.amount),
        }, {
          where: {
            id: person.id,
          },
        }, {
          returning: true,
        });
      });
      response.send(200);
    } catch (ex) {
      console.log(ex);
    }
  };

  return {
    create,
    mealCost,
  };
}
