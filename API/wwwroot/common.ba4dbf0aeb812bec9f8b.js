"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{6766:(i,a,r)=>{r.d(a,{b:()=>n});class n{constructor(){this.sort="name",this.pageNumber=1,this.pageSize=8}}},6368:(i,a,r)=>{r.d(a,{I:()=>c});var n=r(1841),o=r(2340),_=r(8002),p=r(639);let c=(()=>{class s{constructor(e){this.http=e,this.baseUrl=o.N.apiUrl}getStories(e){let t=new n.LE;return t=t.append("sort",e.sort),t=t.append("pageIndex",e.pageNumber),t=t.append("pageSize",e.pageSize),e.search&&(t=t.append("search",e.search)),this.http.get(`${this.baseUrl}story`,{observe:"response",params:t}).pipe((0,_.U)(u=>u.body))}getStory(e){return this.http.get(`${this.baseUrl}story/${e}`)}}return s.\u0275fac=function(e){return new(e||s)(p.LFG(n.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);