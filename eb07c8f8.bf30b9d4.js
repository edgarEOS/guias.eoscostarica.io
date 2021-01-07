(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),o=(t(0),t(120)),c={id:"plantilla-para-backend",title:"Plantilla para Backend",sidebar_label:"Plantilla para Backend"},i={unversionedId:"plantilla-para-backend",id:"plantilla-para-backend",isDocsHomePage:!1,title:"Plantilla para Backend",description:"Una plantilla altamente escalable con las mejores pr\xe1cticas, hecha para un inicio r\xe1pido de proyectos backend. Esta plantilla presenta todas las \xfaltimas herramientas y buenas pr\xe1cticas en la industria. Puedes encontrar el repositorio aqu\xed.",source:"@site/docs/plantilla-para-backend.md",slug:"/plantilla-para-backend",permalink:"/docs/plantilla-para-backend",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/plantilla-para-backend.md",version:"current",lastUpdatedBy:"Steph",lastUpdatedAt:1610058988,sidebar_label:"Plantilla para Backend",sidebar:"docs",previous:{title:"Plantilla para Aplicaci\xf3n Web",permalink:"/docs/plantilla-para-aplicacion-web"},next:{title:"Material UI",permalink:"/docs/material-ui"}},l=[{value:"Tecnolog\xedas involucradas",id:"tecnolog\xedas-involucradas",children:[{value:"<strong>hasura</strong>",id:"hasura",children:[]},{value:"<strong>hapi</strong>",id:"hapi",children:[]},{value:"<strong>docker-compose</strong>",id:"docker-compose",children:[]}]},{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[{value:"Requerimientos previos",id:"requerimientos-previos",children:[]},{value:"Paso a paso",id:"paso-a-paso",children:[]}]},{value:"Ejecuci\xf3n",id:"ejecuci\xf3n",children:[]}],s={toc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Una plantilla altamente escalable con las mejores pr\xe1cticas, hecha para un inicio r\xe1pido de proyectos backend. Esta plantilla presenta todas las \xfaltimas herramientas y buenas pr\xe1cticas en la industria. Puedes encontrar el repositorio ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/backend-boilerplate"}),"aqu\xed"),"."),Object(o.b)("h2",{id:"tecnolog\xedas-involucradas"},"Tecnolog\xedas involucradas"),Object(o.b)("h3",{id:"hasura"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://hasura.io"}),"hasura"))),Object(o.b)("p",null,"El motor de GraphQL de Hasura es un servicio de c\xf3digo abierto que conecta su base de datos y microservicios y autogenera un backend GraphQL con ACL listo para producci\xf3n."),Object(o.b)("h3",{id:"hapi"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://hapi.dev/"}),"hapi"))),Object(o.b)("p",null,"Un servicio backend para l\xf3gica de negocios personalizadas, integrado con Hasura, usando ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions"}),"actions"),"."),Object(o.b)("h3",{id:"docker-compose"},Object(o.b)("strong",{parentName:"h3"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://docs.docker.com/compose/"}),"docker-compose"))),Object(o.b)("p",null,"Compose es una herramienta para definir y correr aplicaciones de docker con m\xfaltiples contenedores."),Object(o.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Se requieren conocimientos b\xe1sicos sobre Docker, Docker Compose y NodeJS.")),Object(o.b)("h3",{id:"requerimientos-previos"},"Requerimientos previos"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/"}),"git")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org"}),"nodejs")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://hasura.io/docs/2.0/graphql/manual/hasura-cli/install-hasura-cli.html#install-hasura-cli"}),"hasura"))),Object(o.b)("h3",{id:"paso-a-paso"},"Paso a paso"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clona el repo usando ",Object(o.b)("inlineCode",{parentName:"li"},"git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git")),Object(o.b)("li",{parentName:"ol"},"Accede al directorio del proyecto: ",Object(o.b)("inlineCode",{parentName:"li"},"cd backend-boilerplate")),Object(o.b)("li",{parentName:"ol"},"Copia el archivo ",Object(o.b)("inlineCode",{parentName:"li"},".env.example")," y luego actualiza las variables de acuerdo a tus necesidades")),Object(o.b)("h2",{id:"ejecuci\xf3n"},"Ejecuci\xf3n"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Es necesario contar con una terminal que pueda ejecutar el archivo ",Object(o.b)("inlineCode",{parentName:"p"},"makefile")," que se encuentra en la ra\xedz del proyecto. Para encontrar m\xe1s informaci\xf3n de make, puedes ir ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gnu.org/software/make/manual/make.html"}),"aqu\xed"),".")),Object(o.b)("p",null,"Sabiendo lo anterior, se procede a ejecutar el comando ",Object(o.b)("inlineCode",{parentName:"p"},"make run"),". Despu\xe9s de esto, estar\xe1n disponibles los puertos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"hapi en el puerto http://localhost:9090"),Object(o.b)("li",{parentName:"ul"},"hasura en el puerto http://localhost:9695")))}p.isMDXComponent=!0},120:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(m,i(i({ref:a},s),{},{components:t})):r.a.createElement(m,i({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);