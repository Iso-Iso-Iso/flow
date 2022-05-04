import { models } from "mongoose";

export async function uniqueField(dbName: string, filter: object) {
  const documentsCount = await models[dbName].countDocuments(filter);

  return !documentsCount;
}
