import  {
    globalIdField,
    fromGlobalId,

} from 'graphql-relay'

class User {

  constructor({_id, username, password, address,activated}) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.address = address;
    this.activated = activated;
  }



}

export default User;