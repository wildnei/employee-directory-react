(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),l=n(22),s=n.n(l),a=(n(35),n(26)),o=n(2),i=n(23),d=n(24),j=n(29),m=n(28),b=(n(36),n(37),n(1));var u=function(e){return Object(b.jsx)("div",{className:"table tableContent",children:Object(b.jsxs)("table",{width:"100%",children:[Object(b.jsx)("thead",{className:"table-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Image"}),Object(b.jsx)("td",{children:"First Name"}),Object(b.jsx)("td",{children:"Last Name"}),Object(b.jsx)("td",{children:"Email ID"}),Object(b.jsx)("td",{children:"Phone Number"})]})}),Object(b.jsx)("tbody",{className:"table-bordered",children:e.results&&e.results.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{className:"roundImage",src:e.picture.thumbnail,alt:""})}),Object(b.jsx)("td",{children:e.name.first}),Object(b.jsx)("td",{children:e.name.last}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.phone})]})}))})]})})},h=n(25),p=n.n(h),f=function(){return p.a.get("https://randomuser.me/api?results=20&nat=us")},O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={image:"",match:!1,matchCount:0},e.handleSort=function(t){console.log("sort by name"),e.sortEmployees()},e.handleFilter=function(t){console.log("filter by name");var n=document.getElementById("filter").value;console.log(n),e.filterEmployees(n)},e.handleClearFilter=function(t){console.log("Clear Filter"),e.clearFilterEmployees()},e.loadEmployees=function(){f().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e.sortEmployees=function(){var t=e.state.employees;return t.sort((function(e,t){return e.name.first>t.name.first?1:-1})),e.setState({employees:t})},e.filterEmployees=function(t){console.log("inside"),console.log(t);var n=e.state.employees,r=n.filter((function(e){return e.name.first.toLowerCase().includes(t.toLowerCase())}));return e.setState({employees:r,original:n})},e.clearFilterEmployees=function(t){return e.setState({employees:e.state.original})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{className:"btn btn-secondary mt-3 btn-lg btn-block",onClick:this.handleSort,children:"Organize by alphabetical order"})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("input",{className:"col mr-3 ml-3 form-control",id:"filter",placeholder:"Search By Name"}),Object(b.jsx)("button",{className:"btn btn-primary col mr-3 ml-3",onClick:this.handleFilter,children:"Search"}),Object(b.jsx)("button",{className:"btn btn-danger col mr-3 ml-3",onClick:this.handleClearFilter,children:"Clear Filter"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(u,{results:this.state.employees})]})}}]),n}(r.Component),x=n(30);n(57);var y=function(e){return Object(b.jsx)("main",Object(x.a)({className:"wrapper"},e))};var g=function(){return Object(b.jsx)(a.a,{children:Object(b.jsx)("div",{children:Object(b.jsx)(y,{children:Object(b.jsx)(o.a,{exact:!0,path:"/employee-directory",component:O})})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),l(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.cb632cd0.chunk.js.map