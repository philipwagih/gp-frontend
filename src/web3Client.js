import Web3 from "web3";
import The_Contract from '../build/contracts/System.json';
//import UserContract from '../build/contracts/User_Con.json';

let selectedAccount;
let smartcontract;
let is_initialized = false;

//connection
export const init = async ()=>{
  // connect to MetaMask
  let provider = window.ethereum; 

  if(typeof provider !== 'undefined')
  {
      provider.request({method:'eth_requestAccounts'}).then((accounts)=>
      {
          selectedAccount = accounts[0];
          console.log(selectedAccount);
      }).catch((err)=>{console.log(err);});

      //listen to Metamask account changes
      window.ethereum.on('accountsChanged',function(accounts){
      selectedAccount = accounts[0];
      console.log(selectedAccount);
  });
  }
 
  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();//connect to network(Ganache)
  smartcontract = new web3.eth.Contract(The_Contract.abi,The_Contract.networks[networkId].address);
  is_initialized = true;
};

export async function register(_name,_email,_password)
{
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.register_User(selectedAccount,_name,_email,_password).send({from:selectedAccount});
}


export async function register_comp(_name,_email,_password,_cert_num){
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.register_Company(selectedAccount,_name,_email,_password,_cert_num).send({from : selectedAccount});
}


export async function UploadProducts(_id,_name,_description,_companyName){
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.upload_Product(_id,_name,_description,_companyName).send({from:selectedAccount});
}

export async function login(_name,_password){
  if(!is_initialized)
  {
      await init();
  }
return  smartcontract.methods.login_user(selectedAccount,_name,_password).call();
}

export async function login_comp(_name,_password){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.login_company(selectedAccount,_name,_password).call();
}


export async function verify(product_add){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.verify_product(product_add).call();
}

export async function Delete_product(product_add){
    if(!is_initialized)
    {
        await init();
    }
     smartcontract.methods.delete_product(product_add).send({from:selectedAccount})
}