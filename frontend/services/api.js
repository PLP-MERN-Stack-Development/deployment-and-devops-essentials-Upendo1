const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';


async function request(path, opts={}){
const res = await fetch(API_BASE + path, {
headers: { 'Content-Type': 'application/json' },
...opts,
body: opts.body ? JSON.stringify(opts.body) : undefined,
});
if(!res.ok){
const err = await res.json().catch(()=>({message:res.statusText}));
throw new Error(err.message || 'API error');
}
return res.status===204 ? null : await res.json();
}


export default {
get: (p)=>request(p, { method: 'GET' }),
post: (p, body)=>request(p, { method: 'POST', body }),
put: (p, body)=>request(p, { method: 'PUT', body }),
delete: (p)=>request(p, { method: 'DELETE' }),
};