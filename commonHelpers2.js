import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.querySelector("input[name='email']"),r=a.querySelector("textarea[name='message']"),s="feedback-form-state";document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(s);t&&(e=JSON.parse(t),l.value=e.email,r.value=e.message)});a.addEventListener("input",t=>{e[t.target.name]=t.target.value,localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),a.reset(),e={email:"",message:""},localStorage.removeItem(s)});
//# sourceMappingURL=commonHelpers2.js.map
