(this["webpackJsonpreact-redux-beauty-salon"]=this["webpackJsonpreact-redux-beauty-salon"]||[]).push([[0],{29:function(e,a,t){e.exports=t(42)},34:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),i=t.n(c),s=(t(34),t(3)),l=t(2),o=t(44),m=t(27),d=t(22),p=t(8),h=t(5),v=t.n(h);const E={clients:[{id:Math.floor(100*Math.random()),name:"Rose",registeredAt:Date.now(),billPaid:!1,services:{[Math.floor(100*Math.random())]:{name:"Women Hair Cut",price:35,category:"hair",clientServiceId:Date.now()}}},{id:Math.floor(100*Math.random()),name:"John",registeredAt:Date.now(),billPaid:!1,services:{[Math.floor(100*Math.random())]:{name:"Men Hair Cut",price:26,category:"hair",clientServiceId:Date.now()},[Math.floor(100*Math.random())]:{name:"Basic Facial",price:55,category:"facial",clientServiceId:Date.now()}}},{id:Math.floor(100*Math.random()),name:"Valerie",registeredAt:Date.now(),billPaid:!1,services:{[Math.floor(100*Math.random())]:{name:"Gel Nails",price:35,category:"nails",clientServiceId:Date.now()}}}],isPaymentModalOpen:!1,clientForPayment:null},u=Object(p.b)(E,{ADD_CLIENT:(e,a)=>{const t={id:Date.now(),name:a.payload.clientName,services:[],registeredAt:Date.now(),billPaid:!1};e.clients.push(t)},REMOVE_CLIENT:(e,a)=>{v.a.remove(e.clients,{id:a.payload.clientId})},MARK_CLIENT_SERVICES_STATUS_AS_PAID:(e,a)=>{const t=e.clients.findIndex(e=>e.id===a.payload.clientId);e.clients[t].billPaid=!0,e.isPaymentModalOpen=!1},OPEN_PAYMENT_MODAL:(e,a)=>{e.isPaymentModalOpen=!0,e.clientForPayment=Object(d.a)({},a.payload.client)},CLOSE_PAYMENT_MODAL:e=>{e.isPaymentModalOpen=!1},DROP_SERVICE:(e,a)=>{const t=e.clients.findIndex(e=>e.id===a.payload.clientId);e.clients[t].services[Math.floor(100*Math.random())]=Object(d.a)({},a.payload.service,{clientServiceId:Date.now()})},REMOVE_CLIENT_SERVICE:(e,a)=>{const t=e.clients.findIndex(e=>e.id===a.payload.clientId);delete e.clients[t].services[a.payload.clientServiceId]}}),y={[Math.floor(100*Math.random())]:{name:"Deluxe Facial",price:75,category:"facial"},[Math.floor(100*Math.random())]:{name:"Basic Facial",price:55,category:"facial"},[Math.floor(100*Math.random())]:{name:"Acne Treatment",price:95,category:"facial"},[Math.floor(100*Math.random())]:{name:"Milk Peel",price:330,category:"facial"},[Math.floor(100*Math.random())]:{name:"Women Hair Cut",price:35,category:"hair"},[Math.floor(100*Math.random())]:{name:"Children Hair Cut",price:20,category:"hair"},[Math.floor(100*Math.random())]:{name:"Permanent Color",price:68,category:"hair"},[Math.floor(100*Math.random())]:{name:"Scalp Treatment",price:35,category:"hair"},[Math.floor(100*Math.random())]:{name:"Men Hair Cut",price:26,category:"hair"},[Math.floor(100*Math.random())]:{name:"Gel Nails",price:35,category:"nails"},[Math.floor(100*Math.random())]:{name:"Acrylic Nails",price:45,category:"nails"},[Math.floor(100*Math.random())]:{name:"Manicure",price:20,category:"nails"},[Math.floor(100*Math.random())]:{name:"Pedicure",price:30,category:"nails"},[Math.floor(100*Math.random())]:{name:"Hair Tincture",price:20,category:"products"},[Math.floor(100*Math.random())]:{name:"Hair Tincture PRO",price:40,category:"products"},[Math.floor(100*Math.random())]:{name:"Oil Hair Tretament 100ml",price:25,category:"products"},[Math.floor(100*Math.random())]:{name:"Carolina Herrera Parfum",price:100,category:"others"},[Math.floor(100*Math.random())]:{name:"Chocolate",price:3,category:"others"},[Math.floor(100*Math.random())]:{name:"Coke",price:5,category:"others"}},g={services:y,serviceNameFilter:"",serviceCategoryFilter:"",servicesResult:y},N=Object(p.b)(g,{FILTER_SERVICE:(e,a)=>{const t=a.payload.serviceNameFilter||"",r=a.payload.serviceCategoryFilter||"";e.serviceNameFilter=t,e.serviceCategoryFilter=r;const n=v.a.filter(e.services,(function(e){return e.name.toLowerCase().match(t.toLowerCase())&&e.category===(v.a.isEmpty(r)?e.category:r)}));e.servicesResult=n}});var C=t(45);class f extends n.a.Component{constructor(...e){super(...e),this.categoryIcon=e=>{switch(e){case"facial":return"fa-theater-masks";case"hair":return"fa-cut";case"nails":return"fa-hand-scissors";case"products":return"fa-burn";default:return"fa-shopping-cart"}}}render(){return n.a.createElement("span",{className:"panel-icon has-text-danger",style:{marginTop:"5px"}},n.a.createElement("i",{className:"fas "+this.categoryIcon(this.props.category),"aria-hidden":"true"}))}}var M=f;const b={beginDrag:e=>e.service,endDrag(e,a){if(!a.didDrop())return;const t=a.getDropResult().clientId;e.actionDropService(e.service,t)}};class S extends n.a.Component{render(){const e=this.props,a=e.connectDragSource,t=e.service;return a(n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(M,{category:t.category}),t.name," (R",t.price,")"))}}const I=Object(C.a)("service",b,(function(e,a){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:a.isDragging()}}))(S);var P=Object(l.b)(e=>({draggedService:e.draggedService}),e=>({actionDragService:a=>{e((e=>({type:"DRAG_SERVICE",payload:{service:e}}))(a))},actionDropService:(a,t)=>{e(((e,a)=>({type:"DROP_SERVICE",payload:{service:e,clientId:a}}))(a,t))}}))(I);class k extends n.a.Component{constructor(...e){super(...e),this.onCategoryClick=e=>{const a=this.props.serviceNameFilter;this.props.actionFilterService(a,e)},this.handleInputChange=e=>{const a=this.props.serviceCategoryFilter,t=e.target.value;this.props.actionFilterService(t,a)}}render(){const e=this.props.servicesResult;return n.a.createElement("nav",{className:"services-list"},n.a.createElement("p",{className:"panel-heading"},"Services"),n.a.createElement("div",{className:"panel-block"},n.a.createElement("p",{className:"control has-icons-left"},n.a.createElement("input",{className:"input is-small is-danger",type:"text",placeholder:"search",onChange:this.handleInputChange}),n.a.createElement("span",{className:"icon is-small is-left"},n.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"})))),n.a.createElement("div",{className:"panel-tabs"},n.a.createElement("div",{className:"".concat(""===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("")},"all"),n.a.createElement("div",{className:"".concat("facial"===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("facial")},"facial"),n.a.createElement("div",{className:"".concat("hair"===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("hair")},"hair"),n.a.createElement("div",{className:"".concat("nails"===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("nails")},"nails"),n.a.createElement("div",{className:"".concat("products"===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("products")},"products"),n.a.createElement("div",{className:"".concat("others"===this.props.serviceCategoryFilter?"is-active":"has-text-danger"),onClick:()=>this.onCategoryClick("others")},"others")),Object.keys(e).map(a=>n.a.createElement("div",{href:"#",className:"panel-block is-active",key:a},n.a.createElement(P,{service:e[a],key:e[a].name}))))}}var O=Object(l.b)(e=>({servicesResult:e.servicesState.servicesResult,serviceNameFilter:e.servicesState.serviceNameFilter,serviceCategoryFilter:e.servicesState.serviceCategoryFilter}),e=>({actionFilterService:(a,t)=>{e(((e,a)=>({type:"FILTER_SERVICE",payload:{serviceNameFilter:e,serviceCategoryFilter:a}}))(a,t))}}))(k),D=t(26),R=t.n(D);class x extends n.a.Component{render(){const e=this.props.client;return n.a.createElement("div",{className:"client"},n.a.createElement("p",null,n.a.createElement("strong",null,e.name)," ",n.a.createElement("small",null,"@",e.name.trim().toLowerCase()),n.a.createElement("br",null),n.a.createElement("small",null,n.a.createElement(R.a,{format:"H:mm:ss"},e.registeredAt))))}}var A=x;class F extends n.a.Component{render(){let e=0;const a=this.props.services;return Object.keys(a).map(t=>e+=a[t].price),n.a.createElement("div",null,n.a.createElement("b",null,"R",e))}}var _=F,T=t(46);const w={drop:e=>e};class L extends n.a.Component{constructor(...e){super(...e),this.removeClientService=(e,a)=>{this.props.actionRemoveClientService(e,a)},this.removeClient=e=>{window.confirm("Are you sure?")&&this.props.actionRemoveClient(e)},this.openPaymentModal=()=>{this.props.actionOpenPaymentModal(this.props.client)}}render(){const e=this.props.connectDropTarget,a=this.props.client.services;return e(n.a.createElement("div",{className:"box"},n.a.createElement("article",{className:"media"},n.a.createElement("div",{className:"media-content"},n.a.createElement("div",{className:"content"},n.a.createElement(A,{client:this.props.client}),n.a.createElement("br",null),n.a.createElement("span",{className:"has-text-weight-bold"},"Services:"),n.a.createElement("nav",{style:{marginTop:"3px"}},Object.keys(a).map(e=>n.a.createElement("div",{className:"panel-block is-active",key:e},n.a.createElement(P,{service:a[e]}),n.a.createElement("p",{className:"delete",onClick:()=>this.removeClientService(this.props.clientId,e)}))))),n.a.createElement("nav",{className:"level is-mobile"},n.a.createElement("div",{className:"level-left"},n.a.createElement("p",{className:"buttons"},n.a.createElement("button",{className:"button is-danger is-small",onClick:()=>this.removeClient(this.props.clientId)},n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-ban"})),n.a.createElement("span",null,"Remove")),n.a.createElement("button",{className:"button is-primary is-small",onClick:()=>this.openPaymentModal()},n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-dollar-sign"})),n.a.createElement("span",null,"Cashier")))),n.a.createElement("div",{className:"level-right"},n.a.createElement(_,{services:this.props.client.services})))))))}}const j=Object(l.b)(e=>({}),e=>({actionRemoveClientService:(a,t)=>{e(((e,a)=>({type:"REMOVE_CLIENT_SERVICE",payload:{clientId:e,clientServiceId:a}}))(a,t))},actionRemoveClient:a=>{e((e=>({type:"REMOVE_CLIENT",payload:{clientId:e}}))(a))},actionOpenPaymentModal:a=>{e((e=>({type:"OPEN_PAYMENT_MODAL",payload:{client:e}}))(a))}}))(L);var V=Object(T.a)("service",w,(function(e,a){return{connectDropTarget:e.dropTarget(),hovered:a.isOver()}}))(j);class H extends n.a.Component{render(){const e=v.a.filter(this.props.clients,{billPaid:!1});return n.a.createElement(n.a.Fragment,null,e.map(e=>n.a.createElement(V,{client:e,clientId:e.id,key:e.id})))}}var z=Object(l.b)(e=>({clients:e.clientsState.clients}))(H);class B extends n.a.Component{constructor(...e){super(...e),this.closePaymentModal=()=>{this.props.actionClosePaymentModal()},this.markClientServicesStatusAsPaid=e=>{this.props.actionMarkClientServicesStatusAsPaid(e)}}render(){const e=this.props.clientForPayment,a=e&&e.id,t=e?e.services:[];return this.props.isPaymentModalOpen&&n.a.createElement("div",{className:"modal is-active"},n.a.createElement("div",{className:"modal-background"}),n.a.createElement("div",{className:"modal-card"},n.a.createElement("header",{className:"modal-card-head"},n.a.createElement("p",{className:"modal-card-title"},"Cashier"),n.a.createElement("button",{className:"delete","aria-label":"close",onClick:()=>this.closePaymentModal()})),n.a.createElement("section",{className:"modal-card-body"},n.a.createElement("div",{className:"tile is-ancestor"},n.a.createElement("div",{className:"tile is-vertical is-8"},n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("article",{className:"tile is-child notification is-dark"},n.a.createElement("p",{className:"title is-size-4"},e.name),n.a.createElement("p",{className:"subtitle is-size-6"},"@",e.name.trim().toLowerCase())),n.a.createElement("article",{className:"tile is-child notification "},n.a.createElement("p",{className:"title is-size-6"},"Services:"),n.a.createElement("ul",null,Object.keys(t).map(e=>n.a.createElement("li",{key:e},"\u2022 ",t[e].name," ($",t[e].price,")"))))))),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("article",{className:"tile is-child notification is-danger"},n.a.createElement("div",{className:"title is-size-2"},n.a.createElement(_,{services:e.services})),n.a.createElement("p",{className:"subtitle is-size-4"},"Total"))))),n.a.createElement("footer",{className:"modal-card-foot"},n.a.createElement("button",{className:"button is-primary",onClick:()=>this.markClientServicesStatusAsPaid(a)},"Mark as paid"),n.a.createElement("button",{className:"button",onClick:()=>this.closePaymentModal()},"Cancel"))))}}var W=Object(l.b)(e=>({isPaymentModalOpen:e.clientsState.isPaymentModalOpen,clientForPayment:e.clientsState.clientForPayment}),e=>({actionClosePaymentModal:()=>{e({type:"CLOSE_PAYMENT_MODAL"})},actionMarkClientServicesStatusAsPaid:a=>{e((e=>({type:"MARK_CLIENT_SERVICES_STATUS_AS_PAID",payload:{clientId:e}}))(a))}}))(B);class Y extends n.a.Component{constructor(...e){super(...e),this.addClient=()=>{this.props.actionAddClient(this.input.value.trim()),this.input.value=""}}render(){return n.a.createElement("div",{className:"tile is-ancestor add-client"},n.a.createElement("div",{className:"tile is-vertical"},n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("article",{className:"tile is-child notification is-light is-bold"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input is-danger",type:"text",name:"client-name",placeholder:"Enter customer's name",ref:e=>{this.input=e}}))),n.a.createElement("button",{className:"button is-danger",onClick:this.addClient},n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-plus"})),n.a.createElement("span",null,"New Customer")))))))}}var G=Object(l.b)(e=>({clientInput:e.clientInput}),e=>({actionAddClient:a=>{e((e=>e.length>0?{type:"ADD_CLIENT",payload:{clientName:e}}:{type:"ADD_CLIENT_ERROR"})(a))}}))(Y);class J extends n.a.Component{render(){const e=v.a.filter(this.props.clients,{billPaid:!0}),a=v.a.filter(this.props.clients,{billPaid:!1});let t=0;e.forEach((function(e){t+=v.a.reduce(e.services,(function(e,a){return e+(a?a.price:0)}),0)}));let r=0;return a.forEach((function(e){r+=v.a.reduce(e.services,(function(e,a){return e+(a?a.price:0)}),0)})),n.a.createElement("div",null,n.a.createElement("nav",{className:"level"},n.a.createElement("div",{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("p",{className:"heading"},"Total Open"),n.a.createElement("p",{className:"title has-text-danger"},"R",r))),n.a.createElement("div",{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("p",{className:"heading"},"Total Received"),n.a.createElement("p",{className:"title has-text-primary"},"R",t)))))}}var K=Object(l.b)(e=>({clients:e.clientsState.clients}))(J);t(41);const U=Object(s.c)({clientsState:u,servicesState:N}),$=Object(p.a)({reducer:U});class q extends r.Component{render(){return n.a.createElement(l.a,{store:$},n.a.createElement("div",{className:"hero is-dark is-bold header-hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-four-fifths"},n.a.createElement("h1",{className:"title"},"Beauty Salon"),n.a.createElement("h2",{className:"subtitle has-text-danger"},n.a.createElement("small",null,"Done by Doreen Ligman"))),n.a.createElement("div",{className:"column is-one-fifth"},n.a.createElement(K,null))))),n.a.createElement("div",{className:"app-container"},n.a.createElement(o.a,{backend:m.a},n.a.createElement(G,null),n.a.createElement(z,null),n.a.createElement(O,null),n.a.createElement(W,null))))}}var Q=q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.fa1276e2.chunk.js.map