(this.webpackJsonpreactprojekt_movies=this.webpackJsonpreactprojekt_movies||[]).push([[0],{14:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(7),o=t.n(i),c=t(2),s=t(3),l=t(5),d=t(4),u=t(0),b=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).handleFormSubmit=function(e){e.preventDefault()},e}return Object(s.a)(t,[{key:"render",value:function(){return Object(u.jsx)("form",{onSubmit:this.handleFormSubmit,children:Object(u.jsx)("div",{className:"form-row mb-5",children:Object(u.jsx)("input",{onChange:this.props.searchMovieProp,type:"text",className:"form-control",placeholder:"search a movie"})})})}}]),t}(a.a.Component),h=function(e){return Object(u.jsx)("div",{className:"row",children:e.movies.map((function(n){return Object(u.jsx)("div",{className:"col-lg-4",children:Object(u.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(u.jsx)("img",{src:n.imageURL,className:"card-img-top",alt:"Sample movie"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:n.name}),Object(u.jsx)("p",{className:"card-text",children:n.overview}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)("button",{type:"button",onClick:function(t){return e.deleteMovieList(n)},className:"btn btn-md btn-outline-danger",children:"Delete"}),Object(u.jsx)("h2",{children:Object(u.jsx)("span",{className:"badge badge-info",children:n.rating})})]})]})]})},n.id)}))})},m=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={movies:[{id:1,name:"Riverdale",rating:8.3,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg"},{id:2,name:"Snow Piercer",rating:7.5,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/95xQPSqwvQDRoB3rXUn4lRyJrBW.jpg"},{id:3,name:"Wanda Vision",rating:8.4,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/glKDfE6btIRcVB5zrjspRIs4r52.jpg"},{id:4,name:"Monarca",rating:7.8,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/oXiTq8dm9ugYjLCKFDnLE4pRMGT.jpg"},{id:5,name:"Jumanji",rating:7,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg"},{id:6,name:"The Simpsons",rating:7.8,overview:"Learn how to configure a non-root public URL by running `npm run build",imageURL:"https://www.themoviedb.org/t/p/w220_and_h330_face/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg"}],searchQuery:""},e.deleteMovie=function(n){var t=e.state.movies.filter((function(e){return e.id!==n.id}));e.setState((function(e){return{movies:t}}))},e.searchMovie=function(n){e.setState({searchQuery:n.target.value})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,n=this.state.movies.filter((function(n){return-1!==n.name.toLowerCase().indexOf(e.state.searchQuery.toLowerCase())}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{class:"navbar navbar-light bg-light justify-content-center",children:Object(u.jsx)("a",{class:"navbar-brand",href:"#",children:Object(u.jsx)("h2",{children:"MY MOVIES"})})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12",children:Object(u.jsx)(b,{searchMovieProp:this.searchMovie})})}),Object(u.jsx)(h,{movies:n,deleteMovieList:this.deleteMovie})]})}}]),t}(a.a.Component);t(13);o.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2419f539.chunk.js.map