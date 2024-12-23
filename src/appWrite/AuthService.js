/* eslint-disable */
import { Client, Account, ID } from "appwrite";
import config from "./../config/config";
import { v4 as uuidv4 } from 'uuid';

export class AuthServiceAppWrite {

  client = new Client();
  account;

  //// dynamic constructor for multiple clients  

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(config.projectId);

    this.account = new Account(this.client);
  }
   
  ///////////////////////////////   Creating the account   /////////// /////////////////////

  createAccount = async ({ email, password, name }) => {
    const uniqueId = uuidv4();
    try {
      
      console.log("🚀 !1!!!!!!!!!!!!!!!!!! ~ AuthServiceAppWrite ~ createAccount= ~ userAccount:",  uniqueId, email , password, name);
      const userAccount = await this.account.create(uniqueId, email , password, name);
      
      if (userAccount) {
        // return "userAccount Alredy exists!";
        // call login method
         const userLoginIntoAccount =
        await this.account.createEmailPasswordSession(email, password);
        console.log("🚀 ~ D 3 returning the result):", userLoginIntoAccount)
    return userLoginIntoAccount;
      } else {
        return userAccount;
      }

    } catch (error) {
      console.log("🚀 ~ AuthServiceAppWrite ~ createAccount= ~ error:", error);
      throw error;
    }
  };
 
  /////////////// logging in into the account /////////////////
  

  loginIntoAccount = async ({ email, password }) => {
  console.log("🚀 ~ A   -> Back end request recived ~  email, password:",  email, password)
    try {
      await this.account.deleteSessions();
     console.log("D 2 ) payload ", email, password);
     const userLoginIntoAccount =
       await this.account.createEmailPasswordSession(email, password);
      console.log("🚀 ~ D 3 returning the result):", userLoginIntoAccount)
    return userLoginIntoAccount;
  } catch (error) {
    console.log(
      "🚀 ~ AuthServiceAppWrite ~ loginIntoAccount= ~ error:",
      error
    );
    throw error;
  } 
  };

  ///////////////////// getting the current logged in user /////////

  getCurrentUser = async () => {
    try {
      const currentUser = await this.account.get();
      if(currentUser){
        console.log("🚀 ~ ++++++++++++++ current user", currentUser)
        return currentUser;
      }
    } catch (error) {
      console.log("🚀 ~ ++++++++++++++ AuthServiceAppWrite ~ getCurrentUser= ~ error:", error)
    }
    return null;
  }

  //////////////  logging out / deleting session ///////

  logout = async () => { 
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("🚀 ~ AuthServiceAppWrite ~ logout= ~ error:", error)
      throw(error)
    }
  }
  




}



console.log(config.projectId);
const authService = new AuthServiceAppWrite();

export default AuthServiceAppWrite;
