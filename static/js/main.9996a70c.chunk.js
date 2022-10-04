(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(4),s=c.n(i),a=(c(10),c(2)),n=c(1),r=(c(11),c(12),c(13),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=c(5),j=c.n(o);c(15);var m=function(e){var t=e.onAdd,c=Object(n.useState)(""),i=Object(a.a)(c,2),s=i[0],d=i[1],o=Object(n.useState)(null),m=Object(a.a)(o,2),b=m[0],u=m[1],h=Object(n.useState)(!1),v=Object(a.a)(h,2),O=v[0],x=v[1],f=Object(n.useState)(!1),p=Object(a.a)(f,2),N=p[0],g=p[1],y=Object(n.useCallback)((function(e){e.preventDefault(),g(!0),function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=47299fb4","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}(s).then((function(e){"Error"in e?x(!0):u({title:e.Title,description:e.Plot,imgUrl:"N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID})})).finally((function(){return g(!1)}))}),[b,s]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:y,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){d(e.target.value),x(!1)}})}),O&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:j()("button is-light",{"is-loading":N}),disabled:!s,children:b?"Search again":"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:b&&Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){t(b),u(null),x(!1),d("")},children:"Add to the list"})})]})]}),b&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:b})]})]})},b=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(m,{onAdd:function(e){c.every((function(t){return t.imdbId!==e.imdbId}))&&i(c.concat(e))}})})]})};s.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.9996a70c.chunk.js.map