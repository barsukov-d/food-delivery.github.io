import{c as l,j as P,S as c,a,u as y}from"./axios.dac49c53.js";import{r as d}from"./index.eae3a570.js";class h extends Error{constructor(){super(),this.name="ErrorBadRequestProducts"}}class p extends Error{constructor(){super(),this.name="ErrorNotFoundProducts"}}const f=l(P("http://api.service.ru","products")),w={fetchProducts:async s=>{var r,o;try{return await f.get("",{params:s,validateStatus:e=>e===c.OK})}catch(t){throw t instanceof a.AxiosError&&((r=t==null?void 0:t.response)==null?void 0:r.status)===c.BAD_REQUEST?new h:t instanceof a.AxiosError&&((o=t==null?void 0:t.response)==null?void 0:o.status)===c.NOT_FOUND?new p:t}},getProduct:async s=>{var r,o;try{return await f.get(P(s.toString()),{validateStatus:e=>e===c.OK})}catch(t){throw t instanceof a.AxiosError&&((r=t==null?void 0:t.response)==null?void 0:r.status)===c.BAD_REQUEST?new h:t instanceof a.AxiosError&&((o=t==null?void 0:t.response)==null?void 0:o.status)===c.NOT_FOUND?new p:t}}},m=()=>{const s=y(),r=d([]),o=Symbol("fetchProducts"),t=async n=>{try{s.start(o),r.value=n.id&&!n.id.length?[]:await w.fetchProducts(n)}catch(i){throw i}finally{s.end(o)}},e=d(),u=Symbol("getProduct");return{product:e,products:r,fetchProducts:t,getProduct:async n=>{try{s.start(u),e.value=await w.getProduct(n)}catch(i){throw i}finally{s.end(u)}},getProductLoadingSymbol:u,fetchProductsLoadingSymbol:o}};export{m as u};
