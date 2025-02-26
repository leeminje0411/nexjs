import React from 'react';
import { resolve } from 'styled-jsx/css';
import users from '..//data/users.json';

const Layout = async ({ children }) => {
    
    
    console.log(users);
    return (
        <div>
            <ul style={{'list-style': 'none'}}>
                { users.map((item,index)=>{
                   return  <li key={item.index}>{item.name}</li>
                })}
            </ul>
           {children}
  
        </div>
    );
};

export default Layout;