webpackJsonp([14],{0:function(t,e,n){t.exports=n("cDNt")},"20fz":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()},aoCP:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){this.isActive=!1,this.showMenu=""}return t.prototype.eventCalled=function(){this.isActive=!this.isActive},t.prototype.addExpandClass=function(t){t===this.showMenu?this.showMenu="0":this.showMenu=t},t}()},cDNt:function(t,e,n){"use strict";function o(t){return new d.a(t,"/assets/i18n/",".json")}function r(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i["\u0275did"](212992,null,0,m.q,[m.b,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null],i.ChangeDetectorRef],null,null),(t()(),i["\u0275ted"](null,["\n"]))],function(t,e){t(e,1,0)},null)}function u(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,null,null,1,"app-root",[],null,null,null,r,h)),i["\u0275did"](49152,null,0,p,[f.a],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var i=n("/oeL"),a={production:!0},d=n("kkjc"),l=function(){function t(){}return t}(),c=n("9Qcf"),p=function(){function t(t){this.translate=t,t.addLangs(["en","fr","ur","es","fa"]),t.setDefaultLang("en");var e=t.getBrowserLang();t.use(e.match(/en|fr|ur|es|fa/)?e:"en")}return t.ctorParameters=function(){return[{type:c.b}]},t}(),s=[""],m=n("BkNc"),f=n("WDs4"),g=[s],h=i["\u0275crt"]({encapsulation:0,styles:g,data:{}}),y=i["\u0275ccf"]("app-root",p,u,{},{},[]),b=n("qbdv"),v=n("fc+i"),I=n("f9zQ"),L=n("fL27"),S=n("EyWH"),C=n("bm2B"),k=n("CPp0"),A=n("XKz0"),R=(n("eqpX"),n("h9nf")),w=function(){function t(t,e){this.injector=t,this.router=e}return t.prototype.intercept=function(t,e){var n=this,o=(this.injector.get(R.a),t.clone({headers:t.headers.set("Authorization","token"+localStorage.getItem("token"))}));return e.handle(o).do(function(t){t instanceof A.h&&(localStorage.setItem("isLoggedin","true"),n.router.navigate(["dashboard"]))},function(t){t instanceof A.f&&(401!==t.status&&403!==t.status||(localStorage.setItem("isLoggedin","false"),localStorage.removeItem("isLoggedin"),n.router.navigate(["login"])))})},t.ctorParameters=function(){return[{type:i.Injector},{type:m.l}]},t}(),j=n("a3e3"),M=n("R08E"),N=n("Qg/J"),P=n("maBJ"),F=function(){function t(t,e){this.authSignupService=t,this.router=e}return t.prototype.canActivate=function(){return!!localStorage.getItem("isLoggedin")||(this.router.navigate(["/login"]),!1)},t.ctorParameters=function(){return[{type:R.a},{type:m.l}]},t}(),E=(function(){function t(){}}(),n("o+mL"),n("aoCP"),n("20fz"),n("tCmA"),function(){function t(){}return t}()),O=i["\u0275cmf"](l,[p],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[y]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](5120,i.LOCALE_ID,i["\u0275m"],[[3,i.LOCALE_ID]]),i["\u0275mpd"](4608,b.m,b.l,[i.LOCALE_ID]),i["\u0275mpd"](5120,i.APP_ID,i["\u0275f"],[]),i["\u0275mpd"](5120,i.IterableDiffers,i["\u0275k"],[]),i["\u0275mpd"](5120,i.KeyValueDiffers,i["\u0275l"],[]),i["\u0275mpd"](4608,v.c,v.t,[b.c]),i["\u0275mpd"](6144,i.Sanitizer,null,[v.c]),i["\u0275mpd"](4608,v.f,v.g,[]),i["\u0275mpd"](5120,v.d,function(t,e,n,o){return[new v.l(t),new v.p(e),new v.o(n,o)]},[b.c,b.c,b.c,v.f]),i["\u0275mpd"](4608,v.e,v.e,[v.d,i.NgZone]),i["\u0275mpd"](135680,v.n,v.n,[b.c]),i["\u0275mpd"](4608,v.m,v.m,[v.e,v.n]),i["\u0275mpd"](5120,I.a,L.d,[]),i["\u0275mpd"](5120,I.c,L.e,[]),i["\u0275mpd"](4608,I.b,L.c,[I.a,I.c]),i["\u0275mpd"](5120,i.RendererFactory2,L.f,[v.m,I.b,i.NgZone]),i["\u0275mpd"](6144,v.q,null,[v.n]),i["\u0275mpd"](4608,i.Testability,i.Testability,[i.NgZone]),i["\u0275mpd"](4608,v.h,v.h,[b.c]),i["\u0275mpd"](4608,v.j,v.j,[b.c]),i["\u0275mpd"](4608,S.b,L.b,[i.RendererFactory2,v.b]),i["\u0275mpd"](4608,C.d,C.d,[]),i["\u0275mpd"](4608,C.u,C.u,[]),i["\u0275mpd"](4608,k.BrowserXhr,k.BrowserXhr,[]),i["\u0275mpd"](4608,k.ResponseOptions,k.BaseResponseOptions,[]),i["\u0275mpd"](5120,k.XSRFStrategy,k["\u0275b"],[]),i["\u0275mpd"](4608,k.XHRBackend,k.XHRBackend,[k.BrowserXhr,k.ResponseOptions,k.XSRFStrategy]),i["\u0275mpd"](4608,k.RequestOptions,k.BaseRequestOptions,[]),i["\u0275mpd"](5120,k.Http,k["\u0275c"],[k.XHRBackend,k.RequestOptions]),i["\u0275mpd"](4608,A.j,A.o,[b.c,i.PLATFORM_ID,A.m]),i["\u0275mpd"](4608,A.p,A.p,[A.j,A.n]),i["\u0275mpd"](5120,A.a,function(t,e,n){return[t,new w(e,n)]},[A.p,i.Injector,m.l]),i["\u0275mpd"](4608,A.l,A.l,[]),i["\u0275mpd"](6144,A.k,null,[A.l]),i["\u0275mpd"](4608,A.i,A.i,[A.k]),i["\u0275mpd"](6144,A.b,null,[A.i]),i["\u0275mpd"](5120,A.g,A.q,[A.b,[2,A.a]]),i["\u0275mpd"](4608,A.c,A.c,[A.g]),i["\u0275mpd"](5120,m.a,m.z,[m.l]),i["\u0275mpd"](4608,m.e,m.e,[]),i["\u0275mpd"](6144,m.g,null,[m.e]),i["\u0275mpd"](135680,m.r,m.r,[m.l,i.NgModuleFactoryLoader,i.Compiler,i.Injector,m.g]),i["\u0275mpd"](4608,m.f,m.f,[]),i["\u0275mpd"](5120,m.i,m.C,[m.A]),i["\u0275mpd"](5120,i.APP_BOOTSTRAP_LISTENER,function(t){return[t]},[m.i]),i["\u0275mpd"](5120,j.b,o,[k.Http]),i["\u0275mpd"](4608,M.b,M.a,[]),i["\u0275mpd"](4608,N.b,N.a,[]),i["\u0275mpd"](4608,P.a,P.a,[]),i["\u0275mpd"](4608,f.a,f.a,[P.a,j.b,M.b,N.b,f.b]),i["\u0275mpd"](4608,R.a,R.a,[A.c,m.l]),i["\u0275mpd"](4608,F,F,[R.a,m.l]),i["\u0275mpd"](512,b.b,b.b,[]),i["\u0275mpd"](1024,i.ErrorHandler,v.r,[]),i["\u0275mpd"](1024,i.NgProbeToken,function(){return[m.v()]},[]),i["\u0275mpd"](512,m.A,m.A,[i.Injector]),i["\u0275mpd"](1024,i.APP_INITIALIZER,function(t,e,n){return[v.s(t,e),m.B(n)]},[[2,v.i],[2,i.NgProbeToken],m.A]),i["\u0275mpd"](512,i.ApplicationInitStatus,i.ApplicationInitStatus,[[2,i.APP_INITIALIZER]]),i["\u0275mpd"](131584,i["\u0275e"],i["\u0275e"],[i.NgZone,i["\u0275Console"],i.Injector,i.ErrorHandler,i.ComponentFactoryResolver,i.ApplicationInitStatus]),i["\u0275mpd"](2048,i.ApplicationRef,null,[i["\u0275e"]]),i["\u0275mpd"](512,i.ApplicationModule,i.ApplicationModule,[i.ApplicationRef]),i["\u0275mpd"](512,v.a,v.a,[[3,v.a]]),i["\u0275mpd"](512,L.a,L.a,[]),i["\u0275mpd"](512,C.r,C.r,[]),i["\u0275mpd"](512,C.p,C.p,[]),i["\u0275mpd"](512,k.HttpModule,k.HttpModule,[]),i["\u0275mpd"](512,A.e,A.e,[]),i["\u0275mpd"](512,A.d,A.d,[]),i["\u0275mpd"](1024,m.u,m.x,[[3,m.l]]),i["\u0275mpd"](512,m.t,m.c,[]),i["\u0275mpd"](512,m.b,m.b,[]),i["\u0275mpd"](256,m.h,{},[]),i["\u0275mpd"](1024,b.h,m.w,[b.p,[2,b.a],m.h]),i["\u0275mpd"](512,b.g,b.g,[b.h]),i["\u0275mpd"](512,i.Compiler,i.Compiler,[]),i["\u0275mpd"](512,i.NgModuleFactoryLoader,i.SystemJsNgModuleLoader,[i.Compiler,[2,i.SystemJsNgModuleLoaderConfig]]),i["\u0275mpd"](1024,m.j,function(){return[[{path:"",loadChildren:"./layout/layout.module#LayoutModule",canActivate:[F]},{path:"signup",loadChildren:"./signup/signup.module#SignupModule"},{path:"login",loadChildren:"./login/login.module#LoginModule"},{path:"dashboard",loadChildren:"./layout/layout.module#LayoutModule",canActivate:[F]},{path:"not-found",loadChildren:"./not-found/not-found.module#NotFoundModule"},{path:"**",redirectTo:"not-found"}]]},[]),i["\u0275mpd"](1024,m.l,m.y,[i.ApplicationRef,m.t,m.b,b.g,i.Injector,i.NgModuleFactoryLoader,i.Compiler,m.j,m.h,[2,m.s],[2,m.k]]),i["\u0275mpd"](512,m.p,m.p,[[2,m.u],[2,m.l]]),i["\u0275mpd"](512,E,E,[]),i["\u0275mpd"](512,c.a,c.a,[]),i["\u0275mpd"](512,l,l,[]),i["\u0275mpd"](256,A.m,"XSRF-TOKEN",[]),i["\u0275mpd"](256,A.n,"X-XSRF-TOKEN",[]),i["\u0275mpd"](256,f.b,void 0,[])])});a.production&&Object(i.enableProdMode)(),Object(v.k)().bootstrapModuleFactory(O)},gFIY:function(t,e,n){function o(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./blank-page/blank-page.module.ngfactory":["HQfz",12],"./bs-component/bs-component.module.ngfactory":["ZpkU",0,2],"./bs-element/bs-element.module.ngfactory":["/JGO",0,11],"./charts/charts.module.ngfactory":["GYnh",1,0],"./dashboard/dashboard.module.ngfactory":["wfpq",0,10],"./form/form.module.ngfactory":["QgKB",0,9],"./grid/grid.module.ngfactory":["LuXh",0,8],"./layout/layout.module.ngfactory":["7fD3",0,7],"./login/login.module.ngfactory":["njmd",5],"./not-found/not-found.module.ngfactory":["Vg0N",4],"./signup/signup.module.ngfactory":["uI9u",3],"./tables/tables.module.ngfactory":["ypbM",0,6]};o.keys=function(){return Object.keys(r)},o.id="gFIY",t.exports=o},h9nf:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("XKz0"),r=n("W4CS"),u=(n.n(r),n("BkNc")),i=function(){function t(t,e){this.http=t,this.router=e,this.loggedIn=!1,this.isAdmin=!1,this.jwtHelper=new r.JwtHelper;var n=localStorage.getItem("token");if(n){this.decodeUserFromToken(n)}}return t.prototype.signupUser=function(t){return this.http.post("http://localhost:3000/users/signup",t).subscribe(function(t){console.log(t)})},t.prototype.authenticateUser=function(t){var e=this;return this.http.post("http://localhost:3000/users/authenticate",t).subscribe(function(t){localStorage.setItem("token",t.token);e.decodeUserFromToken(t.token);return e.loggedIn},function(t){t.error instanceof Error?console.log("Client-side Error. Something went wrong in the frontend "+Error):console.log("Server-side Error. Something went wrong in the database "+Error)})},t.prototype.logout=function(){localStorage.removeItem("token"),localStorage.setItem("isLoggedin","false")},t.prototype.decodeUserFromToken=function(t){return this.jwtHelper.decodeToken(t).user},t.ctorParameters=function(){return[{type:o.c},{type:u.l}]},t}()},"o+mL":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n("BkNc"),r=n("9Qcf"),u=function(){function t(t,e){var n=this;this.translate=t,this.router=e,this.router.events.subscribe(function(t){t instanceof o.d&&window.innerWidth<=992&&n.toggleSidebar()})}return t.prototype.ngOnInit=function(){},t.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle("push-right")},t.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin"),localStorage.removeItem("token")},t.prototype.changeLang=function(t){this.translate.use(t)},t.ctorParameters=function(){return[{type:r.b},{type:o.l}]},t}()},tCmA:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()}},[0]);