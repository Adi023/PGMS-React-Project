import React from 'react'

export default function MemberLogin() {
  return (
    <div id='login'>
      <h1>Member Login</h1><br/><br/>
      <form >
        <label>Member ID : </label><input type='text' ></input><br/><br/>
        <label>Member Password : </label><input type='text' ></input><br/><br/><br/>
        <input type='submit' value={"Login"}></input>
      </form>
    </div>
  )
}
