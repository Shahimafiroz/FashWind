/* eslint-disable */
import { Client, Account, ID } from "appwrite";
import config from "./../config/config";

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
  
  //////// Creating the account /////////////////////

  createAccount = async ({ email, password, name }) => {
    try {
 
      const userAccount = await this.account.create(ID.unique, email , password, name);
      console.log("🚀 !1!!!!!!!!!!!!!!!!!! ~ AuthServiceAppWrite ~ createAccount= ~ userAccount:", userAccount , ID.unique, email , password, name);
      
      if (userAccount) {
        return "userAccount Alredy exists!";
        // call login method
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

    let getCurrentUser = async () => {
      try {
        const currentUser = await this.account.get();
        return currentUser;
      } catch (error) {
        console.log(
          "🚀 ~ AuthServiceAppWrite ~ getCurrentUser= ~ error:",
          error
        );
      }
      return null;
    };

    if (getCurrentUser) {
      return getCurrentUser();
    } else if (getCurrentUser === null) {

       try {
         console.log("@@@@@@@@@@@@@", ID.unique, email, password);
         const userLoginIntoAccount =
           await this.account.createEmailPasswordSession(email, password);
         return userLoginIntoAccount;
       } catch (error) {
         console.log(
           "🚀 ~ AuthServiceAppWrite ~ loginIntoAccount= ~ error:",
           error
         );
         throw error;
       }
      
    }


  };

  ///////////////////// getting the current logged in user /////////

  getCurrentUser = async () => {
    try {
      const currentUser = await this.account.get();
      return currentUser;
    } catch (error) {
      console.log("🚀 ~ AuthServiceAppWrite ~ getCurrentUser= ~ error:", error)
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
