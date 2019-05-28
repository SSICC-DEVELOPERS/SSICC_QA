const mongoose = require('mongoose');
const mongoparse = require('mongodb-extjson');

const Model = require('../models/aplicacionModel');

const create = (document, documentId) =>
{
  return new Promise(
    (done, reject) =>
    {
      let newRecord = new Model(document);
      newRecord.save(
        (error, result) =>
        {
          if (error) { console.log(error); reject(error); }
          done(result);
        }
      );
    }
  );
};

const read = (documentId) =>
{
    return new Promise
    (
        (done, reject) =>
        {
          Model.findOne({ _id: documentId },
                (error, result) =>
                {
                    if (error) { console.log(error); reject(error); }
                    done(result);
                }
            );
        }
    );
};

const update = (documentId, document) =>
{
    return new Promise(
        (done, reject) =>
        {
            Model.findOneAndUpdate({ _id: documentId }, document, { new: true },
                (error, result) =>
                {
                    if (error) { console.log(error); reject(error); }
                    done(result);
                }
            );
        }
    );
};

const remove = (documentId) =>
{
  return new Promise(
      (done, reject) =>
      {
          Model.findOneAndDelete({ _id: documentId },
              (error, result) =>
              {
                  if (error) { console.log(error); reject(error); }
                  done(result);
              }
          );
      }
  );
};

const max = () =>
{
	return new Promise(
		(done, reject) =>
		{
     Model
     .findOne({},
       (error, result) =>
       {
         if (error) { console.log(error); reject(error); }
         done(result._id);
       }
     )
     .sort({ "_id": -1 });
		}
	)
}

const count = (query) =>
{
	return new Promise(
		(done, reject) =>
		{
			let queryCount = [];
			for(let e of query)
			{
				let keysCommand = Object.keys(e);
				let keyCommand = keysCommand[0];
				if (keyCommand != "$sort" && keyCommand != "$limit" && keyCommand != "$skip" )
				{
					queryCount.push(e);
				}
			}
			queryCount.push({"$count": "total"})
			Model.aggregate(queryCount,
				(error, response) =>
				{
					if (error) { console.log(error); reject(error); }
					let total = 0;
					if (response)
					{
						response = (response.length > 0) ? response[0]: {};
						total = (response.total) ? response.total : 0;
					}
					done(total);
				}
			);
		}
	)
}

const list = (query) =>
{
    return new Promise(
        async (done, reject) =>
        {
						let st = mongoparse.stringify(query);
						query = mongoparse.parse(st);
            Model.aggregate(query,
							async (error, response) =>
							{
								if (error) { console.log(error); reject(error); }
								let countTotal = await count(query); //response ? response.length : 0;
								let result = { hits: response, total: countTotal }
								done(result)
							}
						);
        }
    );
};

const bulk = (data) =>
{
  return new Promise(
    async (done, reject) =>
    {
      Model.insertMany(data)
      .then((result) =>
      {
        done(result);
      })
      .catch((exception) =>
      {
        reject(exception);
      });
    }
  )
}

module.exports = {
  max,
  create,
  update,
  read,
  remove,
  list,
  bulk
}

