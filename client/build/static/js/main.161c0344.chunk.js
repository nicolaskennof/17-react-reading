(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(99)},55:function(e,t,a){},70:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),l=a.n(o),c=(a(55),a(14)),i=a(15),s=a(17),u=a(16),m=a(18),h=a(108),d=a(107),p=a(106),f=a(105),v=a(100);var E=function(){return r.a.createElement(p.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(p.a.Brand,{href:"/"},"Google Reading List"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(v.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Search"),r.a.createElement(v.a,{to:"/saved",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Saved"))))},k=a(101);a(70);var b=function(){return r.a.createElement(k.a,{className:"header text-center"},r.a.createElement("div",{className:"headerDiv"},r.a.createElement("h1",null,"React Google Books Search"),r.a.createElement("p",null,"Search for and Save Books of Interest")))},g=a(103),w=a(109),y=a(102),S=a(25),O=a.n(S),j={getGoogleBooks:function(e){return O.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=").concat("AIzaSyB_1xEW-SARUv801bA0uiiozdtcbLcXf54"))},saveBook:function(e){return O.a.post("/api/books",e)},deleteBook:function(e){return O.a.delete("/api/books/"+e)},getBooks:function(){return O.a.get("/api/books")}},B=(a(91),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).save=function(){j.saveBook({title:a.props.title,authors:a.props.authors,description:a.props.description,image:a.props.image,link:a.props.link}).then(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(w.a.Header,{as:"h5"},r.a.createElement("i",null,this.props.title)),r.a.createElement(w.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(w.a.Img,{className:"bookImg",src:this.props.image})),r.a.createElement("div",{className:"col-10 bookDetails"},r.a.createElement(w.a.Title,null,this.props.authors),r.a.createElement(w.a.Text,null,this.props.description))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12  text-center"},r.a.createElement("a",{variant:"primary",href:this.props.link,target:"_blank",rel:"noopener noreferrer"},"View ",r.a.createElement("i",{class:"fas fa-external-link-alt"})),r.a.createElement(y.a,{className:"btn-save",variant:"success",onClick:this.save},"Save"))))),r.a.createElement("br",null))}}]),t}(n.Component));var N=function(e){return r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Header,{as:"h5"},r.a.createElement("b",null,"YOUR RESULTS:")),r.a.createElement(w.a.Body,null,e.books.map(function(e){return r.a.createElement(B,{key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.smallThumbnail,link:e.volumeInfo.previewLink})}))))},x=a(104),C=a(93);var I=function(e){return r.a.createElement(g.a,null,r.a.createElement(k.a,null,r.a.createElement(g.a,null,r.a.createElement(x.a,{className:"text-center"},r.a.createElement(C.a,{onChange:e.handleSearchChange,value:e.textSearch,type:"text",placeholder:"Search for your desired title here...",className:"mr-sm-2 searchBar"}),r.a.createElement("br",null),r.a.createElement(y.a,{onClick:function(){return e.handleSearchClick()},variant:"outline-dark"},"Search Now!")))))},A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={textSearch:"",books:[]},a.handleSearchChange=function(e){a.setState({textSearch:e.target.value})},a.handleSearchClick=function(e){j.getGoogleBooks(a.state.textSearch).then(function(e){a.setState({books:e.data.items})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{textSearch:this.state.textSearch,handleSearchClick:this.handleSearchClick,handleSearchChange:this.handleSearchChange}),r.a.createElement(N,{books:this.state.books}))}}]),t}(n.Component),L=(a(94),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).delete=function(){console.log(a.props.id),j.deleteBook(a.props.id).then(function(){a.props.reloadBooks()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(w.a.Header,{as:"h5"},r.a.createElement("i",null,this.props.title)),r.a.createElement(w.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(w.a.Img,{className:"bookImg",src:this.props.image})),r.a.createElement("div",{className:"col-10 bookDetails"},r.a.createElement(w.a.Title,null,this.props.authors),r.a.createElement(w.a.Text,null,this.props.description))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12  text-center"},r.a.createElement("a",{variant:"primary",href:this.props.link,target:"_blank",rel:"noopener noreferrer"},"View ",r.a.createElement("i",{class:"fas fa-external-link-alt"})),r.a.createElement(y.a,{className:"btn-delete",variant:"danger",onClick:this.delete},"Delete"))))),r.a.createElement("br",null))}}]),t}(n.Component));var R=function(e){return r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(w.a.Header,{as:"h5"},r.a.createElement("b",null,"YOUR SAVED BOOKS:")),r.a.createElement(w.a.Body,null,e.books.map(function(t){return r.a.createElement(L,{reloadBooks:e.reloadBooks,key:t._id,id:t._id,title:t.title,authors:t.authors,description:t.description,image:t.image,link:t.link})}))))};var T=function(e){return r.a.createElement(g.a,null,r.a.createElement(k.a,{className:"text-center"},r.a.createElement("h2",null,"Here below are the books you saved"),r.a.createElement("p",null,"You have the option to delete some them if not anymore of interest",r.a.createElement("br",null),'by clicking on the respective "',r.a.createElement("i",null,"delete"),'" button')))},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.reloadBooks=function(){j.getBooks().then(function(e){a.setState({books:e.data})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.getBooks().then(function(t){e.setState({books:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(R,{reloadBooks:this.reloadBooks,books:this.state.books}))}}]),t}(n.Component),H=(a(96),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/saved",component:D})))}}]),t}(n.Component)),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(H,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");U?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):W(e)})}}()}},[[49,2,1]]]);
//# sourceMappingURL=main.161c0344.chunk.js.map