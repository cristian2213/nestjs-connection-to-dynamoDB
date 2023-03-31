import { client } from '../database/dynamodb';
import { schema } from '../database/dynamodb.schemas.';
import { Model, Entity, Table } from 'dynamodb-onetable';

const AccountTable = new Table({
  client: client,
  name: 'MyTable',
  schema,
});

//  Fully typed Account object based on the schema
type AccountType = Entity<typeof schema.models.Account>;

// const account: AccountType = {
//   name: 'Coyote',
// };

//  Create a model to get/find/update...
const Account = new Model<AccountType>(AccountTable, 'Account');

export { Account, AccountType };
